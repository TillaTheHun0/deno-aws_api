// Autogenerated API client for: AWS IoT Jobs Data Plane

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class IoTJobsDataPlane {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(IoTJobsDataPlane.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2017-09-29",
    "endpointPrefix": "data.jobs.iot",
    "protocol": "rest-json",
    "serviceFullName": "AWS IoT Jobs Data Plane",
    "serviceId": "IoT Jobs Data Plane",
    "signatureVersion": "v4",
    "signingName": "iot-jobs-data",
    "uid": "iot-jobs-data-2017-09-29"
  };

  async describeJobExecution(
    {abortSignal, ...params}: RequestConfig & s.DescribeJobExecutionRequest,
  ): Promise<s.DescribeJobExecutionResponse> {
    const query = new URLSearchParams;
    if (params["includeJobDocument"] != null) query.set("includeJobDocument", params["includeJobDocument"]?.toString() ?? "");
    if (params["executionNumber"] != null) query.set("executionNumber", params["executionNumber"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DescribeJobExecution",
      method: "GET",
      requestUri: cmnP.encodePath`/things/${params["thingName"]}/jobs/${params["jobId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "execution": toJobExecution,
      },
    }, await resp.json());
  }

  async getPendingJobExecutions(
    {abortSignal, ...params}: RequestConfig & s.GetPendingJobExecutionsRequest,
  ): Promise<s.GetPendingJobExecutionsResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetPendingJobExecutions",
      method: "GET",
      requestUri: cmnP.encodePath`/things/${params["thingName"]}/jobs`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "inProgressJobs": [toJobExecutionSummary],
        "queuedJobs": [toJobExecutionSummary],
      },
    }, await resp.json());
  }

  async startNextPendingJobExecution(
    {abortSignal, ...params}: RequestConfig & s.StartNextPendingJobExecutionRequest,
  ): Promise<s.StartNextPendingJobExecutionResponse> {
    const body: jsonP.JSONObject = {
      statusDetails: params["statusDetails"],
      stepTimeoutInMinutes: params["stepTimeoutInMinutes"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartNextPendingJobExecution",
      method: "PUT",
      requestUri: cmnP.encodePath`/things/${params["thingName"]}/jobs/$next`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "execution": toJobExecution,
      },
    }, await resp.json());
  }

  async updateJobExecution(
    {abortSignal, ...params}: RequestConfig & s.UpdateJobExecutionRequest,
  ): Promise<s.UpdateJobExecutionResponse> {
    const body: jsonP.JSONObject = {
      status: params["status"],
      statusDetails: params["statusDetails"],
      stepTimeoutInMinutes: params["stepTimeoutInMinutes"],
      expectedVersion: params["expectedVersion"],
      includeJobExecutionState: params["includeJobExecutionState"],
      includeJobDocument: params["includeJobDocument"],
      executionNumber: params["executionNumber"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateJobExecution",
      requestUri: cmnP.encodePath`/things/${params["thingName"]}/jobs/${params["jobId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "executionState": toJobExecutionState,
        "jobDocument": "s",
      },
    }, await resp.json());
  }

}

function toJobExecution(root: jsonP.JSONValue): s.JobExecution {
  return jsonP.readObj({
    required: {},
    optional: {
      "jobId": "s",
      "thingName": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.JobExecutionStatus>(x),
      "statusDetails": x => jsonP.readMap(String, String, x),
      "queuedAt": "n",
      "startedAt": "n",
      "lastUpdatedAt": "n",
      "approximateSecondsBeforeTimedOut": "n",
      "versionNumber": "n",
      "executionNumber": "n",
      "jobDocument": "s",
    },
  }, root);
}

function toJobExecutionSummary(root: jsonP.JSONValue): s.JobExecutionSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "jobId": "s",
      "queuedAt": "n",
      "startedAt": "n",
      "lastUpdatedAt": "n",
      "versionNumber": "n",
      "executionNumber": "n",
    },
  }, root);
}

function toJobExecutionState(root: jsonP.JSONValue): s.JobExecutionState {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.JobExecutionStatus>(x),
      "statusDetails": x => jsonP.readMap(String, String, x),
      "versionNumber": "n",
    },
  }, root);
}

// Autogenerated API client for: AWS IoT Data Plane

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class IotData {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(IotData.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2015-05-28",
    "endpointPrefix": "data.iot",
    "protocol": "rest-json",
    "serviceFullName": "AWS IoT Data Plane",
    "serviceId": "IoT Data Plane",
    "signatureVersion": "v4",
    "signingName": "iotdata",
    "uid": "iot-data-2015-05-28"
  };

  async deleteThingShadow(
    {abortSignal, ...params}: RequestConfig & s.DeleteThingShadowRequest,
  ): Promise<s.DeleteThingShadowResponse> {
    const query = new URLSearchParams;
    if (params["shadowName"] != null) query.set("name", params["shadowName"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DeleteThingShadow",
      method: "DELETE",
      requestUri: cmnP.encodePath`/things/${params["thingName"]}/shadow`,
    });
  return {
    payload: await resp.text(), // TODO: maybe allow proper body streaming,
  };
  }

  async getThingShadow(
    {abortSignal, ...params}: RequestConfig & s.GetThingShadowRequest,
  ): Promise<s.GetThingShadowResponse> {
    const query = new URLSearchParams;
    if (params["shadowName"] != null) query.set("name", params["shadowName"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "GetThingShadow",
      method: "GET",
      requestUri: cmnP.encodePath`/things/${params["thingName"]}/shadow`,
    });
  return {
    payload: await resp.text(), // TODO: maybe allow proper body streaming,
  };
  }

  async listNamedShadowsForThing(
    {abortSignal, ...params}: RequestConfig & s.ListNamedShadowsForThingRequest,
  ): Promise<s.ListNamedShadowsForThingResponse> {
    const query = new URLSearchParams;
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["pageSize"] != null) query.set("pageSize", params["pageSize"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListNamedShadowsForThing",
      method: "GET",
      requestUri: cmnP.encodePath`/api/things/shadow/ListNamedShadowsForThing/${params["thingName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "results": ["s"],
        "nextToken": "s",
        "timestamp": "n",
      },
    }, await resp.json());
  }

  async publish(
    {abortSignal, ...params}: RequestConfig & s.PublishRequest,
  ): Promise<void> {
    const body = typeof params["payload"] === 'string' ? new TextEncoder().encode(params["payload"]) : params["payload"];
    const query = new URLSearchParams;
    if (params["qos"] != null) query.set("qos", params["qos"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query, body,
      action: "Publish",
      requestUri: cmnP.encodePath`/topics/${params["topic"]}`,
    });
  }

  async updateThingShadow(
    {abortSignal, ...params}: RequestConfig & s.UpdateThingShadowRequest,
  ): Promise<s.UpdateThingShadowResponse> {
    const body = typeof params["payload"] === 'string' ? new TextEncoder().encode(params["payload"]) : params["payload"];
    const query = new URLSearchParams;
    if (params["shadowName"] != null) query.set("name", params["shadowName"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query, body,
      action: "UpdateThingShadow",
      requestUri: cmnP.encodePath`/things/${params["thingName"]}/shadow`,
    });
  return {
    payload: await resp.text(), // TODO: maybe allow proper body streaming,
  };
  }

}


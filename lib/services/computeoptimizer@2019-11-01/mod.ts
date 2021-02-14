// Autogenerated API client for: AWS Compute Optimizer

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class ComputeOptimizer {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ComputeOptimizer.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2019-11-01",
    "endpointPrefix": "compute-optimizer",
    "jsonVersion": "1.0",
    "protocol": "json",
    "serviceFullName": "AWS Compute Optimizer",
    "serviceId": "Compute Optimizer",
    "signatureVersion": "v4",
    "signingName": "compute-optimizer",
    "targetPrefix": "ComputeOptimizerService",
    "uid": "compute-optimizer-2019-11-01"
  };

  async describeRecommendationExportJobs(
    {abortSignal, ...params}: RequestConfig & s.DescribeRecommendationExportJobsRequest = {},
  ): Promise<s.DescribeRecommendationExportJobsResponse> {
    const body: jsonP.JSONObject = {
      jobIds: params["jobIds"],
      filters: params["filters"]?.map(x => fromJobFilter(x)),
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeRecommendationExportJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "recommendationExportJobs": [toRecommendationExportJob],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async exportAutoScalingGroupRecommendations(
    {abortSignal, ...params}: RequestConfig & s.ExportAutoScalingGroupRecommendationsRequest,
  ): Promise<s.ExportAutoScalingGroupRecommendationsResponse> {
    const body: jsonP.JSONObject = {
      accountIds: params["accountIds"],
      filters: params["filters"]?.map(x => fromFilter(x)),
      fieldsToExport: params["fieldsToExport"],
      s3DestinationConfig: fromS3DestinationConfig(params["s3DestinationConfig"]),
      fileFormat: params["fileFormat"],
      includeMemberAccounts: params["includeMemberAccounts"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ExportAutoScalingGroupRecommendations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "jobId": "s",
        "s3Destination": toS3Destination,
      },
    }, await resp.json());
  }

  async exportEC2InstanceRecommendations(
    {abortSignal, ...params}: RequestConfig & s.ExportEC2InstanceRecommendationsRequest,
  ): Promise<s.ExportEC2InstanceRecommendationsResponse> {
    const body: jsonP.JSONObject = {
      accountIds: params["accountIds"],
      filters: params["filters"]?.map(x => fromFilter(x)),
      fieldsToExport: params["fieldsToExport"],
      s3DestinationConfig: fromS3DestinationConfig(params["s3DestinationConfig"]),
      fileFormat: params["fileFormat"],
      includeMemberAccounts: params["includeMemberAccounts"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ExportEC2InstanceRecommendations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "jobId": "s",
        "s3Destination": toS3Destination,
      },
    }, await resp.json());
  }

  async getAutoScalingGroupRecommendations(
    {abortSignal, ...params}: RequestConfig & s.GetAutoScalingGroupRecommendationsRequest = {},
  ): Promise<s.GetAutoScalingGroupRecommendationsResponse> {
    const body: jsonP.JSONObject = {
      accountIds: params["accountIds"],
      autoScalingGroupArns: params["autoScalingGroupArns"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
      filters: params["filters"]?.map(x => fromFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAutoScalingGroupRecommendations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "nextToken": "s",
        "autoScalingGroupRecommendations": [toAutoScalingGroupRecommendation],
        "errors": [toGetRecommendationError],
      },
    }, await resp.json());
  }

  async getEBSVolumeRecommendations(
    {abortSignal, ...params}: RequestConfig & s.GetEBSVolumeRecommendationsRequest = {},
  ): Promise<s.GetEBSVolumeRecommendationsResponse> {
    const body: jsonP.JSONObject = {
      volumeArns: params["volumeArns"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
      filters: params["filters"]?.map(x => fromEBSFilter(x)),
      accountIds: params["accountIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetEBSVolumeRecommendations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "nextToken": "s",
        "volumeRecommendations": [toVolumeRecommendation],
        "errors": [toGetRecommendationError],
      },
    }, await resp.json());
  }

  async getEC2InstanceRecommendations(
    {abortSignal, ...params}: RequestConfig & s.GetEC2InstanceRecommendationsRequest = {},
  ): Promise<s.GetEC2InstanceRecommendationsResponse> {
    const body: jsonP.JSONObject = {
      instanceArns: params["instanceArns"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
      filters: params["filters"]?.map(x => fromFilter(x)),
      accountIds: params["accountIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetEC2InstanceRecommendations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "nextToken": "s",
        "instanceRecommendations": [toInstanceRecommendation],
        "errors": [toGetRecommendationError],
      },
    }, await resp.json());
  }

  async getEC2RecommendationProjectedMetrics(
    {abortSignal, ...params}: RequestConfig & s.GetEC2RecommendationProjectedMetricsRequest,
  ): Promise<s.GetEC2RecommendationProjectedMetricsResponse> {
    const body: jsonP.JSONObject = {
      instanceArn: params["instanceArn"],
      stat: params["stat"],
      period: params["period"],
      startTime: jsonP.serializeDate_unixTimestamp(params["startTime"]),
      endTime: jsonP.serializeDate_unixTimestamp(params["endTime"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetEC2RecommendationProjectedMetrics",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "recommendedOptionProjectedMetrics": [toRecommendedOptionProjectedMetric],
      },
    }, await resp.json());
  }

  async getEnrollmentStatus(
    {abortSignal, ...params}: RequestConfig & s.GetEnrollmentStatusRequest = {},
  ): Promise<s.GetEnrollmentStatusResponse> {
    const body: jsonP.JSONObject = {
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetEnrollmentStatus",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.Status>(x),
        "statusReason": "s",
        "memberAccountsEnrolled": "b",
      },
    }, await resp.json());
  }

  async getLambdaFunctionRecommendations(
    {abortSignal, ...params}: RequestConfig & s.GetLambdaFunctionRecommendationsRequest = {},
  ): Promise<s.GetLambdaFunctionRecommendationsResponse> {
    const body: jsonP.JSONObject = {
      functionArns: params["functionArns"],
      accountIds: params["accountIds"],
      filters: params["filters"]?.map(x => fromLambdaFunctionRecommendationFilter(x)),
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetLambdaFunctionRecommendations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "nextToken": "s",
        "lambdaFunctionRecommendations": [toLambdaFunctionRecommendation],
      },
    }, await resp.json());
  }

  async getRecommendationSummaries(
    {abortSignal, ...params}: RequestConfig & s.GetRecommendationSummariesRequest = {},
  ): Promise<s.GetRecommendationSummariesResponse> {
    const body: jsonP.JSONObject = {
      accountIds: params["accountIds"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetRecommendationSummaries",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "nextToken": "s",
        "recommendationSummaries": [toRecommendationSummary],
      },
    }, await resp.json());
  }

  async updateEnrollmentStatus(
    {abortSignal, ...params}: RequestConfig & s.UpdateEnrollmentStatusRequest,
  ): Promise<s.UpdateEnrollmentStatusResponse> {
    const body: jsonP.JSONObject = {
      status: params["status"],
      includeMemberAccounts: params["includeMemberAccounts"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateEnrollmentStatus",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.Status>(x),
        "statusReason": "s",
      },
    }, await resp.json());
  }

}

function fromJobFilter(input?: s.JobFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    name: input["name"],
    values: input["values"],
  }
}

function fromFilter(input?: s.Filter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    name: input["name"],
    values: input["values"],
  }
}

function fromS3DestinationConfig(input?: s.S3DestinationConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    bucket: input["bucket"],
    keyPrefix: input["keyPrefix"],
  }
}

function fromEBSFilter(input?: s.EBSFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    name: input["name"],
    values: input["values"],
  }
}

function fromLambdaFunctionRecommendationFilter(input?: s.LambdaFunctionRecommendationFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    name: input["name"],
    values: input["values"],
  }
}

function toRecommendationExportJob(root: jsonP.JSONValue): s.RecommendationExportJob {
  return jsonP.readObj({
    required: {},
    optional: {
      "jobId": "s",
      "destination": toExportDestination,
      "resourceType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResourceType>(x),
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.JobStatus>(x),
      "creationTimestamp": "d",
      "lastUpdatedTimestamp": "d",
      "failureReason": "s",
    },
  }, root);
}

function toExportDestination(root: jsonP.JSONValue): s.ExportDestination {
  return jsonP.readObj({
    required: {},
    optional: {
      "s3": toS3Destination,
    },
  }, root);
}

function toS3Destination(root: jsonP.JSONValue): s.S3Destination {
  return jsonP.readObj({
    required: {},
    optional: {
      "bucket": "s",
      "key": "s",
      "metadataKey": "s",
    },
  }, root);
}

function toAutoScalingGroupRecommendation(root: jsonP.JSONValue): s.AutoScalingGroupRecommendation {
  return jsonP.readObj({
    required: {},
    optional: {
      "accountId": "s",
      "autoScalingGroupArn": "s",
      "autoScalingGroupName": "s",
      "finding": (x: jsonP.JSONValue) => cmnP.readEnum<s.Finding>(x),
      "utilizationMetrics": [toUtilizationMetric],
      "lookBackPeriodInDays": "n",
      "currentConfiguration": toAutoScalingGroupConfiguration,
      "recommendationOptions": [toAutoScalingGroupRecommendationOption],
      "lastRefreshTimestamp": "d",
    },
  }, root);
}

function toUtilizationMetric(root: jsonP.JSONValue): s.UtilizationMetric {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": (x: jsonP.JSONValue) => cmnP.readEnum<s.MetricName>(x),
      "statistic": (x: jsonP.JSONValue) => cmnP.readEnum<s.MetricStatistic>(x),
      "value": "n",
    },
  }, root);
}

function toAutoScalingGroupConfiguration(root: jsonP.JSONValue): s.AutoScalingGroupConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "desiredCapacity": "n",
      "minSize": "n",
      "maxSize": "n",
      "instanceType": "s",
    },
  }, root);
}

function toAutoScalingGroupRecommendationOption(root: jsonP.JSONValue): s.AutoScalingGroupRecommendationOption {
  return jsonP.readObj({
    required: {},
    optional: {
      "configuration": toAutoScalingGroupConfiguration,
      "projectedUtilizationMetrics": [toUtilizationMetric],
      "performanceRisk": "n",
      "rank": "n",
    },
  }, root);
}

function toGetRecommendationError(root: jsonP.JSONValue): s.GetRecommendationError {
  return jsonP.readObj({
    required: {},
    optional: {
      "identifier": "s",
      "code": "s",
      "message": "s",
    },
  }, root);
}

function toVolumeRecommendation(root: jsonP.JSONValue): s.VolumeRecommendation {
  return jsonP.readObj({
    required: {},
    optional: {
      "volumeArn": "s",
      "accountId": "s",
      "currentConfiguration": toVolumeConfiguration,
      "finding": (x: jsonP.JSONValue) => cmnP.readEnum<s.EBSFinding>(x),
      "utilizationMetrics": [toEBSUtilizationMetric],
      "lookBackPeriodInDays": "n",
      "volumeRecommendationOptions": [toVolumeRecommendationOption],
      "lastRefreshTimestamp": "d",
    },
  }, root);
}

function toVolumeConfiguration(root: jsonP.JSONValue): s.VolumeConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "volumeType": "s",
      "volumeSize": "n",
      "volumeBaselineIOPS": "n",
      "volumeBurstIOPS": "n",
      "volumeBaselineThroughput": "n",
      "volumeBurstThroughput": "n",
    },
  }, root);
}

function toEBSUtilizationMetric(root: jsonP.JSONValue): s.EBSUtilizationMetric {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": (x: jsonP.JSONValue) => cmnP.readEnum<s.EBSMetricName>(x),
      "statistic": (x: jsonP.JSONValue) => cmnP.readEnum<s.MetricStatistic>(x),
      "value": "n",
    },
  }, root);
}

function toVolumeRecommendationOption(root: jsonP.JSONValue): s.VolumeRecommendationOption {
  return jsonP.readObj({
    required: {},
    optional: {
      "configuration": toVolumeConfiguration,
      "performanceRisk": "n",
      "rank": "n",
    },
  }, root);
}

function toInstanceRecommendation(root: jsonP.JSONValue): s.InstanceRecommendation {
  return jsonP.readObj({
    required: {},
    optional: {
      "instanceArn": "s",
      "accountId": "s",
      "instanceName": "s",
      "currentInstanceType": "s",
      "finding": (x: jsonP.JSONValue) => cmnP.readEnum<s.Finding>(x),
      "utilizationMetrics": [toUtilizationMetric],
      "lookBackPeriodInDays": "n",
      "recommendationOptions": [toInstanceRecommendationOption],
      "recommendationSources": [toRecommendationSource],
      "lastRefreshTimestamp": "d",
    },
  }, root);
}

function toInstanceRecommendationOption(root: jsonP.JSONValue): s.InstanceRecommendationOption {
  return jsonP.readObj({
    required: {},
    optional: {
      "instanceType": "s",
      "projectedUtilizationMetrics": [toUtilizationMetric],
      "performanceRisk": "n",
      "rank": "n",
    },
  }, root);
}

function toRecommendationSource(root: jsonP.JSONValue): s.RecommendationSource {
  return jsonP.readObj({
    required: {},
    optional: {
      "recommendationSourceArn": "s",
      "recommendationSourceType": (x: jsonP.JSONValue) => cmnP.readEnum<s.RecommendationSourceType>(x),
    },
  }, root);
}

function toRecommendedOptionProjectedMetric(root: jsonP.JSONValue): s.RecommendedOptionProjectedMetric {
  return jsonP.readObj({
    required: {},
    optional: {
      "recommendedInstanceType": "s",
      "rank": "n",
      "projectedMetrics": [toProjectedMetric],
    },
  }, root);
}

function toProjectedMetric(root: jsonP.JSONValue): s.ProjectedMetric {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": (x: jsonP.JSONValue) => cmnP.readEnum<s.MetricName>(x),
      "timestamps": ["d"],
      "values": ["n"],
    },
  }, root);
}

function toLambdaFunctionRecommendation(root: jsonP.JSONValue): s.LambdaFunctionRecommendation {
  return jsonP.readObj({
    required: {},
    optional: {
      "functionArn": "s",
      "functionVersion": "s",
      "accountId": "s",
      "currentMemorySize": "n",
      "numberOfInvocations": "n",
      "utilizationMetrics": [toLambdaFunctionUtilizationMetric],
      "lookbackPeriodInDays": "n",
      "lastRefreshTimestamp": "d",
      "finding": (x: jsonP.JSONValue) => cmnP.readEnum<s.LambdaFunctionRecommendationFinding>(x),
      "findingReasonCodes": [(x: jsonP.JSONValue) => cmnP.readEnum<s.LambdaFunctionRecommendationFindingReasonCode>(x)],
      "memorySizeRecommendationOptions": [toLambdaFunctionMemoryRecommendationOption],
    },
  }, root);
}

function toLambdaFunctionUtilizationMetric(root: jsonP.JSONValue): s.LambdaFunctionUtilizationMetric {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": (x: jsonP.JSONValue) => cmnP.readEnum<s.LambdaFunctionMetricName>(x),
      "statistic": (x: jsonP.JSONValue) => cmnP.readEnum<s.LambdaFunctionMetricStatistic>(x),
      "value": "n",
    },
  }, root);
}

function toLambdaFunctionMemoryRecommendationOption(root: jsonP.JSONValue): s.LambdaFunctionMemoryRecommendationOption {
  return jsonP.readObj({
    required: {},
    optional: {
      "rank": "n",
      "memorySize": "n",
      "projectedUtilizationMetrics": [toLambdaFunctionMemoryProjectedMetric],
    },
  }, root);
}

function toLambdaFunctionMemoryProjectedMetric(root: jsonP.JSONValue): s.LambdaFunctionMemoryProjectedMetric {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": (x: jsonP.JSONValue) => cmnP.readEnum<s.LambdaFunctionMemoryMetricName>(x),
      "statistic": (x: jsonP.JSONValue) => cmnP.readEnum<s.LambdaFunctionMemoryMetricStatistic>(x),
      "value": "n",
    },
  }, root);
}

function toRecommendationSummary(root: jsonP.JSONValue): s.RecommendationSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "summaries": [toSummary],
      "recommendationResourceType": (x: jsonP.JSONValue) => cmnP.readEnum<s.RecommendationSourceType>(x),
      "accountId": "s",
    },
  }, root);
}

function toSummary(root: jsonP.JSONValue): s.Summary {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": (x: jsonP.JSONValue) => cmnP.readEnum<s.Finding>(x),
      "value": "n",
      "reasonCodeSummaries": [toReasonCodeSummary],
    },
  }, root);
}

function toReasonCodeSummary(root: jsonP.JSONValue): s.ReasonCodeSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": (x: jsonP.JSONValue) => cmnP.readEnum<s.FindingReasonCode>(x),
      "value": "n",
    },
  }, root);
}

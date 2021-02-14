// Autogenerated API client for: AWS Resource Groups Tagging API

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class ResourceGroupsTaggingAPI {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ResourceGroupsTaggingAPI.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2017-01-26",
    "endpointPrefix": "tagging",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS Resource Groups Tagging API",
    "serviceId": "Resource Groups Tagging API",
    "signatureVersion": "v4",
    "targetPrefix": "ResourceGroupsTaggingAPI_20170126",
    "uid": "resourcegroupstaggingapi-2017-01-26"
  };

  async describeReportCreation(
    {abortSignal, ...params}: RequestConfig & s.DescribeReportCreationInput = {},
  ): Promise<s.DescribeReportCreationOutput> {
    const body: jsonP.JSONObject = {
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeReportCreation",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Status": "s",
        "S3Location": "s",
        "ErrorMessage": "s",
      },
    }, await resp.json());
  }

  async getComplianceSummary(
    {abortSignal, ...params}: RequestConfig & s.GetComplianceSummaryInput = {},
  ): Promise<s.GetComplianceSummaryOutput> {
    const body: jsonP.JSONObject = {
      TargetIdFilters: params["TargetIdFilters"],
      RegionFilters: params["RegionFilters"],
      ResourceTypeFilters: params["ResourceTypeFilters"],
      TagKeyFilters: params["TagKeyFilters"],
      GroupBy: params["GroupBy"],
      MaxResults: params["MaxResults"],
      PaginationToken: params["PaginationToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetComplianceSummary",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "SummaryList": [toSummary],
        "PaginationToken": "s",
      },
    }, await resp.json());
  }

  async getResources(
    {abortSignal, ...params}: RequestConfig & s.GetResourcesInput = {},
  ): Promise<s.GetResourcesOutput> {
    const body: jsonP.JSONObject = {
      PaginationToken: params["PaginationToken"],
      TagFilters: params["TagFilters"]?.map(x => fromTagFilter(x)),
      ResourcesPerPage: params["ResourcesPerPage"],
      TagsPerPage: params["TagsPerPage"],
      ResourceTypeFilters: params["ResourceTypeFilters"],
      IncludeComplianceDetails: params["IncludeComplianceDetails"],
      ExcludeCompliantResources: params["ExcludeCompliantResources"],
      ResourceARNList: params["ResourceARNList"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResources",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PaginationToken": "s",
        "ResourceTagMappingList": [toResourceTagMapping],
      },
    }, await resp.json());
  }

  async getTagKeys(
    {abortSignal, ...params}: RequestConfig & s.GetTagKeysInput = {},
  ): Promise<s.GetTagKeysOutput> {
    const body: jsonP.JSONObject = {
      PaginationToken: params["PaginationToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetTagKeys",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PaginationToken": "s",
        "TagKeys": ["s"],
      },
    }, await resp.json());
  }

  async getTagValues(
    {abortSignal, ...params}: RequestConfig & s.GetTagValuesInput,
  ): Promise<s.GetTagValuesOutput> {
    const body: jsonP.JSONObject = {
      PaginationToken: params["PaginationToken"],
      Key: params["Key"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetTagValues",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PaginationToken": "s",
        "TagValues": ["s"],
      },
    }, await resp.json());
  }

  async startReportCreation(
    {abortSignal, ...params}: RequestConfig & s.StartReportCreationInput,
  ): Promise<s.StartReportCreationOutput> {
    const body: jsonP.JSONObject = {
      S3Bucket: params["S3Bucket"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartReportCreation",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async tagResources(
    {abortSignal, ...params}: RequestConfig & s.TagResourcesInput,
  ): Promise<s.TagResourcesOutput> {
    const body: jsonP.JSONObject = {
      ResourceARNList: params["ResourceARNList"],
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResources",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FailedResourcesMap": x => jsonP.readMap(String, toFailureInfo, x),
      },
    }, await resp.json());
  }

  async untagResources(
    {abortSignal, ...params}: RequestConfig & s.UntagResourcesInput,
  ): Promise<s.UntagResourcesOutput> {
    const body: jsonP.JSONObject = {
      ResourceARNList: params["ResourceARNList"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResources",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FailedResourcesMap": x => jsonP.readMap(String, toFailureInfo, x),
      },
    }, await resp.json());
  }

}

function fromTagFilter(input?: s.TagFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Values: input["Values"],
  }
}

function toSummary(root: jsonP.JSONValue): s.Summary {
  return jsonP.readObj({
    required: {},
    optional: {
      "LastUpdated": "s",
      "TargetId": "s",
      "TargetIdType": (x: jsonP.JSONValue) => cmnP.readEnum<s.TargetIdType>(x),
      "Region": "s",
      "ResourceType": "s",
      "NonCompliantResources": "n",
    },
  }, root);
}

function toResourceTagMapping(root: jsonP.JSONValue): s.ResourceTagMapping {
  return jsonP.readObj({
    required: {},
    optional: {
      "ResourceARN": "s",
      "Tags": [toTag],
      "ComplianceDetails": toComplianceDetails,
    },
  }, root);
}

function toTag(root: jsonP.JSONValue): s.Tag {
  return jsonP.readObj({
    required: {
      "Key": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

function toComplianceDetails(root: jsonP.JSONValue): s.ComplianceDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "NoncompliantKeys": ["s"],
      "KeysWithNoncompliantValues": ["s"],
      "ComplianceStatus": "b",
    },
  }, root);
}

function toFailureInfo(root: jsonP.JSONValue): s.FailureInfo {
  return jsonP.readObj({
    required: {},
    optional: {
      "StatusCode": "n",
      "ErrorCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.ErrorCode>(x),
      "ErrorMessage": "s",
    },
  }, root);
}

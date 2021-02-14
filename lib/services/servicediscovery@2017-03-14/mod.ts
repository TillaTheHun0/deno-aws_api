// Autogenerated API client for: AWS Cloud Map

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import * as uuidv4 from "https://deno.land/std@0.86.0/uuid/v4.ts";
import type * as s from "./structs.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class ServiceDiscovery {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ServiceDiscovery.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2017-03-14",
    "endpointPrefix": "servicediscovery",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "ServiceDiscovery",
    "serviceFullName": "AWS Cloud Map",
    "serviceId": "ServiceDiscovery",
    "signatureVersion": "v4",
    "targetPrefix": "Route53AutoNaming_v20170314",
    "uid": "servicediscovery-2017-03-14"
  };

  async createHttpNamespace(
    {abortSignal, ...params}: RequestConfig & s.CreateHttpNamespaceRequest,
  ): Promise<s.CreateHttpNamespaceResponse> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Description: params["Description"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHttpNamespace",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async createPrivateDnsNamespace(
    {abortSignal, ...params}: RequestConfig & s.CreatePrivateDnsNamespaceRequest,
  ): Promise<s.CreatePrivateDnsNamespaceResponse> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Description: params["Description"],
      Vpc: params["Vpc"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreatePrivateDnsNamespace",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async createPublicDnsNamespace(
    {abortSignal, ...params}: RequestConfig & s.CreatePublicDnsNamespaceRequest,
  ): Promise<s.CreatePublicDnsNamespaceResponse> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Description: params["Description"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreatePublicDnsNamespace",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async createService(
    {abortSignal, ...params}: RequestConfig & s.CreateServiceRequest,
  ): Promise<s.CreateServiceResponse> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      NamespaceId: params["NamespaceId"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Description: params["Description"],
      DnsConfig: fromDnsConfig(params["DnsConfig"]),
      HealthCheckConfig: fromHealthCheckConfig(params["HealthCheckConfig"]),
      HealthCheckCustomConfig: fromHealthCheckCustomConfig(params["HealthCheckCustomConfig"]),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateService",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Service": toService,
      },
    }, await resp.json());
  }

  async deleteNamespace(
    {abortSignal, ...params}: RequestConfig & s.DeleteNamespaceRequest,
  ): Promise<s.DeleteNamespaceResponse> {
    const body: jsonP.JSONObject = {
      Id: params["Id"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteNamespace",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async deleteService(
    {abortSignal, ...params}: RequestConfig & s.DeleteServiceRequest,
  ): Promise<s.DeleteServiceResponse> {
    const body: jsonP.JSONObject = {
      Id: params["Id"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteService",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deregisterInstance(
    {abortSignal, ...params}: RequestConfig & s.DeregisterInstanceRequest,
  ): Promise<s.DeregisterInstanceResponse> {
    const body: jsonP.JSONObject = {
      ServiceId: params["ServiceId"],
      InstanceId: params["InstanceId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeregisterInstance",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async discoverInstances(
    {abortSignal, ...params}: RequestConfig & s.DiscoverInstancesRequest,
  ): Promise<s.DiscoverInstancesResponse> {
    const body: jsonP.JSONObject = {
      NamespaceName: params["NamespaceName"],
      ServiceName: params["ServiceName"],
      MaxResults: params["MaxResults"],
      QueryParameters: params["QueryParameters"],
      OptionalParameters: params["OptionalParameters"],
      HealthStatus: params["HealthStatus"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DiscoverInstances",
      hostPrefix: `data-`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Instances": [toHttpInstanceSummary],
      },
    }, await resp.json());
  }

  async getInstance(
    {abortSignal, ...params}: RequestConfig & s.GetInstanceRequest,
  ): Promise<s.GetInstanceResponse> {
    const body: jsonP.JSONObject = {
      ServiceId: params["ServiceId"],
      InstanceId: params["InstanceId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetInstance",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Instance": toInstance,
      },
    }, await resp.json());
  }

  async getInstancesHealthStatus(
    {abortSignal, ...params}: RequestConfig & s.GetInstancesHealthStatusRequest,
  ): Promise<s.GetInstancesHealthStatusResponse> {
    const body: jsonP.JSONObject = {
      ServiceId: params["ServiceId"],
      Instances: params["Instances"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetInstancesHealthStatus",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Status": x => jsonP.readMap(String, y => cmnP.readEnum<s.HealthStatus>(y), x),
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async getNamespace(
    {abortSignal, ...params}: RequestConfig & s.GetNamespaceRequest,
  ): Promise<s.GetNamespaceResponse> {
    const body: jsonP.JSONObject = {
      Id: params["Id"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetNamespace",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Namespace": toNamespace,
      },
    }, await resp.json());
  }

  async getOperation(
    {abortSignal, ...params}: RequestConfig & s.GetOperationRequest,
  ): Promise<s.GetOperationResponse> {
    const body: jsonP.JSONObject = {
      OperationId: params["OperationId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetOperation",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Operation": toOperation,
      },
    }, await resp.json());
  }

  async getService(
    {abortSignal, ...params}: RequestConfig & s.GetServiceRequest,
  ): Promise<s.GetServiceResponse> {
    const body: jsonP.JSONObject = {
      Id: params["Id"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetService",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Service": toService,
      },
    }, await resp.json());
  }

  async listInstances(
    {abortSignal, ...params}: RequestConfig & s.ListInstancesRequest,
  ): Promise<s.ListInstancesResponse> {
    const body: jsonP.JSONObject = {
      ServiceId: params["ServiceId"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListInstances",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Instances": [toInstanceSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listNamespaces(
    {abortSignal, ...params}: RequestConfig & s.ListNamespacesRequest = {},
  ): Promise<s.ListNamespacesResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromNamespaceFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListNamespaces",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Namespaces": [toNamespaceSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listOperations(
    {abortSignal, ...params}: RequestConfig & s.ListOperationsRequest = {},
  ): Promise<s.ListOperationsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromOperationFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListOperations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Operations": [toOperationSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listServices(
    {abortSignal, ...params}: RequestConfig & s.ListServicesRequest = {},
  ): Promise<s.ListServicesResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromServiceFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListServices",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Services": [toServiceSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async registerInstance(
    {abortSignal, ...params}: RequestConfig & s.RegisterInstanceRequest,
  ): Promise<s.RegisterInstanceResponse> {
    const body: jsonP.JSONObject = {
      ServiceId: params["ServiceId"],
      InstanceId: params["InstanceId"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Attributes: params["Attributes"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RegisterInstance",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<s.UntagResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceARN: params["ResourceARN"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateInstanceCustomHealthStatus(
    {abortSignal, ...params}: RequestConfig & s.UpdateInstanceCustomHealthStatusRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServiceId: params["ServiceId"],
      InstanceId: params["InstanceId"],
      Status: params["Status"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateInstanceCustomHealthStatus",
    });
  }

  async updateService(
    {abortSignal, ...params}: RequestConfig & s.UpdateServiceRequest,
  ): Promise<s.UpdateServiceResponse> {
    const body: jsonP.JSONObject = {
      Id: params["Id"],
      Service: fromServiceChange(params["Service"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateService",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "OperationId": "s",
      },
    }, await resp.json());
  }

}

function fromTag(input?: s.Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
  }
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

function fromDnsConfig(input?: s.DnsConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    NamespaceId: input["NamespaceId"],
    RoutingPolicy: input["RoutingPolicy"],
    DnsRecords: input["DnsRecords"]?.map(x => fromDnsRecord(x)),
  }
}
function toDnsConfig(root: jsonP.JSONValue): s.DnsConfig {
  return jsonP.readObj({
    required: {
      "DnsRecords": [toDnsRecord],
    },
    optional: {
      "NamespaceId": "s",
      "RoutingPolicy": (x: jsonP.JSONValue) => cmnP.readEnum<s.RoutingPolicy>(x),
    },
  }, root);
}

function fromDnsRecord(input?: s.DnsRecord | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    TTL: input["TTL"],
  }
}
function toDnsRecord(root: jsonP.JSONValue): s.DnsRecord {
  return jsonP.readObj({
    required: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.RecordType>(x),
      "TTL": "n",
    },
    optional: {},
  }, root);
}

function fromHealthCheckConfig(input?: s.HealthCheckConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    ResourcePath: input["ResourcePath"],
    FailureThreshold: input["FailureThreshold"],
  }
}
function toHealthCheckConfig(root: jsonP.JSONValue): s.HealthCheckConfig {
  return jsonP.readObj({
    required: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.HealthCheckType>(x),
    },
    optional: {
      "ResourcePath": "s",
      "FailureThreshold": "n",
    },
  }, root);
}

function fromHealthCheckCustomConfig(input?: s.HealthCheckCustomConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    FailureThreshold: input["FailureThreshold"],
  }
}
function toHealthCheckCustomConfig(root: jsonP.JSONValue): s.HealthCheckCustomConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "FailureThreshold": "n",
    },
  }, root);
}

function fromNamespaceFilter(input?: s.NamespaceFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Values: input["Values"],
    Condition: input["Condition"],
  }
}

function fromOperationFilter(input?: s.OperationFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Values: input["Values"],
    Condition: input["Condition"],
  }
}

function fromServiceFilter(input?: s.ServiceFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Values: input["Values"],
    Condition: input["Condition"],
  }
}

function fromServiceChange(input?: s.ServiceChange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Description: input["Description"],
    DnsConfig: fromDnsConfigChange(input["DnsConfig"]),
    HealthCheckConfig: fromHealthCheckConfig(input["HealthCheckConfig"]),
  }
}

function fromDnsConfigChange(input?: s.DnsConfigChange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    DnsRecords: input["DnsRecords"]?.map(x => fromDnsRecord(x)),
  }
}

function toService(root: jsonP.JSONValue): s.Service {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Arn": "s",
      "Name": "s",
      "NamespaceId": "s",
      "Description": "s",
      "InstanceCount": "n",
      "DnsConfig": toDnsConfig,
      "HealthCheckConfig": toHealthCheckConfig,
      "HealthCheckCustomConfig": toHealthCheckCustomConfig,
      "CreateDate": "d",
      "CreatorRequestId": "s",
    },
  }, root);
}

function toHttpInstanceSummary(root: jsonP.JSONValue): s.HttpInstanceSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "InstanceId": "s",
      "NamespaceName": "s",
      "ServiceName": "s",
      "HealthStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.HealthStatus>(x),
      "Attributes": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

function toInstance(root: jsonP.JSONValue): s.Instance {
  return jsonP.readObj({
    required: {
      "Id": "s",
    },
    optional: {
      "CreatorRequestId": "s",
      "Attributes": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

function toNamespace(root: jsonP.JSONValue): s.Namespace {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Arn": "s",
      "Name": "s",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.NamespaceType>(x),
      "Description": "s",
      "ServiceCount": "n",
      "Properties": toNamespaceProperties,
      "CreateDate": "d",
      "CreatorRequestId": "s",
    },
  }, root);
}

function toNamespaceProperties(root: jsonP.JSONValue): s.NamespaceProperties {
  return jsonP.readObj({
    required: {},
    optional: {
      "DnsProperties": toDnsProperties,
      "HttpProperties": toHttpProperties,
    },
  }, root);
}

function toDnsProperties(root: jsonP.JSONValue): s.DnsProperties {
  return jsonP.readObj({
    required: {},
    optional: {
      "HostedZoneId": "s",
    },
  }, root);
}

function toHttpProperties(root: jsonP.JSONValue): s.HttpProperties {
  return jsonP.readObj({
    required: {},
    optional: {
      "HttpName": "s",
    },
  }, root);
}

function toOperation(root: jsonP.JSONValue): s.Operation {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.OperationType>(x),
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.OperationStatus>(x),
      "ErrorMessage": "s",
      "ErrorCode": "s",
      "CreateDate": "d",
      "UpdateDate": "d",
      "Targets": x => jsonP.readMap(x => cmnP.readEnumReq<s.OperationTargetType>(x), String, x),
    },
  }, root);
}

function toInstanceSummary(root: jsonP.JSONValue): s.InstanceSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Attributes": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

function toNamespaceSummary(root: jsonP.JSONValue): s.NamespaceSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Arn": "s",
      "Name": "s",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.NamespaceType>(x),
      "Description": "s",
      "ServiceCount": "n",
      "Properties": toNamespaceProperties,
      "CreateDate": "d",
    },
  }, root);
}

function toOperationSummary(root: jsonP.JSONValue): s.OperationSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.OperationStatus>(x),
    },
  }, root);
}

function toServiceSummary(root: jsonP.JSONValue): s.ServiceSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Arn": "s",
      "Name": "s",
      "Description": "s",
      "InstanceCount": "n",
      "DnsConfig": toDnsConfig,
      "HealthCheckConfig": toHealthCheckConfig,
      "HealthCheckCustomConfig": toHealthCheckCustomConfig,
      "CreateDate": "d",
    },
  }, root);
}

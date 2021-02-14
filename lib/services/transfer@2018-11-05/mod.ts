// Autogenerated API client for: AWS Transfer Family

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class Transfer {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Transfer.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-11-05",
    "endpointPrefix": "transfer",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "AWS Transfer",
    "serviceFullName": "AWS Transfer Family",
    "serviceId": "Transfer",
    "signatureVersion": "v4",
    "signingName": "transfer",
    "targetPrefix": "TransferService",
    "uid": "transfer-2018-11-05"
  };

  async createServer(
    {abortSignal, ...params}: RequestConfig & s.CreateServerRequest = {},
  ): Promise<s.CreateServerResponse> {
    const body: jsonP.JSONObject = {
      Certificate: params["Certificate"],
      Domain: params["Domain"],
      EndpointDetails: fromEndpointDetails(params["EndpointDetails"]),
      EndpointType: params["EndpointType"],
      HostKey: params["HostKey"],
      IdentityProviderDetails: fromIdentityProviderDetails(params["IdentityProviderDetails"]),
      IdentityProviderType: params["IdentityProviderType"],
      LoggingRole: params["LoggingRole"],
      Protocols: params["Protocols"],
      SecurityPolicyName: params["SecurityPolicyName"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateServer",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async createUser(
    {abortSignal, ...params}: RequestConfig & s.CreateUserRequest,
  ): Promise<s.CreateUserResponse> {
    const body: jsonP.JSONObject = {
      HomeDirectory: params["HomeDirectory"],
      HomeDirectoryType: params["HomeDirectoryType"],
      HomeDirectoryMappings: params["HomeDirectoryMappings"]?.map(x => fromHomeDirectoryMapEntry(x)),
      Policy: params["Policy"],
      PosixProfile: fromPosixProfile(params["PosixProfile"]),
      Role: params["Role"],
      ServerId: params["ServerId"],
      SshPublicKeyBody: params["SshPublicKeyBody"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateUser",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
        "UserName": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteServer(
    {abortSignal, ...params}: RequestConfig & s.DeleteServerRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteServer",
    });
  }

  async deleteSshPublicKey(
    {abortSignal, ...params}: RequestConfig & s.DeleteSshPublicKeyRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
      SshPublicKeyId: params["SshPublicKeyId"],
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteSshPublicKey",
    });
  }

  async deleteUser(
    {abortSignal, ...params}: RequestConfig & s.DeleteUserRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteUser",
    });
  }

  async describeSecurityPolicy(
    {abortSignal, ...params}: RequestConfig & s.DescribeSecurityPolicyRequest,
  ): Promise<s.DescribeSecurityPolicyResponse> {
    const body: jsonP.JSONObject = {
      SecurityPolicyName: params["SecurityPolicyName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeSecurityPolicy",
    });
    return jsonP.readObj({
      required: {
        "SecurityPolicy": toDescribedSecurityPolicy,
      },
      optional: {},
    }, await resp.json());
  }

  async describeServer(
    {abortSignal, ...params}: RequestConfig & s.DescribeServerRequest,
  ): Promise<s.DescribeServerResponse> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeServer",
    });
    return jsonP.readObj({
      required: {
        "Server": toDescribedServer,
      },
      optional: {},
    }, await resp.json());
  }

  async describeUser(
    {abortSignal, ...params}: RequestConfig & s.DescribeUserRequest,
  ): Promise<s.DescribeUserResponse> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeUser",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
        "User": toDescribedUser,
      },
      optional: {},
    }, await resp.json());
  }

  async importSshPublicKey(
    {abortSignal, ...params}: RequestConfig & s.ImportSshPublicKeyRequest,
  ): Promise<s.ImportSshPublicKeyResponse> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
      SshPublicKeyBody: params["SshPublicKeyBody"],
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ImportSshPublicKey",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
        "SshPublicKeyId": "s",
        "UserName": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async listSecurityPolicies(
    {abortSignal, ...params}: RequestConfig & s.ListSecurityPoliciesRequest = {},
  ): Promise<s.ListSecurityPoliciesResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListSecurityPolicies",
    });
    return jsonP.readObj({
      required: {
        "SecurityPolicyNames": ["s"],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listServers(
    {abortSignal, ...params}: RequestConfig & s.ListServersRequest = {},
  ): Promise<s.ListServersResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListServers",
    });
    return jsonP.readObj({
      required: {
        "Servers": [toListedServer],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      Arn: params["Arn"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Arn": "s",
        "NextToken": "s",
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async listUsers(
    {abortSignal, ...params}: RequestConfig & s.ListUsersRequest,
  ): Promise<s.ListUsersResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListUsers",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
        "Users": [toListedUser],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async startServer(
    {abortSignal, ...params}: RequestConfig & s.StartServerRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartServer",
    });
  }

  async stopServer(
    {abortSignal, ...params}: RequestConfig & s.StopServerRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopServer",
    });
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      Arn: params["Arn"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
  }

  async testIdentityProvider(
    {abortSignal, ...params}: RequestConfig & s.TestIdentityProviderRequest,
  ): Promise<s.TestIdentityProviderResponse> {
    const body: jsonP.JSONObject = {
      ServerId: params["ServerId"],
      ServerProtocol: params["ServerProtocol"],
      SourceIp: params["SourceIp"],
      UserName: params["UserName"],
      UserPassword: params["UserPassword"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TestIdentityProvider",
    });
    return jsonP.readObj({
      required: {
        "StatusCode": "n",
        "Url": "s",
      },
      optional: {
        "Response": "s",
        "Message": "s",
      },
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      Arn: params["Arn"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
  }

  async updateServer(
    {abortSignal, ...params}: RequestConfig & s.UpdateServerRequest,
  ): Promise<s.UpdateServerResponse> {
    const body: jsonP.JSONObject = {
      Certificate: params["Certificate"],
      EndpointDetails: fromEndpointDetails(params["EndpointDetails"]),
      EndpointType: params["EndpointType"],
      HostKey: params["HostKey"],
      IdentityProviderDetails: fromIdentityProviderDetails(params["IdentityProviderDetails"]),
      LoggingRole: params["LoggingRole"],
      Protocols: params["Protocols"],
      SecurityPolicyName: params["SecurityPolicyName"],
      ServerId: params["ServerId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateServer",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async updateUser(
    {abortSignal, ...params}: RequestConfig & s.UpdateUserRequest,
  ): Promise<s.UpdateUserResponse> {
    const body: jsonP.JSONObject = {
      HomeDirectory: params["HomeDirectory"],
      HomeDirectoryType: params["HomeDirectoryType"],
      HomeDirectoryMappings: params["HomeDirectoryMappings"]?.map(x => fromHomeDirectoryMapEntry(x)),
      Policy: params["Policy"],
      PosixProfile: fromPosixProfile(params["PosixProfile"]),
      Role: params["Role"],
      ServerId: params["ServerId"],
      UserName: params["UserName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateUser",
    });
    return jsonP.readObj({
      required: {
        "ServerId": "s",
        "UserName": "s",
      },
      optional: {},
    }, await resp.json());
  }

}

function fromEndpointDetails(input?: s.EndpointDetails | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    AddressAllocationIds: input["AddressAllocationIds"],
    SubnetIds: input["SubnetIds"],
    VpcEndpointId: input["VpcEndpointId"],
    VpcId: input["VpcId"],
    SecurityGroupIds: input["SecurityGroupIds"],
  }
}
function toEndpointDetails(root: jsonP.JSONValue): s.EndpointDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "AddressAllocationIds": ["s"],
      "SubnetIds": ["s"],
      "VpcEndpointId": "s",
      "VpcId": "s",
      "SecurityGroupIds": ["s"],
    },
  }, root);
}

function fromIdentityProviderDetails(input?: s.IdentityProviderDetails | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Url: input["Url"],
    InvocationRole: input["InvocationRole"],
  }
}
function toIdentityProviderDetails(root: jsonP.JSONValue): s.IdentityProviderDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "Url": "s",
      "InvocationRole": "s",
    },
  }, root);
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

function fromHomeDirectoryMapEntry(input?: s.HomeDirectoryMapEntry | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Entry: input["Entry"],
    Target: input["Target"],
  }
}
function toHomeDirectoryMapEntry(root: jsonP.JSONValue): s.HomeDirectoryMapEntry {
  return jsonP.readObj({
    required: {
      "Entry": "s",
      "Target": "s",
    },
    optional: {},
  }, root);
}

function fromPosixProfile(input?: s.PosixProfile | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Uid: input["Uid"],
    Gid: input["Gid"],
    SecondaryGids: input["SecondaryGids"],
  }
}
function toPosixProfile(root: jsonP.JSONValue): s.PosixProfile {
  return jsonP.readObj({
    required: {
      "Uid": "n",
      "Gid": "n",
    },
    optional: {
      "SecondaryGids": ["n"],
    },
  }, root);
}

function toDescribedSecurityPolicy(root: jsonP.JSONValue): s.DescribedSecurityPolicy {
  return jsonP.readObj({
    required: {
      "SecurityPolicyName": "s",
    },
    optional: {
      "Fips": "b",
      "SshCiphers": ["s"],
      "SshKexs": ["s"],
      "SshMacs": ["s"],
      "TlsCiphers": ["s"],
    },
  }, root);
}

function toDescribedServer(root: jsonP.JSONValue): s.DescribedServer {
  return jsonP.readObj({
    required: {
      "Arn": "s",
    },
    optional: {
      "Certificate": "s",
      "Domain": (x: jsonP.JSONValue) => cmnP.readEnum<s.Domain>(x),
      "EndpointDetails": toEndpointDetails,
      "EndpointType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EndpointType>(x),
      "HostKeyFingerprint": "s",
      "IdentityProviderDetails": toIdentityProviderDetails,
      "IdentityProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<s.IdentityProviderType>(x),
      "LoggingRole": "s",
      "Protocols": [(x: jsonP.JSONValue) => cmnP.readEnum<s.Protocol>(x)],
      "SecurityPolicyName": "s",
      "ServerId": "s",
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<s.State>(x),
      "Tags": [toTag],
      "UserCount": "n",
    },
  }, root);
}

function toDescribedUser(root: jsonP.JSONValue): s.DescribedUser {
  return jsonP.readObj({
    required: {
      "Arn": "s",
    },
    optional: {
      "HomeDirectory": "s",
      "HomeDirectoryMappings": [toHomeDirectoryMapEntry],
      "HomeDirectoryType": (x: jsonP.JSONValue) => cmnP.readEnum<s.HomeDirectoryType>(x),
      "Policy": "s",
      "PosixProfile": toPosixProfile,
      "Role": "s",
      "SshPublicKeys": [toSshPublicKey],
      "Tags": [toTag],
      "UserName": "s",
    },
  }, root);
}

function toSshPublicKey(root: jsonP.JSONValue): s.SshPublicKey {
  return jsonP.readObj({
    required: {
      "DateImported": "d",
      "SshPublicKeyBody": "s",
      "SshPublicKeyId": "s",
    },
    optional: {},
  }, root);
}

function toListedServer(root: jsonP.JSONValue): s.ListedServer {
  return jsonP.readObj({
    required: {
      "Arn": "s",
    },
    optional: {
      "Domain": (x: jsonP.JSONValue) => cmnP.readEnum<s.Domain>(x),
      "IdentityProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<s.IdentityProviderType>(x),
      "EndpointType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EndpointType>(x),
      "LoggingRole": "s",
      "ServerId": "s",
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<s.State>(x),
      "UserCount": "n",
    },
  }, root);
}

function toListedUser(root: jsonP.JSONValue): s.ListedUser {
  return jsonP.readObj({
    required: {
      "Arn": "s",
    },
    optional: {
      "HomeDirectory": "s",
      "HomeDirectoryType": (x: jsonP.JSONValue) => cmnP.readEnum<s.HomeDirectoryType>(x),
      "Role": "s",
      "SshPublicKeyCount": "n",
      "UserName": "s",
    },
  }, root);
}

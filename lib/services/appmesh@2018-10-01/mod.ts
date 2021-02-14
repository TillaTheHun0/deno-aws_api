// Autogenerated API client for: AWS App Mesh

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

export default class AppMesh {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(AppMesh.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-10-01",
    "endpointPrefix": "appmesh",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceFullName": "AWS App Mesh",
    "serviceId": "App Mesh",
    "signatureVersion": "v4",
    "signingName": "appmesh",
    "uid": "appmesh-2018-10-01"
  };

  async createMesh(
    {abortSignal, ...params}: RequestConfig & s.CreateMeshInput,
  ): Promise<s.CreateMeshOutput> {
    const body: jsonP.JSONObject = {
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      meshName: params["meshName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateMesh",
      method: "PUT",
      requestUri: "/meshes",
      responseCode: 200,
    });
  return {
    mesh: toMeshData(await resp.json()),
  };
  }

  async createRoute(
    {abortSignal, ...params}: RequestConfig & s.CreateRouteInput,
  ): Promise<s.CreateRouteOutput> {
    const body: jsonP.JSONObject = {
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      routeName: params["routeName"],
      spec: fromRouteSpec(params["spec"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateRoute",
      method: "PUT",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualRouter/${params["virtualRouterName"]}/routes`,
      responseCode: 200,
    });
  return {
    route: toRouteData(await resp.json()),
  };
  }

  async createVirtualNode(
    {abortSignal, ...params}: RequestConfig & s.CreateVirtualNodeInput,
  ): Promise<s.CreateVirtualNodeOutput> {
    const body: jsonP.JSONObject = {
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      spec: fromVirtualNodeSpec(params["spec"]),
      virtualNodeName: params["virtualNodeName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateVirtualNode",
      method: "PUT",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualNodes`,
      responseCode: 200,
    });
  return {
    virtualNode: toVirtualNodeData(await resp.json()),
  };
  }

  async createVirtualRouter(
    {abortSignal, ...params}: RequestConfig & s.CreateVirtualRouterInput,
  ): Promise<s.CreateVirtualRouterOutput> {
    const body: jsonP.JSONObject = {
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      spec: fromVirtualRouterSpec(params["spec"]),
      virtualRouterName: params["virtualRouterName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateVirtualRouter",
      method: "PUT",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualRouters`,
      responseCode: 200,
    });
  return {
    virtualRouter: toVirtualRouterData(await resp.json()),
  };
  }

  async deleteMesh(
    {abortSignal, ...params}: RequestConfig & s.DeleteMeshInput,
  ): Promise<s.DeleteMeshOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteMesh",
      method: "DELETE",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}`,
      responseCode: 200,
    });
  return {
    mesh: toMeshData(await resp.json()),
  };
  }

  async deleteRoute(
    {abortSignal, ...params}: RequestConfig & s.DeleteRouteInput,
  ): Promise<s.DeleteRouteOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteRoute",
      method: "DELETE",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualRouter/${params["virtualRouterName"]}/routes/${params["routeName"]}`,
      responseCode: 200,
    });
  return {
    route: toRouteData(await resp.json()),
  };
  }

  async deleteVirtualNode(
    {abortSignal, ...params}: RequestConfig & s.DeleteVirtualNodeInput,
  ): Promise<s.DeleteVirtualNodeOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteVirtualNode",
      method: "DELETE",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualNodes/${params["virtualNodeName"]}`,
      responseCode: 200,
    });
  return {
    virtualNode: toVirtualNodeData(await resp.json()),
  };
  }

  async deleteVirtualRouter(
    {abortSignal, ...params}: RequestConfig & s.DeleteVirtualRouterInput,
  ): Promise<s.DeleteVirtualRouterOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteVirtualRouter",
      method: "DELETE",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualRouters/${params["virtualRouterName"]}`,
      responseCode: 200,
    });
  return {
    virtualRouter: toVirtualRouterData(await resp.json()),
  };
  }

  async describeMesh(
    {abortSignal, ...params}: RequestConfig & s.DescribeMeshInput,
  ): Promise<s.DescribeMeshOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeMesh",
      method: "GET",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}`,
      responseCode: 200,
    });
  return {
    mesh: toMeshData(await resp.json()),
  };
  }

  async describeRoute(
    {abortSignal, ...params}: RequestConfig & s.DescribeRouteInput,
  ): Promise<s.DescribeRouteOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeRoute",
      method: "GET",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualRouter/${params["virtualRouterName"]}/routes/${params["routeName"]}`,
      responseCode: 200,
    });
  return {
    route: toRouteData(await resp.json()),
  };
  }

  async describeVirtualNode(
    {abortSignal, ...params}: RequestConfig & s.DescribeVirtualNodeInput,
  ): Promise<s.DescribeVirtualNodeOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeVirtualNode",
      method: "GET",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualNodes/${params["virtualNodeName"]}`,
      responseCode: 200,
    });
  return {
    virtualNode: toVirtualNodeData(await resp.json()),
  };
  }

  async describeVirtualRouter(
    {abortSignal, ...params}: RequestConfig & s.DescribeVirtualRouterInput,
  ): Promise<s.DescribeVirtualRouterOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeVirtualRouter",
      method: "GET",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualRouters/${params["virtualRouterName"]}`,
      responseCode: 200,
    });
  return {
    virtualRouter: toVirtualRouterData(await resp.json()),
  };
  }

  async listMeshes(
    {abortSignal, ...params}: RequestConfig & s.ListMeshesInput = {},
  ): Promise<s.ListMeshesOutput> {
    const query = new URLSearchParams;
    if (params["limit"] != null) query.set("limit", params["limit"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListMeshes",
      method: "GET",
      requestUri: "/meshes",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "meshes": [toMeshRef],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listRoutes(
    {abortSignal, ...params}: RequestConfig & s.ListRoutesInput,
  ): Promise<s.ListRoutesOutput> {
    const query = new URLSearchParams;
    if (params["limit"] != null) query.set("limit", params["limit"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListRoutes",
      method: "GET",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualRouter/${params["virtualRouterName"]}/routes`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "routes": [toRouteRef],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listVirtualNodes(
    {abortSignal, ...params}: RequestConfig & s.ListVirtualNodesInput,
  ): Promise<s.ListVirtualNodesOutput> {
    const query = new URLSearchParams;
    if (params["limit"] != null) query.set("limit", params["limit"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListVirtualNodes",
      method: "GET",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualNodes`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "virtualNodes": [toVirtualNodeRef],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listVirtualRouters(
    {abortSignal, ...params}: RequestConfig & s.ListVirtualRoutersInput,
  ): Promise<s.ListVirtualRoutersOutput> {
    const query = new URLSearchParams;
    if (params["limit"] != null) query.set("limit", params["limit"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListVirtualRouters",
      method: "GET",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualRouters`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {
        "virtualRouters": [toVirtualRouterRef],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async updateRoute(
    {abortSignal, ...params}: RequestConfig & s.UpdateRouteInput,
  ): Promise<s.UpdateRouteOutput> {
    const body: jsonP.JSONObject = {
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      spec: fromRouteSpec(params["spec"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateRoute",
      method: "PUT",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualRouter/${params["virtualRouterName"]}/routes/${params["routeName"]}`,
      responseCode: 200,
    });
  return {
    route: toRouteData(await resp.json()),
  };
  }

  async updateVirtualNode(
    {abortSignal, ...params}: RequestConfig & s.UpdateVirtualNodeInput,
  ): Promise<s.UpdateVirtualNodeOutput> {
    const body: jsonP.JSONObject = {
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      spec: fromVirtualNodeSpec(params["spec"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateVirtualNode",
      method: "PUT",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualNodes/${params["virtualNodeName"]}`,
      responseCode: 200,
    });
  return {
    virtualNode: toVirtualNodeData(await resp.json()),
  };
  }

  async updateVirtualRouter(
    {abortSignal, ...params}: RequestConfig & s.UpdateVirtualRouterInput,
  ): Promise<s.UpdateVirtualRouterOutput> {
    const body: jsonP.JSONObject = {
      clientToken: params["clientToken"] ?? generateIdemptToken(),
      spec: fromVirtualRouterSpec(params["spec"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateVirtualRouter",
      method: "PUT",
      requestUri: cmnP.encodePath`/meshes/${params["meshName"]}/virtualRouters/${params["virtualRouterName"]}`,
      responseCode: 200,
    });
  return {
    virtualRouter: toVirtualRouterData(await resp.json()),
  };
  }

}

function fromRouteSpec(input?: s.RouteSpec | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    httpRoute: fromHttpRoute(input["httpRoute"]),
  }
}
function toRouteSpec(root: jsonP.JSONValue): s.RouteSpec {
  return jsonP.readObj({
    required: {},
    optional: {
      "httpRoute": toHttpRoute,
    },
  }, root);
}

function fromHttpRoute(input?: s.HttpRoute | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    action: fromHttpRouteAction(input["action"]),
    match: fromHttpRouteMatch(input["match"]),
  }
}
function toHttpRoute(root: jsonP.JSONValue): s.HttpRoute {
  return jsonP.readObj({
    required: {},
    optional: {
      "action": toHttpRouteAction,
      "match": toHttpRouteMatch,
    },
  }, root);
}

function fromHttpRouteAction(input?: s.HttpRouteAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    weightedTargets: input["weightedTargets"]?.map(x => fromWeightedTarget(x)),
  }
}
function toHttpRouteAction(root: jsonP.JSONValue): s.HttpRouteAction {
  return jsonP.readObj({
    required: {},
    optional: {
      "weightedTargets": [toWeightedTarget],
    },
  }, root);
}

function fromWeightedTarget(input?: s.WeightedTarget | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    virtualNode: input["virtualNode"],
    weight: input["weight"],
  }
}
function toWeightedTarget(root: jsonP.JSONValue): s.WeightedTarget {
  return jsonP.readObj({
    required: {},
    optional: {
      "virtualNode": "s",
      "weight": "n",
    },
  }, root);
}

function fromHttpRouteMatch(input?: s.HttpRouteMatch | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    prefix: input["prefix"],
  }
}
function toHttpRouteMatch(root: jsonP.JSONValue): s.HttpRouteMatch {
  return jsonP.readObj({
    required: {},
    optional: {
      "prefix": "s",
    },
  }, root);
}

function fromVirtualNodeSpec(input?: s.VirtualNodeSpec | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    backends: input["backends"],
    listeners: input["listeners"]?.map(x => fromListener(x)),
    serviceDiscovery: fromServiceDiscovery(input["serviceDiscovery"]),
  }
}
function toVirtualNodeSpec(root: jsonP.JSONValue): s.VirtualNodeSpec {
  return jsonP.readObj({
    required: {},
    optional: {
      "backends": ["s"],
      "listeners": [toListener],
      "serviceDiscovery": toServiceDiscovery,
    },
  }, root);
}

function fromListener(input?: s.Listener | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    healthCheck: fromHealthCheckPolicy(input["healthCheck"]),
    portMapping: fromPortMapping(input["portMapping"]),
  }
}
function toListener(root: jsonP.JSONValue): s.Listener {
  return jsonP.readObj({
    required: {},
    optional: {
      "healthCheck": toHealthCheckPolicy,
      "portMapping": toPortMapping,
    },
  }, root);
}

function fromHealthCheckPolicy(input?: s.HealthCheckPolicy | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    healthyThreshold: input["healthyThreshold"],
    intervalMillis: input["intervalMillis"],
    path: input["path"],
    port: input["port"],
    protocol: input["protocol"],
    timeoutMillis: input["timeoutMillis"],
    unhealthyThreshold: input["unhealthyThreshold"],
  }
}
function toHealthCheckPolicy(root: jsonP.JSONValue): s.HealthCheckPolicy {
  return jsonP.readObj({
    required: {
      "healthyThreshold": "n",
      "intervalMillis": "n",
      "protocol": (x: jsonP.JSONValue) => cmnP.readEnum<s.PortProtocol>(x),
      "timeoutMillis": "n",
      "unhealthyThreshold": "n",
    },
    optional: {
      "path": "s",
      "port": "n",
    },
  }, root);
}

function fromPortMapping(input?: s.PortMapping | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    port: input["port"],
    protocol: input["protocol"],
  }
}
function toPortMapping(root: jsonP.JSONValue): s.PortMapping {
  return jsonP.readObj({
    required: {},
    optional: {
      "port": "n",
      "protocol": (x: jsonP.JSONValue) => cmnP.readEnum<s.PortProtocol>(x),
    },
  }, root);
}

function fromServiceDiscovery(input?: s.ServiceDiscovery | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    dns: fromDnsServiceDiscovery(input["dns"]),
  }
}
function toServiceDiscovery(root: jsonP.JSONValue): s.ServiceDiscovery {
  return jsonP.readObj({
    required: {},
    optional: {
      "dns": toDnsServiceDiscovery,
    },
  }, root);
}

function fromDnsServiceDiscovery(input?: s.DnsServiceDiscovery | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    serviceName: input["serviceName"],
  }
}
function toDnsServiceDiscovery(root: jsonP.JSONValue): s.DnsServiceDiscovery {
  return jsonP.readObj({
    required: {},
    optional: {
      "serviceName": "s",
    },
  }, root);
}

function fromVirtualRouterSpec(input?: s.VirtualRouterSpec | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    serviceNames: input["serviceNames"],
  }
}
function toVirtualRouterSpec(root: jsonP.JSONValue): s.VirtualRouterSpec {
  return jsonP.readObj({
    required: {},
    optional: {
      "serviceNames": ["s"],
    },
  }, root);
}

function toMeshData(root: jsonP.JSONValue): s.MeshData {
  return jsonP.readObj({
    required: {
      "meshName": "s",
      "metadata": toResourceMetadata,
    },
    optional: {
      "status": toMeshStatus,
    },
  }, root);
}

function toResourceMetadata(root: jsonP.JSONValue): s.ResourceMetadata {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "createdAt": "d",
      "lastUpdatedAt": "d",
      "uid": "s",
      "version": "n",
    },
  }, root);
}

function toMeshStatus(root: jsonP.JSONValue): s.MeshStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.MeshStatusCode>(x),
    },
  }, root);
}

function toRouteData(root: jsonP.JSONValue): s.RouteData {
  return jsonP.readObj({
    required: {
      "meshName": "s",
      "routeName": "s",
      "virtualRouterName": "s",
    },
    optional: {
      "metadata": toResourceMetadata,
      "spec": toRouteSpec,
      "status": toRouteStatus,
    },
  }, root);
}

function toRouteStatus(root: jsonP.JSONValue): s.RouteStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.RouteStatusCode>(x),
    },
  }, root);
}

function toVirtualNodeData(root: jsonP.JSONValue): s.VirtualNodeData {
  return jsonP.readObj({
    required: {
      "meshName": "s",
      "virtualNodeName": "s",
    },
    optional: {
      "metadata": toResourceMetadata,
      "spec": toVirtualNodeSpec,
      "status": toVirtualNodeStatus,
    },
  }, root);
}

function toVirtualNodeStatus(root: jsonP.JSONValue): s.VirtualNodeStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.VirtualNodeStatusCode>(x),
    },
  }, root);
}

function toVirtualRouterData(root: jsonP.JSONValue): s.VirtualRouterData {
  return jsonP.readObj({
    required: {
      "meshName": "s",
      "virtualRouterName": "s",
    },
    optional: {
      "metadata": toResourceMetadata,
      "spec": toVirtualRouterSpec,
      "status": toVirtualRouterStatus,
    },
  }, root);
}

function toVirtualRouterStatus(root: jsonP.JSONValue): s.VirtualRouterStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.VirtualRouterStatusCode>(x),
    },
  }, root);
}

function toMeshRef(root: jsonP.JSONValue): s.MeshRef {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "meshName": "s",
    },
  }, root);
}

function toRouteRef(root: jsonP.JSONValue): s.RouteRef {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "meshName": "s",
      "routeName": "s",
      "virtualRouterName": "s",
    },
  }, root);
}

function toVirtualNodeRef(root: jsonP.JSONValue): s.VirtualNodeRef {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "meshName": "s",
      "virtualNodeName": "s",
    },
  }, root);
}

function toVirtualRouterRef(root: jsonP.JSONValue): s.VirtualRouterRef {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "meshName": "s",
      "virtualRouterName": "s",
    },
  }, root);
}

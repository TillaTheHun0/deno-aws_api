// Autogenerated API client for: AWS App Mesh

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as uuidv4 from "https://deno.land/std@0.86.0/uuid/v4.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class AppMesh {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(AppMesh.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
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
    {abortSignal, ...params}: RequestConfig & CreateMeshInput,
  ): Promise<CreateMeshOutput> {
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
    {abortSignal, ...params}: RequestConfig & CreateRouteInput,
  ): Promise<CreateRouteOutput> {
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
    {abortSignal, ...params}: RequestConfig & CreateVirtualNodeInput,
  ): Promise<CreateVirtualNodeOutput> {
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
    {abortSignal, ...params}: RequestConfig & CreateVirtualRouterInput,
  ): Promise<CreateVirtualRouterOutput> {
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
    {abortSignal, ...params}: RequestConfig & DeleteMeshInput,
  ): Promise<DeleteMeshOutput> {

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
    {abortSignal, ...params}: RequestConfig & DeleteRouteInput,
  ): Promise<DeleteRouteOutput> {

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
    {abortSignal, ...params}: RequestConfig & DeleteVirtualNodeInput,
  ): Promise<DeleteVirtualNodeOutput> {

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
    {abortSignal, ...params}: RequestConfig & DeleteVirtualRouterInput,
  ): Promise<DeleteVirtualRouterOutput> {

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
    {abortSignal, ...params}: RequestConfig & DescribeMeshInput,
  ): Promise<DescribeMeshOutput> {

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
    {abortSignal, ...params}: RequestConfig & DescribeRouteInput,
  ): Promise<DescribeRouteOutput> {

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
    {abortSignal, ...params}: RequestConfig & DescribeVirtualNodeInput,
  ): Promise<DescribeVirtualNodeOutput> {

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
    {abortSignal, ...params}: RequestConfig & DescribeVirtualRouterInput,
  ): Promise<DescribeVirtualRouterOutput> {

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
    {abortSignal, ...params}: RequestConfig & ListMeshesInput = {},
  ): Promise<ListMeshesOutput> {
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
    {abortSignal, ...params}: RequestConfig & ListRoutesInput,
  ): Promise<ListRoutesOutput> {
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
    {abortSignal, ...params}: RequestConfig & ListVirtualNodesInput,
  ): Promise<ListVirtualNodesOutput> {
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
    {abortSignal, ...params}: RequestConfig & ListVirtualRoutersInput,
  ): Promise<ListVirtualRoutersOutput> {
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
    {abortSignal, ...params}: RequestConfig & UpdateRouteInput,
  ): Promise<UpdateRouteOutput> {
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
    {abortSignal, ...params}: RequestConfig & UpdateVirtualNodeInput,
  ): Promise<UpdateVirtualNodeOutput> {
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
    {abortSignal, ...params}: RequestConfig & UpdateVirtualRouterInput,
  ): Promise<UpdateVirtualRouterOutput> {
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

// refs: 1 - tags: named, input
export interface CreateMeshInput {
  clientToken?: string | null;
  meshName: string;
}

// refs: 1 - tags: named, input
export interface CreateRouteInput {
  clientToken?: string | null;
  meshName: string;
  routeName: string;
  spec: RouteSpec;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface CreateVirtualNodeInput {
  clientToken?: string | null;
  meshName: string;
  spec: VirtualNodeSpec;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface CreateVirtualRouterInput {
  clientToken?: string | null;
  meshName: string;
  spec: VirtualRouterSpec;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DeleteMeshInput {
  meshName: string;
}

// refs: 1 - tags: named, input
export interface DeleteRouteInput {
  meshName: string;
  routeName: string;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DeleteVirtualNodeInput {
  meshName: string;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface DeleteVirtualRouterInput {
  meshName: string;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DescribeMeshInput {
  meshName: string;
}

// refs: 1 - tags: named, input
export interface DescribeRouteInput {
  meshName: string;
  routeName: string;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface DescribeVirtualNodeInput {
  meshName: string;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface DescribeVirtualRouterInput {
  meshName: string;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface ListMeshesInput {
  limit?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListRoutesInput {
  limit?: number | null;
  meshName: string;
  nextToken?: string | null;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface ListVirtualNodesInput {
  limit?: number | null;
  meshName: string;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListVirtualRoutersInput {
  limit?: number | null;
  meshName: string;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateRouteInput {
  clientToken?: string | null;
  meshName: string;
  routeName: string;
  spec: RouteSpec;
  virtualRouterName: string;
}

// refs: 1 - tags: named, input
export interface UpdateVirtualNodeInput {
  clientToken?: string | null;
  meshName: string;
  spec: VirtualNodeSpec;
  virtualNodeName: string;
}

// refs: 1 - tags: named, input
export interface UpdateVirtualRouterInput {
  clientToken?: string | null;
  meshName: string;
  spec: VirtualRouterSpec;
  virtualRouterName: string;
}

// refs: 1 - tags: named, output
export interface CreateMeshOutput {
  mesh?: MeshData | null;
}

// refs: 1 - tags: named, output
export interface CreateRouteOutput {
  route?: RouteData | null;
}

// refs: 1 - tags: named, output
export interface CreateVirtualNodeOutput {
  virtualNode?: VirtualNodeData | null;
}

// refs: 1 - tags: named, output
export interface CreateVirtualRouterOutput {
  virtualRouter?: VirtualRouterData | null;
}

// refs: 1 - tags: named, output
export interface DeleteMeshOutput {
  mesh?: MeshData | null;
}

// refs: 1 - tags: named, output
export interface DeleteRouteOutput {
  route?: RouteData | null;
}

// refs: 1 - tags: named, output
export interface DeleteVirtualNodeOutput {
  virtualNode?: VirtualNodeData | null;
}

// refs: 1 - tags: named, output
export interface DeleteVirtualRouterOutput {
  virtualRouter?: VirtualRouterData | null;
}

// refs: 1 - tags: named, output
export interface DescribeMeshOutput {
  mesh?: MeshData | null;
}

// refs: 1 - tags: named, output
export interface DescribeRouteOutput {
  route?: RouteData | null;
}

// refs: 1 - tags: named, output
export interface DescribeVirtualNodeOutput {
  virtualNode?: VirtualNodeData | null;
}

// refs: 1 - tags: named, output
export interface DescribeVirtualRouterOutput {
  virtualRouter?: VirtualRouterData | null;
}

// refs: 1 - tags: named, output
export interface ListMeshesOutput {
  meshes: MeshRef[];
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListRoutesOutput {
  nextToken?: string | null;
  routes: RouteRef[];
}

// refs: 1 - tags: named, output
export interface ListVirtualNodesOutput {
  nextToken?: string | null;
  virtualNodes: VirtualNodeRef[];
}

// refs: 1 - tags: named, output
export interface ListVirtualRoutersOutput {
  nextToken?: string | null;
  virtualRouters: VirtualRouterRef[];
}

// refs: 1 - tags: named, output
export interface UpdateRouteOutput {
  route?: RouteData | null;
}

// refs: 1 - tags: named, output
export interface UpdateVirtualNodeOutput {
  virtualNode?: VirtualNodeData | null;
}

// refs: 1 - tags: named, output
export interface UpdateVirtualRouterOutput {
  virtualRouter?: VirtualRouterData | null;
}

// refs: 6 - tags: input, named, interface, output
export interface RouteSpec {
  httpRoute?: HttpRoute | null;
}
function fromRouteSpec(input?: RouteSpec | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    httpRoute: fromHttpRoute(input["httpRoute"]),
  }
}
function toRouteSpec(root: jsonP.JSONValue): RouteSpec {
  return jsonP.readObj({
    required: {},
    optional: {
      "httpRoute": toHttpRoute,
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface HttpRoute {
  action?: HttpRouteAction | null;
  match?: HttpRouteMatch | null;
}
function fromHttpRoute(input?: HttpRoute | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    action: fromHttpRouteAction(input["action"]),
    match: fromHttpRouteMatch(input["match"]),
  }
}
function toHttpRoute(root: jsonP.JSONValue): HttpRoute {
  return jsonP.readObj({
    required: {},
    optional: {
      "action": toHttpRouteAction,
      "match": toHttpRouteMatch,
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface HttpRouteAction {
  weightedTargets?: WeightedTarget[] | null;
}
function fromHttpRouteAction(input?: HttpRouteAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    weightedTargets: input["weightedTargets"]?.map(x => fromWeightedTarget(x)),
  }
}
function toHttpRouteAction(root: jsonP.JSONValue): HttpRouteAction {
  return jsonP.readObj({
    required: {},
    optional: {
      "weightedTargets": [toWeightedTarget],
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface WeightedTarget {
  virtualNode?: string | null;
  weight?: number | null;
}
function fromWeightedTarget(input?: WeightedTarget | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    virtualNode: input["virtualNode"],
    weight: input["weight"],
  }
}
function toWeightedTarget(root: jsonP.JSONValue): WeightedTarget {
  return jsonP.readObj({
    required: {},
    optional: {
      "virtualNode": "s",
      "weight": "n",
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface HttpRouteMatch {
  prefix?: string | null;
}
function fromHttpRouteMatch(input?: HttpRouteMatch | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    prefix: input["prefix"],
  }
}
function toHttpRouteMatch(root: jsonP.JSONValue): HttpRouteMatch {
  return jsonP.readObj({
    required: {},
    optional: {
      "prefix": "s",
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualNodeSpec {
  backends?: string[] | null;
  listeners?: Listener[] | null;
  serviceDiscovery?: ServiceDiscovery | null;
}
function fromVirtualNodeSpec(input?: VirtualNodeSpec | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    backends: input["backends"],
    listeners: input["listeners"]?.map(x => fromListener(x)),
    serviceDiscovery: fromServiceDiscovery(input["serviceDiscovery"]),
  }
}
function toVirtualNodeSpec(root: jsonP.JSONValue): VirtualNodeSpec {
  return jsonP.readObj({
    required: {},
    optional: {
      "backends": ["s"],
      "listeners": [toListener],
      "serviceDiscovery": toServiceDiscovery,
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface Listener {
  healthCheck?: HealthCheckPolicy | null;
  portMapping?: PortMapping | null;
}
function fromListener(input?: Listener | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    healthCheck: fromHealthCheckPolicy(input["healthCheck"]),
    portMapping: fromPortMapping(input["portMapping"]),
  }
}
function toListener(root: jsonP.JSONValue): Listener {
  return jsonP.readObj({
    required: {},
    optional: {
      "healthCheck": toHealthCheckPolicy,
      "portMapping": toPortMapping,
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface HealthCheckPolicy {
  healthyThreshold: number;
  intervalMillis: number;
  path?: string | null;
  port?: number | null;
  protocol: PortProtocol;
  timeoutMillis: number;
  unhealthyThreshold: number;
}
function fromHealthCheckPolicy(input?: HealthCheckPolicy | null): jsonP.JSONValue {
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
function toHealthCheckPolicy(root: jsonP.JSONValue): HealthCheckPolicy {
  return jsonP.readObj({
    required: {
      "healthyThreshold": "n",
      "intervalMillis": "n",
      "protocol": (x: jsonP.JSONValue) => cmnP.readEnum<PortProtocol>(x),
      "timeoutMillis": "n",
      "unhealthyThreshold": "n",
    },
    optional: {
      "path": "s",
      "port": "n",
    },
  }, root);
}

// refs: 12 - tags: input, named, enum, output
export type PortProtocol =
| "http"
| "tcp"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface PortMapping {
  port?: number | null;
  protocol?: PortProtocol | null;
}
function fromPortMapping(input?: PortMapping | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    port: input["port"],
    protocol: input["protocol"],
  }
}
function toPortMapping(root: jsonP.JSONValue): PortMapping {
  return jsonP.readObj({
    required: {},
    optional: {
      "port": "n",
      "protocol": (x: jsonP.JSONValue) => cmnP.readEnum<PortProtocol>(x),
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface ServiceDiscovery {
  dns?: DnsServiceDiscovery | null;
}
function fromServiceDiscovery(input?: ServiceDiscovery | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    dns: fromDnsServiceDiscovery(input["dns"]),
  }
}
function toServiceDiscovery(root: jsonP.JSONValue): ServiceDiscovery {
  return jsonP.readObj({
    required: {},
    optional: {
      "dns": toDnsServiceDiscovery,
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface DnsServiceDiscovery {
  serviceName?: string | null;
}
function fromDnsServiceDiscovery(input?: DnsServiceDiscovery | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    serviceName: input["serviceName"],
  }
}
function toDnsServiceDiscovery(root: jsonP.JSONValue): DnsServiceDiscovery {
  return jsonP.readObj({
    required: {},
    optional: {
      "serviceName": "s",
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface VirtualRouterSpec {
  serviceNames?: string[] | null;
}
function fromVirtualRouterSpec(input?: VirtualRouterSpec | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    serviceNames: input["serviceNames"],
  }
}
function toVirtualRouterSpec(root: jsonP.JSONValue): VirtualRouterSpec {
  return jsonP.readObj({
    required: {},
    optional: {
      "serviceNames": ["s"],
    },
  }, root);
}

// refs: 3 - tags: output, named, interface
export interface MeshData {
  meshName: string;
  metadata: ResourceMetadata;
  status?: MeshStatus | null;
}
function toMeshData(root: jsonP.JSONValue): MeshData {
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

// refs: 15 - tags: output, named, interface
export interface ResourceMetadata {
  arn?: string | null;
  createdAt?: Date | number | null;
  lastUpdatedAt?: Date | number | null;
  uid?: string | null;
  version?: number | null;
}
function toResourceMetadata(root: jsonP.JSONValue): ResourceMetadata {
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

// refs: 3 - tags: output, named, interface
export interface MeshStatus {
  status?: MeshStatusCode | null;
}
function toMeshStatus(root: jsonP.JSONValue): MeshStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<MeshStatusCode>(x),
    },
  }, root);
}

// refs: 3 - tags: output, named, enum
export type MeshStatusCode =
| "ACTIVE"
| "DELETED"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface RouteData {
  meshName: string;
  metadata?: ResourceMetadata | null;
  routeName: string;
  spec?: RouteSpec | null;
  status?: RouteStatus | null;
  virtualRouterName: string;
}
function toRouteData(root: jsonP.JSONValue): RouteData {
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

// refs: 4 - tags: output, named, interface
export interface RouteStatus {
  status?: RouteStatusCode | null;
}
function toRouteStatus(root: jsonP.JSONValue): RouteStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<RouteStatusCode>(x),
    },
  }, root);
}

// refs: 4 - tags: output, named, enum
export type RouteStatusCode =
| "ACTIVE"
| "DELETED"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface VirtualNodeData {
  meshName: string;
  metadata?: ResourceMetadata | null;
  spec?: VirtualNodeSpec | null;
  status?: VirtualNodeStatus | null;
  virtualNodeName: string;
}
function toVirtualNodeData(root: jsonP.JSONValue): VirtualNodeData {
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

// refs: 4 - tags: output, named, interface
export interface VirtualNodeStatus {
  status?: VirtualNodeStatusCode | null;
}
function toVirtualNodeStatus(root: jsonP.JSONValue): VirtualNodeStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<VirtualNodeStatusCode>(x),
    },
  }, root);
}

// refs: 4 - tags: output, named, enum
export type VirtualNodeStatusCode =
| "ACTIVE"
| "DELETED"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface VirtualRouterData {
  meshName: string;
  metadata?: ResourceMetadata | null;
  spec?: VirtualRouterSpec | null;
  status?: VirtualRouterStatus | null;
  virtualRouterName: string;
}
function toVirtualRouterData(root: jsonP.JSONValue): VirtualRouterData {
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

// refs: 4 - tags: output, named, interface
export interface VirtualRouterStatus {
  status?: VirtualRouterStatusCode | null;
}
function toVirtualRouterStatus(root: jsonP.JSONValue): VirtualRouterStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<VirtualRouterStatusCode>(x),
    },
  }, root);
}

// refs: 4 - tags: output, named, enum
export type VirtualRouterStatusCode =
| "ACTIVE"
| "DELETED"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface MeshRef {
  arn?: string | null;
  meshName?: string | null;
}
function toMeshRef(root: jsonP.JSONValue): MeshRef {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "meshName": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface RouteRef {
  arn?: string | null;
  meshName?: string | null;
  routeName?: string | null;
  virtualRouterName?: string | null;
}
function toRouteRef(root: jsonP.JSONValue): RouteRef {
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

// refs: 1 - tags: output, named, interface
export interface VirtualNodeRef {
  arn?: string | null;
  meshName?: string | null;
  virtualNodeName?: string | null;
}
function toVirtualNodeRef(root: jsonP.JSONValue): VirtualNodeRef {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "meshName": "s",
      "virtualNodeName": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface VirtualRouterRef {
  arn?: string | null;
  meshName?: string | null;
  virtualRouterName?: string | null;
}
function toVirtualRouterRef(root: jsonP.JSONValue): VirtualRouterRef {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "meshName": "s",
      "virtualRouterName": "s",
    },
  }, root);
}

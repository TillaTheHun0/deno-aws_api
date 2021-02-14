// Autogenerated API client for: Amazon CloudSearch Domain

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as client from "../../client/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class CloudSearchDomain {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(CloudSearchDomain.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2013-01-01",
    "endpointPrefix": "cloudsearchdomain",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceFullName": "Amazon CloudSearch Domain",
    "serviceId": "CloudSearch Domain",
    "signatureVersion": "v4",
    "signingName": "cloudsearch",
    "uid": "cloudsearchdomain-2013-01-01"
  };

  async search(
    {abortSignal, ...params}: RequestConfig & s.SearchRequest,
  ): Promise<s.SearchResponse> {
    const query = new URLSearchParams;
    if (params["cursor"] != null) query.set("cursor", params["cursor"]?.toString() ?? "");
    if (params["expr"] != null) query.set("expr", params["expr"]?.toString() ?? "");
    if (params["facet"] != null) query.set("facet", params["facet"]?.toString() ?? "");
    if (params["filterQuery"] != null) query.set("fq", params["filterQuery"]?.toString() ?? "");
    if (params["highlight"] != null) query.set("highlight", params["highlight"]?.toString() ?? "");
    if (params["partial"] != null) query.set("partial", params["partial"]?.toString() ?? "");
    query.set("q", params["query"]?.toString() ?? "");
    if (params["queryOptions"] != null) query.set("q.options", params["queryOptions"]?.toString() ?? "");
    if (params["queryParser"] != null) query.set("q.parser", params["queryParser"]?.toString() ?? "");
    if (params["return"] != null) query.set("return", params["return"]?.toString() ?? "");
    if (params["size"] != null) query.set("size", params["size"]?.toString() ?? "");
    if (params["sort"] != null) query.set("sort", params["sort"]?.toString() ?? "");
    if (params["start"] != null) query.set("start", params["start"]?.toString() ?? "");
    if (params["stats"] != null) query.set("stats", params["stats"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "Search",
      method: "GET",
      requestUri: "/2013-01-01/search?format=sdk&pretty=true",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "status": toSearchStatus,
        "hits": toHits,
        "facets": x => jsonP.readMap(String, toBucketInfo, x),
        "stats": x => jsonP.readMap(String, toFieldStats, x),
      },
    }, await resp.json());
  }

  async suggest(
    {abortSignal, ...params}: RequestConfig & s.SuggestRequest,
  ): Promise<s.SuggestResponse> {
    const query = new URLSearchParams;
    query.set("q", params["query"]?.toString() ?? "");
    query.set("suggester", params["suggester"]?.toString() ?? "");
    if (params["size"] != null) query.set("size", params["size"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "Suggest",
      method: "GET",
      requestUri: "/2013-01-01/suggest?format=sdk&pretty=true",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "status": toSuggestStatus,
        "suggest": toSuggestModel,
      },
    }, await resp.json());
  }

  async uploadDocuments(
    {abortSignal, ...params}: RequestConfig & s.UploadDocumentsRequest,
  ): Promise<s.UploadDocumentsResponse> {
    const body = typeof params["documents"] === 'string' ? new TextEncoder().encode(params["documents"]) : params["documents"];
    const headers = new Headers;
    headers.append("Content-Type", params["contentType"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "UploadDocuments",
      requestUri: "/2013-01-01/documents/batch?format=sdk",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "status": "s",
        "adds": "n",
        "deletes": "n",
        "warnings": [toDocumentServiceWarning],
      },
    }, await resp.json());
  }

}

function toSearchStatus(root: jsonP.JSONValue): s.SearchStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "timems": "n",
      "rid": "s",
    },
  }, root);
}

function toHits(root: jsonP.JSONValue): s.Hits {
  return jsonP.readObj({
    required: {},
    optional: {
      "found": "n",
      "start": "n",
      "cursor": "s",
      "hit": [toHit],
    },
  }, root);
}

function toHit(root: jsonP.JSONValue): s.Hit {
  return jsonP.readObj({
    required: {},
    optional: {
      "id": "s",
      "fields": x => jsonP.readMap(String, l => Array.isArray(l) ? l.map(String) : [], x),
      "exprs": x => jsonP.readMap(String, String, x),
      "highlights": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

function toBucketInfo(root: jsonP.JSONValue): s.BucketInfo {
  return jsonP.readObj({
    required: {},
    optional: {
      "buckets": [toBucket],
    },
  }, root);
}

function toBucket(root: jsonP.JSONValue): s.Bucket {
  return jsonP.readObj({
    required: {},
    optional: {
      "value": "s",
      "count": "n",
    },
  }, root);
}

function toFieldStats(root: jsonP.JSONValue): s.FieldStats {
  return jsonP.readObj({
    required: {},
    optional: {
      "min": "s",
      "max": "s",
      "count": "n",
      "missing": "n",
      "sum": "n",
      "sumOfSquares": "n",
      "mean": "s",
      "stddev": "n",
    },
  }, root);
}

function toSuggestStatus(root: jsonP.JSONValue): s.SuggestStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "timems": "n",
      "rid": "s",
    },
  }, root);
}

function toSuggestModel(root: jsonP.JSONValue): s.SuggestModel {
  return jsonP.readObj({
    required: {},
    optional: {
      "query": "s",
      "found": "n",
      "suggestions": [toSuggestionMatch],
    },
  }, root);
}

function toSuggestionMatch(root: jsonP.JSONValue): s.SuggestionMatch {
  return jsonP.readObj({
    required: {},
    optional: {
      "suggestion": "s",
      "score": "n",
      "id": "s",
    },
  }, root);
}

function toDocumentServiceWarning(root: jsonP.JSONValue): s.DocumentServiceWarning {
  return jsonP.readObj({
    required: {},
    optional: {
      "message": "s",
    },
  }, root);
}

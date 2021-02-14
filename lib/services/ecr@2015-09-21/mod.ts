// Autogenerated API client for: Amazon EC2 Container Registry

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as Base64 from "https://deno.land/std@0.86.0/encoding/base64.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";
function serializeBlob(input: string | Uint8Array | null | undefined) {
  if (input == null) return input;
  return Base64.encode(input);
}

export default class ECR {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ECR.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2015-09-21",
    "endpointPrefix": "api.ecr",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "Amazon ECR",
    "serviceFullName": "Amazon EC2 Container Registry",
    "serviceId": "ECR",
    "signatureVersion": "v4",
    "signingName": "ecr",
    "targetPrefix": "AmazonEC2ContainerRegistry_V20150921",
    "uid": "ecr-2015-09-21"
  };

  async batchCheckLayerAvailability(
    {abortSignal, ...params}: RequestConfig & s.BatchCheckLayerAvailabilityRequest,
  ): Promise<s.BatchCheckLayerAvailabilityResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      layerDigests: params["layerDigests"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchCheckLayerAvailability",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "layers": [toLayer],
        "failures": [toLayerFailure],
      },
    }, await resp.json());
  }

  async batchDeleteImage(
    {abortSignal, ...params}: RequestConfig & s.BatchDeleteImageRequest,
  ): Promise<s.BatchDeleteImageResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      imageIds: params["imageIds"]?.map(x => fromImageIdentifier(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchDeleteImage",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "imageIds": [toImageIdentifier],
        "failures": [toImageFailure],
      },
    }, await resp.json());
  }

  async batchGetImage(
    {abortSignal, ...params}: RequestConfig & s.BatchGetImageRequest,
  ): Promise<s.BatchGetImageResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      imageIds: params["imageIds"]?.map(x => fromImageIdentifier(x)),
      acceptedMediaTypes: params["acceptedMediaTypes"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchGetImage",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "images": [toImage],
        "failures": [toImageFailure],
      },
    }, await resp.json());
  }

  async completeLayerUpload(
    {abortSignal, ...params}: RequestConfig & s.CompleteLayerUploadRequest,
  ): Promise<s.CompleteLayerUploadResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      uploadId: params["uploadId"],
      layerDigests: params["layerDigests"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CompleteLayerUpload",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "uploadId": "s",
        "layerDigest": "s",
      },
    }, await resp.json());
  }

  async createRepository(
    {abortSignal, ...params}: RequestConfig & s.CreateRepositoryRequest,
  ): Promise<s.CreateRepositoryResponse> {
    const body: jsonP.JSONObject = {
      repositoryName: params["repositoryName"],
      tags: params["tags"]?.map(x => fromTag(x)),
      imageTagMutability: params["imageTagMutability"],
      imageScanningConfiguration: fromImageScanningConfiguration(params["imageScanningConfiguration"]),
      encryptionConfiguration: fromEncryptionConfiguration(params["encryptionConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateRepository",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "repository": toRepository,
      },
    }, await resp.json());
  }

  async deleteLifecyclePolicy(
    {abortSignal, ...params}: RequestConfig & s.DeleteLifecyclePolicyRequest,
  ): Promise<s.DeleteLifecyclePolicyResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteLifecyclePolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "lifecyclePolicyText": "s",
        "lastEvaluatedAt": "d",
      },
    }, await resp.json());
  }

  async deleteRegistryPolicy(
    {abortSignal, ...params}: RequestConfig & s.DeleteRegistryPolicyRequest = {},
  ): Promise<s.DeleteRegistryPolicyResponse> {
    const body: jsonP.JSONObject = {
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteRegistryPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "policyText": "s",
      },
    }, await resp.json());
  }

  async deleteRepository(
    {abortSignal, ...params}: RequestConfig & s.DeleteRepositoryRequest,
  ): Promise<s.DeleteRepositoryResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      force: params["force"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteRepository",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "repository": toRepository,
      },
    }, await resp.json());
  }

  async deleteRepositoryPolicy(
    {abortSignal, ...params}: RequestConfig & s.DeleteRepositoryPolicyRequest,
  ): Promise<s.DeleteRepositoryPolicyResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteRepositoryPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "policyText": "s",
      },
    }, await resp.json());
  }

  async describeImageScanFindings(
    {abortSignal, ...params}: RequestConfig & s.DescribeImageScanFindingsRequest,
  ): Promise<s.DescribeImageScanFindingsResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      imageId: fromImageIdentifier(params["imageId"]),
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeImageScanFindings",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "imageId": toImageIdentifier,
        "imageScanStatus": toImageScanStatus,
        "imageScanFindings": toImageScanFindings,
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async describeImages(
    {abortSignal, ...params}: RequestConfig & s.DescribeImagesRequest,
  ): Promise<s.DescribeImagesResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      imageIds: params["imageIds"]?.map(x => fromImageIdentifier(x)),
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
      filter: fromDescribeImagesFilter(params["filter"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeImages",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "imageDetails": [toImageDetail],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async describeRegistry(
    {abortSignal, ...params}: RequestConfig & s.DescribeRegistryRequest = {},
  ): Promise<s.DescribeRegistryResponse> {
    const body: jsonP.JSONObject = {
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeRegistry",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "replicationConfiguration": toReplicationConfiguration,
      },
    }, await resp.json());
  }

  async describeRepositories(
    {abortSignal, ...params}: RequestConfig & s.DescribeRepositoriesRequest = {},
  ): Promise<s.DescribeRepositoriesResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryNames: params["repositoryNames"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeRepositories",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "repositories": [toRepository],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async getAuthorizationToken(
    {abortSignal, ...params}: RequestConfig & s.GetAuthorizationTokenRequest = {},
  ): Promise<s.GetAuthorizationTokenResponse> {
    const body: jsonP.JSONObject = {
      registryIds: params["registryIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAuthorizationToken",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "authorizationData": [toAuthorizationData],
      },
    }, await resp.json());
  }

  async getDownloadUrlForLayer(
    {abortSignal, ...params}: RequestConfig & s.GetDownloadUrlForLayerRequest,
  ): Promise<s.GetDownloadUrlForLayerResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      layerDigest: params["layerDigest"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetDownloadUrlForLayer",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "downloadUrl": "s",
        "layerDigest": "s",
      },
    }, await resp.json());
  }

  async getLifecyclePolicy(
    {abortSignal, ...params}: RequestConfig & s.GetLifecyclePolicyRequest,
  ): Promise<s.GetLifecyclePolicyResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetLifecyclePolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "lifecyclePolicyText": "s",
        "lastEvaluatedAt": "d",
      },
    }, await resp.json());
  }

  async getLifecyclePolicyPreview(
    {abortSignal, ...params}: RequestConfig & s.GetLifecyclePolicyPreviewRequest,
  ): Promise<s.GetLifecyclePolicyPreviewResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      imageIds: params["imageIds"]?.map(x => fromImageIdentifier(x)),
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
      filter: fromLifecyclePolicyPreviewFilter(params["filter"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetLifecyclePolicyPreview",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "lifecyclePolicyText": "s",
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.LifecyclePolicyPreviewStatus>(x),
        "nextToken": "s",
        "previewResults": [toLifecyclePolicyPreviewResult],
        "summary": toLifecyclePolicyPreviewSummary,
      },
    }, await resp.json());
  }

  async getRegistryPolicy(
    {abortSignal, ...params}: RequestConfig & s.GetRegistryPolicyRequest = {},
  ): Promise<s.GetRegistryPolicyResponse> {
    const body: jsonP.JSONObject = {
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetRegistryPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "policyText": "s",
      },
    }, await resp.json());
  }

  async getRepositoryPolicy(
    {abortSignal, ...params}: RequestConfig & s.GetRepositoryPolicyRequest,
  ): Promise<s.GetRepositoryPolicyResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetRepositoryPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "policyText": "s",
      },
    }, await resp.json());
  }

  async initiateLayerUpload(
    {abortSignal, ...params}: RequestConfig & s.InitiateLayerUploadRequest,
  ): Promise<s.InitiateLayerUploadResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "InitiateLayerUpload",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "uploadId": "s",
        "partSize": "n",
      },
    }, await resp.json());
  }

  async listImages(
    {abortSignal, ...params}: RequestConfig & s.ListImagesRequest,
  ): Promise<s.ListImagesResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      nextToken: params["nextToken"],
      maxResults: params["maxResults"],
      filter: fromListImagesFilter(params["filter"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListImages",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "imageIds": [toImageIdentifier],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tags": [toTag],
      },
    }, await resp.json());
  }

  async putImage(
    {abortSignal, ...params}: RequestConfig & s.PutImageRequest,
  ): Promise<s.PutImageResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      imageManifest: params["imageManifest"],
      imageManifestMediaType: params["imageManifestMediaType"],
      imageTag: params["imageTag"],
      imageDigest: params["imageDigest"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutImage",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "image": toImage,
      },
    }, await resp.json());
  }

  async putImageScanningConfiguration(
    {abortSignal, ...params}: RequestConfig & s.PutImageScanningConfigurationRequest,
  ): Promise<s.PutImageScanningConfigurationResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      imageScanningConfiguration: fromImageScanningConfiguration(params["imageScanningConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutImageScanningConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "imageScanningConfiguration": toImageScanningConfiguration,
      },
    }, await resp.json());
  }

  async putImageTagMutability(
    {abortSignal, ...params}: RequestConfig & s.PutImageTagMutabilityRequest,
  ): Promise<s.PutImageTagMutabilityResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      imageTagMutability: params["imageTagMutability"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutImageTagMutability",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "imageTagMutability": (x: jsonP.JSONValue) => cmnP.readEnum<s.ImageTagMutability>(x),
      },
    }, await resp.json());
  }

  async putLifecyclePolicy(
    {abortSignal, ...params}: RequestConfig & s.PutLifecyclePolicyRequest,
  ): Promise<s.PutLifecyclePolicyResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      lifecyclePolicyText: params["lifecyclePolicyText"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutLifecyclePolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "lifecyclePolicyText": "s",
      },
    }, await resp.json());
  }

  async putRegistryPolicy(
    {abortSignal, ...params}: RequestConfig & s.PutRegistryPolicyRequest,
  ): Promise<s.PutRegistryPolicyResponse> {
    const body: jsonP.JSONObject = {
      policyText: params["policyText"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutRegistryPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "policyText": "s",
      },
    }, await resp.json());
  }

  async putReplicationConfiguration(
    {abortSignal, ...params}: RequestConfig & s.PutReplicationConfigurationRequest,
  ): Promise<s.PutReplicationConfigurationResponse> {
    const body: jsonP.JSONObject = {
      replicationConfiguration: fromReplicationConfiguration(params["replicationConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutReplicationConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "replicationConfiguration": toReplicationConfiguration,
      },
    }, await resp.json());
  }

  async setRepositoryPolicy(
    {abortSignal, ...params}: RequestConfig & s.SetRepositoryPolicyRequest,
  ): Promise<s.SetRepositoryPolicyResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      policyText: params["policyText"],
      force: params["force"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SetRepositoryPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "policyText": "s",
      },
    }, await resp.json());
  }

  async startImageScan(
    {abortSignal, ...params}: RequestConfig & s.StartImageScanRequest,
  ): Promise<s.StartImageScanResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      imageId: fromImageIdentifier(params["imageId"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartImageScan",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "imageId": toImageIdentifier,
        "imageScanStatus": toImageScanStatus,
      },
    }, await resp.json());
  }

  async startLifecyclePolicyPreview(
    {abortSignal, ...params}: RequestConfig & s.StartLifecyclePolicyPreviewRequest,
  ): Promise<s.StartLifecyclePolicyPreviewResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      lifecyclePolicyText: params["lifecyclePolicyText"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartLifecyclePolicyPreview",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "lifecyclePolicyText": "s",
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.LifecyclePolicyPreviewStatus>(x),
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
      tags: params["tags"]?.map(x => fromTag(x)),
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
      resourceArn: params["resourceArn"],
      tagKeys: params["tagKeys"],
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

  async uploadLayerPart(
    {abortSignal, ...params}: RequestConfig & s.UploadLayerPartRequest,
  ): Promise<s.UploadLayerPartResponse> {
    const body: jsonP.JSONObject = {
      registryId: params["registryId"],
      repositoryName: params["repositoryName"],
      uploadId: params["uploadId"],
      partFirstByte: params["partFirstByte"],
      partLastByte: params["partLastByte"],
      layerPartBlob: serializeBlob(params["layerPartBlob"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UploadLayerPart",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "registryId": "s",
        "repositoryName": "s",
        "uploadId": "s",
        "lastByteReceived": "n",
      },
    }, await resp.json());
  }

  // Resource State Waiters

  /**
   * Wait until an image scan is complete and findings can be accessed
   * Checks state up to 60 times, 5 seconds apart (about 5 minutes max wait time).
   */
  async waitForImageScanComplete(
    params: RequestConfig & s.DescribeImageScanFindingsRequest,
  ): Promise<s.DescribeImageScanFindingsResponse> {
    const errMessage = 'ResourceNotReady: Resource is not in the state ImageScanComplete';
    for (let i = 0; i < 60; i++) {
      const resp = await this.describeImageScanFindings(params);
      const field = resp?.imageScanStatus?.status;
      if (field === "COMPLETE") return resp;
      if (field === "FAILED") throw new Error(errMessage);
      await new Promise(r => setTimeout(r, 5000));
    }
    throw new Error(errMessage);
  }

  /**
   * Wait until a lifecycle policy preview request is complete and results can be accessed
   * Checks state up to 20 times, 5 seconds apart (about 2 minutes max wait time).
   */
  async waitForLifecyclePolicyPreviewComplete(
    params: RequestConfig & s.GetLifecyclePolicyPreviewRequest,
  ): Promise<s.GetLifecyclePolicyPreviewResponse> {
    const errMessage = 'ResourceNotReady: Resource is not in the state LifecyclePolicyPreviewComplete';
    for (let i = 0; i < 20; i++) {
      const resp = await this.getLifecyclePolicyPreview(params);
      const field = resp?.status;
      if (field === "COMPLETE") return resp;
      if (field === "FAILED") throw new Error(errMessage);
      await new Promise(r => setTimeout(r, 5000));
    }
    throw new Error(errMessage);
  }

}

function fromImageIdentifier(input?: s.ImageIdentifier | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    imageDigest: input["imageDigest"],
    imageTag: input["imageTag"],
  }
}
function toImageIdentifier(root: jsonP.JSONValue): s.ImageIdentifier {
  return jsonP.readObj({
    required: {},
    optional: {
      "imageDigest": "s",
      "imageTag": "s",
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
    required: {},
    optional: {
      "Key": "s",
      "Value": "s",
    },
  }, root);
}

function fromImageScanningConfiguration(input?: s.ImageScanningConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    scanOnPush: input["scanOnPush"],
  }
}
function toImageScanningConfiguration(root: jsonP.JSONValue): s.ImageScanningConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "scanOnPush": "b",
    },
  }, root);
}

function fromEncryptionConfiguration(input?: s.EncryptionConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    encryptionType: input["encryptionType"],
    kmsKey: input["kmsKey"],
  }
}
function toEncryptionConfiguration(root: jsonP.JSONValue): s.EncryptionConfiguration {
  return jsonP.readObj({
    required: {
      "encryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
    },
    optional: {
      "kmsKey": "s",
    },
  }, root);
}

function fromDescribeImagesFilter(input?: s.DescribeImagesFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    tagStatus: input["tagStatus"],
  }
}

function fromLifecyclePolicyPreviewFilter(input?: s.LifecyclePolicyPreviewFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    tagStatus: input["tagStatus"],
  }
}

function fromListImagesFilter(input?: s.ListImagesFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    tagStatus: input["tagStatus"],
  }
}

function fromReplicationConfiguration(input?: s.ReplicationConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    rules: input["rules"]?.map(x => fromReplicationRule(x)),
  }
}
function toReplicationConfiguration(root: jsonP.JSONValue): s.ReplicationConfiguration {
  return jsonP.readObj({
    required: {
      "rules": [toReplicationRule],
    },
    optional: {},
  }, root);
}

function fromReplicationRule(input?: s.ReplicationRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    destinations: input["destinations"]?.map(x => fromReplicationDestination(x)),
  }
}
function toReplicationRule(root: jsonP.JSONValue): s.ReplicationRule {
  return jsonP.readObj({
    required: {
      "destinations": [toReplicationDestination],
    },
    optional: {},
  }, root);
}

function fromReplicationDestination(input?: s.ReplicationDestination | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    region: input["region"],
    registryId: input["registryId"],
  }
}
function toReplicationDestination(root: jsonP.JSONValue): s.ReplicationDestination {
  return jsonP.readObj({
    required: {
      "region": "s",
      "registryId": "s",
    },
    optional: {},
  }, root);
}

function toLayer(root: jsonP.JSONValue): s.Layer {
  return jsonP.readObj({
    required: {},
    optional: {
      "layerDigest": "s",
      "layerAvailability": (x: jsonP.JSONValue) => cmnP.readEnum<s.LayerAvailability>(x),
      "layerSize": "n",
      "mediaType": "s",
    },
  }, root);
}

function toLayerFailure(root: jsonP.JSONValue): s.LayerFailure {
  return jsonP.readObj({
    required: {},
    optional: {
      "layerDigest": "s",
      "failureCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.LayerFailureCode>(x),
      "failureReason": "s",
    },
  }, root);
}

function toImageFailure(root: jsonP.JSONValue): s.ImageFailure {
  return jsonP.readObj({
    required: {},
    optional: {
      "imageId": toImageIdentifier,
      "failureCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.ImageFailureCode>(x),
      "failureReason": "s",
    },
  }, root);
}

function toImage(root: jsonP.JSONValue): s.Image {
  return jsonP.readObj({
    required: {},
    optional: {
      "registryId": "s",
      "repositoryName": "s",
      "imageId": toImageIdentifier,
      "imageManifest": "s",
      "imageManifestMediaType": "s",
    },
  }, root);
}

function toRepository(root: jsonP.JSONValue): s.Repository {
  return jsonP.readObj({
    required: {},
    optional: {
      "repositoryArn": "s",
      "registryId": "s",
      "repositoryName": "s",
      "repositoryUri": "s",
      "createdAt": "d",
      "imageTagMutability": (x: jsonP.JSONValue) => cmnP.readEnum<s.ImageTagMutability>(x),
      "imageScanningConfiguration": toImageScanningConfiguration,
      "encryptionConfiguration": toEncryptionConfiguration,
    },
  }, root);
}

function toImageScanStatus(root: jsonP.JSONValue): s.ImageScanStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScanStatus>(x),
      "description": "s",
    },
  }, root);
}

function toImageScanFindings(root: jsonP.JSONValue): s.ImageScanFindings {
  return jsonP.readObj({
    required: {},
    optional: {
      "imageScanCompletedAt": "d",
      "vulnerabilitySourceUpdatedAt": "d",
      "findings": [toImageScanFinding],
      "findingSeverityCounts": x => jsonP.readMap(x => cmnP.readEnumReq<s.FindingSeverity>(x), Number, x),
    },
  }, root);
}

function toImageScanFinding(root: jsonP.JSONValue): s.ImageScanFinding {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": "s",
      "description": "s",
      "uri": "s",
      "severity": (x: jsonP.JSONValue) => cmnP.readEnum<s.FindingSeverity>(x),
      "attributes": [toAttribute],
    },
  }, root);
}

function toAttribute(root: jsonP.JSONValue): s.Attribute {
  return jsonP.readObj({
    required: {
      "key": "s",
    },
    optional: {
      "value": "s",
    },
  }, root);
}

function toImageDetail(root: jsonP.JSONValue): s.ImageDetail {
  return jsonP.readObj({
    required: {},
    optional: {
      "registryId": "s",
      "repositoryName": "s",
      "imageDigest": "s",
      "imageTags": ["s"],
      "imageSizeInBytes": "n",
      "imagePushedAt": "d",
      "imageScanStatus": toImageScanStatus,
      "imageScanFindingsSummary": toImageScanFindingsSummary,
      "imageManifestMediaType": "s",
      "artifactMediaType": "s",
    },
  }, root);
}

function toImageScanFindingsSummary(root: jsonP.JSONValue): s.ImageScanFindingsSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "imageScanCompletedAt": "d",
      "vulnerabilitySourceUpdatedAt": "d",
      "findingSeverityCounts": x => jsonP.readMap(x => cmnP.readEnumReq<s.FindingSeverity>(x), Number, x),
    },
  }, root);
}

function toAuthorizationData(root: jsonP.JSONValue): s.AuthorizationData {
  return jsonP.readObj({
    required: {},
    optional: {
      "authorizationToken": "s",
      "expiresAt": "d",
      "proxyEndpoint": "s",
    },
  }, root);
}

function toLifecyclePolicyPreviewResult(root: jsonP.JSONValue): s.LifecyclePolicyPreviewResult {
  return jsonP.readObj({
    required: {},
    optional: {
      "imageTags": ["s"],
      "imageDigest": "s",
      "imagePushedAt": "d",
      "action": toLifecyclePolicyRuleAction,
      "appliedRulePriority": "n",
    },
  }, root);
}

function toLifecyclePolicyRuleAction(root: jsonP.JSONValue): s.LifecyclePolicyRuleAction {
  return jsonP.readObj({
    required: {},
    optional: {
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.ImageActionType>(x),
    },
  }, root);
}

function toLifecyclePolicyPreviewSummary(root: jsonP.JSONValue): s.LifecyclePolicyPreviewSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "expiringImageTotalCount": "n",
    },
  }, root);
}

// Autogenerated API client for: Amazon Glacier

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class Glacier {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Glacier.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2012-06-01",
    "checksumFormat": "sha256",
    "endpointPrefix": "glacier",
    "protocol": "rest-json",
    "serviceFullName": "Amazon Glacier",
    "serviceId": "Glacier",
    "signatureVersion": "v4",
    "uid": "glacier-2012-06-01"
  };

  async abortMultipartUpload(
    {abortSignal, ...params}: RequestConfig & s.AbortMultipartUploadInput,
  ): Promise<void> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "AbortMultipartUpload",
      method: "DELETE",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/multipart-uploads/${params["uploadId"]}`,
      responseCode: 204,
    });
  }

  async abortVaultLock(
    {abortSignal, ...params}: RequestConfig & s.AbortVaultLockInput,
  ): Promise<void> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "AbortVaultLock",
      method: "DELETE",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/lock-policy`,
      responseCode: 204,
    });
  }

  async addTagsToVault(
    {abortSignal, ...params}: RequestConfig & s.AddTagsToVaultInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AddTagsToVault",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/tags?operation=add`,
      responseCode: 204,
    });
  }

  async completeMultipartUpload(
    {abortSignal, ...params}: RequestConfig & s.CompleteMultipartUploadInput,
  ): Promise<s.ArchiveCreationOutput> {
    const headers = new Headers;
    if (params["archiveSize"] != null) headers.append("x-amz-archive-size", params["archiveSize"]);
    if (params["checksum"] != null) headers.append("x-amz-sha256-tree-hash", params["checksum"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers,
      action: "CompleteMultipartUpload",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/multipart-uploads/${params["uploadId"]}`,
      responseCode: 201,
    });
    return {
      location: resp.headers.get("Location"),
      checksum: resp.headers.get("x-amz-sha256-tree-hash"),
      archiveId: resp.headers.get("x-amz-archive-id"),
      ...jsonP.readObj({
        required: {},
        optional: {},
      }, await resp.json()),
    };
  }

  async completeVaultLock(
    {abortSignal, ...params}: RequestConfig & s.CompleteVaultLockInput,
  ): Promise<void> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "CompleteVaultLock",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/lock-policy/${params["lockId"]}`,
      responseCode: 204,
    });
  }

  async createVault(
    {abortSignal, ...params}: RequestConfig & s.CreateVaultInput,
  ): Promise<s.CreateVaultOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "CreateVault",
      method: "PUT",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}`,
      responseCode: 201,
    });
    return {
      location: resp.headers.get("Location"),
      ...jsonP.readObj({
        required: {},
        optional: {},
      }, await resp.json()),
    };
  }

  async deleteArchive(
    {abortSignal, ...params}: RequestConfig & s.DeleteArchiveInput,
  ): Promise<void> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteArchive",
      method: "DELETE",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/archives/${params["archiveId"]}`,
      responseCode: 204,
    });
  }

  async deleteVault(
    {abortSignal, ...params}: RequestConfig & s.DeleteVaultInput,
  ): Promise<void> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteVault",
      method: "DELETE",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}`,
      responseCode: 204,
    });
  }

  async deleteVaultAccessPolicy(
    {abortSignal, ...params}: RequestConfig & s.DeleteVaultAccessPolicyInput,
  ): Promise<void> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteVaultAccessPolicy",
      method: "DELETE",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/access-policy`,
      responseCode: 204,
    });
  }

  async deleteVaultNotifications(
    {abortSignal, ...params}: RequestConfig & s.DeleteVaultNotificationsInput,
  ): Promise<void> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteVaultNotifications",
      method: "DELETE",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/notification-configuration`,
      responseCode: 204,
    });
  }

  async describeJob(
    {abortSignal, ...params}: RequestConfig & s.DescribeJobInput,
  ): Promise<s.GlacierJobDescription> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeJob",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/jobs/${params["jobId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
        "JobDescription": "s",
        "Action": (x: jsonP.JSONValue) => cmnP.readEnum<s.ActionCode>(x),
        "ArchiveId": "s",
        "VaultARN": "s",
        "CreationDate": "s",
        "Completed": "b",
        "StatusCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.StatusCode>(x),
        "StatusMessage": "s",
        "ArchiveSizeInBytes": "n",
        "InventorySizeInBytes": "n",
        "SNSTopic": "s",
        "CompletionDate": "s",
        "SHA256TreeHash": "s",
        "ArchiveSHA256TreeHash": "s",
        "RetrievalByteRange": "s",
        "Tier": "s",
        "InventoryRetrievalParameters": toInventoryRetrievalJobDescription,
        "JobOutputPath": "s",
        "SelectParameters": toSelectParameters,
        "OutputLocation": toOutputLocation,
      },
    }, await resp.json());
  }

  async describeVault(
    {abortSignal, ...params}: RequestConfig & s.DescribeVaultInput,
  ): Promise<s.DescribeVaultOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeVault",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "VaultARN": "s",
        "VaultName": "s",
        "CreationDate": "s",
        "LastInventoryDate": "s",
        "NumberOfArchives": "n",
        "SizeInBytes": "n",
      },
    }, await resp.json());
  }

  async getDataRetrievalPolicy(
    {abortSignal, ...params}: RequestConfig & s.GetDataRetrievalPolicyInput,
  ): Promise<s.GetDataRetrievalPolicyOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetDataRetrievalPolicy",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/policies/data-retrieval`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Policy": toDataRetrievalPolicy,
      },
    }, await resp.json());
  }

  async getJobOutput(
    {abortSignal, ...params}: RequestConfig & s.GetJobOutputInput,
  ): Promise<s.GetJobOutputOutput> {
    const headers = new Headers;
    if (params["range"] != null) headers.append("Range", params["range"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers,
      action: "GetJobOutput",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/jobs/${params["jobId"]}/output`,
    });
  return {
    checksum: resp.headers.get("x-amz-sha256-tree-hash"),
    status: resp.status,
    contentRange: resp.headers.get("Content-Range"),
    acceptRanges: resp.headers.get("Accept-Ranges"),
    contentType: resp.headers.get("Content-Type"),
    archiveDescription: resp.headers.get("x-amz-archive-description"),
    body: await resp.text(), // TODO: maybe allow proper body streaming,
  };
  }

  async getVaultAccessPolicy(
    {abortSignal, ...params}: RequestConfig & s.GetVaultAccessPolicyInput,
  ): Promise<s.GetVaultAccessPolicyOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetVaultAccessPolicy",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/access-policy`,
    });
  return {
    policy: toVaultAccessPolicy(await resp.json()),
  };
  }

  async getVaultLock(
    {abortSignal, ...params}: RequestConfig & s.GetVaultLockInput,
  ): Promise<s.GetVaultLockOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetVaultLock",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/lock-policy`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Policy": "s",
        "State": "s",
        "ExpirationDate": "s",
        "CreationDate": "s",
      },
    }, await resp.json());
  }

  async getVaultNotifications(
    {abortSignal, ...params}: RequestConfig & s.GetVaultNotificationsInput,
  ): Promise<s.GetVaultNotificationsOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetVaultNotifications",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/notification-configuration`,
    });
  return {
    vaultNotificationConfig: toVaultNotificationConfig(await resp.json()),
  };
  }

  async initiateJob(
    {abortSignal, ...params}: RequestConfig & s.InitiateJobInput,
  ): Promise<s.InitiateJobOutput> {
    const inner = params["jobParameters"];
    const body: jsonP.JSONObject = inner ? {
      Format: inner["Format"],
      Type: inner["Type"],
      ArchiveId: inner["ArchiveId"],
      Description: inner["Description"],
      SNSTopic: inner["SNSTopic"],
      RetrievalByteRange: inner["RetrievalByteRange"],
      Tier: inner["Tier"],
      InventoryRetrievalParameters: fromInventoryRetrievalJobInput(inner["InventoryRetrievalParameters"]),
      SelectParameters: fromSelectParameters(inner["SelectParameters"]),
      OutputLocation: fromOutputLocation(inner["OutputLocation"]),
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "InitiateJob",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/jobs`,
      responseCode: 202,
    });
    return {
      location: resp.headers.get("Location"),
      jobId: resp.headers.get("x-amz-job-id"),
      jobOutputPath: resp.headers.get("x-amz-job-output-path"),
      ...jsonP.readObj({
        required: {},
        optional: {},
      }, await resp.json()),
    };
  }

  async initiateMultipartUpload(
    {abortSignal, ...params}: RequestConfig & s.InitiateMultipartUploadInput,
  ): Promise<s.InitiateMultipartUploadOutput> {
    const headers = new Headers;
    if (params["archiveDescription"] != null) headers.append("x-amz-archive-description", params["archiveDescription"]);
    if (params["partSize"] != null) headers.append("x-amz-part-size", params["partSize"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers,
      action: "InitiateMultipartUpload",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/multipart-uploads`,
      responseCode: 201,
    });
    return {
      location: resp.headers.get("Location"),
      uploadId: resp.headers.get("x-amz-multipart-upload-id"),
      ...jsonP.readObj({
        required: {},
        optional: {},
      }, await resp.json()),
    };
  }

  async initiateVaultLock(
    {abortSignal, ...params}: RequestConfig & s.InitiateVaultLockInput,
  ): Promise<s.InitiateVaultLockOutput> {
    const inner = params["policy"];
    const body: jsonP.JSONObject = inner ? {
      Policy: inner["Policy"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "InitiateVaultLock",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/lock-policy`,
      responseCode: 201,
    });
    return {
      lockId: resp.headers.get("x-amz-lock-id"),
      ...jsonP.readObj({
        required: {},
        optional: {},
      }, await resp.json()),
    };
  }

  async listJobs(
    {abortSignal, ...params}: RequestConfig & s.ListJobsInput,
  ): Promise<s.ListJobsOutput> {
    const query = new URLSearchParams;
    if (params["limit"] != null) query.set("limit", params["limit"]?.toString() ?? "");
    if (params["marker"] != null) query.set("marker", params["marker"]?.toString() ?? "");
    if (params["statuscode"] != null) query.set("statuscode", params["statuscode"]?.toString() ?? "");
    if (params["completed"] != null) query.set("completed", params["completed"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListJobs",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/jobs`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobList": [toGlacierJobDescription],
        "Marker": "s",
      },
    }, await resp.json());
  }

  async listMultipartUploads(
    {abortSignal, ...params}: RequestConfig & s.ListMultipartUploadsInput,
  ): Promise<s.ListMultipartUploadsOutput> {
    const query = new URLSearchParams;
    if (params["marker"] != null) query.set("marker", params["marker"]?.toString() ?? "");
    if (params["limit"] != null) query.set("limit", params["limit"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListMultipartUploads",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/multipart-uploads`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "UploadsList": [toUploadListElement],
        "Marker": "s",
      },
    }, await resp.json());
  }

  async listParts(
    {abortSignal, ...params}: RequestConfig & s.ListPartsInput,
  ): Promise<s.ListPartsOutput> {
    const query = new URLSearchParams;
    if (params["marker"] != null) query.set("marker", params["marker"]?.toString() ?? "");
    if (params["limit"] != null) query.set("limit", params["limit"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListParts",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/multipart-uploads/${params["uploadId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "MultipartUploadId": "s",
        "VaultARN": "s",
        "ArchiveDescription": "s",
        "PartSizeInBytes": "n",
        "CreationDate": "s",
        "Parts": [toPartListElement],
        "Marker": "s",
      },
    }, await resp.json());
  }

  async listProvisionedCapacity(
    {abortSignal, ...params}: RequestConfig & s.ListProvisionedCapacityInput,
  ): Promise<s.ListProvisionedCapacityOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListProvisionedCapacity",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/provisioned-capacity`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ProvisionedCapacityList": [toProvisionedCapacityDescription],
      },
    }, await resp.json());
  }

  async listTagsForVault(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForVaultInput,
  ): Promise<s.ListTagsForVaultOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTagsForVault",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/tags`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async listVaults(
    {abortSignal, ...params}: RequestConfig & s.ListVaultsInput,
  ): Promise<s.ListVaultsOutput> {
    const query = new URLSearchParams;
    if (params["marker"] != null) query.set("marker", params["marker"]?.toString() ?? "");
    if (params["limit"] != null) query.set("limit", params["limit"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListVaults",
      method: "GET",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "VaultList": [toDescribeVaultOutput],
        "Marker": "s",
      },
    }, await resp.json());
  }

  async purchaseProvisionedCapacity(
    {abortSignal, ...params}: RequestConfig & s.PurchaseProvisionedCapacityInput,
  ): Promise<s.PurchaseProvisionedCapacityOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "PurchaseProvisionedCapacity",
      requestUri: cmnP.encodePath`/${params["accountId"]}/provisioned-capacity`,
      responseCode: 201,
    });
    return {
      capacityId: resp.headers.get("x-amz-capacity-id"),
      ...jsonP.readObj({
        required: {},
        optional: {},
      }, await resp.json()),
    };
  }

  async removeTagsFromVault(
    {abortSignal, ...params}: RequestConfig & s.RemoveTagsFromVaultInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RemoveTagsFromVault",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/tags?operation=remove`,
      responseCode: 204,
    });
  }

  async setDataRetrievalPolicy(
    {abortSignal, ...params}: RequestConfig & s.SetDataRetrievalPolicyInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      Policy: fromDataRetrievalPolicy(params["Policy"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SetDataRetrievalPolicy",
      method: "PUT",
      requestUri: cmnP.encodePath`/${params["accountId"]}/policies/data-retrieval`,
      responseCode: 204,
    });
  }

  async setVaultAccessPolicy(
    {abortSignal, ...params}: RequestConfig & s.SetVaultAccessPolicyInput,
  ): Promise<void> {
    const inner = params["policy"];
    const body: jsonP.JSONObject = inner ? {
      Policy: inner["Policy"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SetVaultAccessPolicy",
      method: "PUT",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/access-policy`,
      responseCode: 204,
    });
  }

  async setVaultNotifications(
    {abortSignal, ...params}: RequestConfig & s.SetVaultNotificationsInput,
  ): Promise<void> {
    const inner = params["vaultNotificationConfig"];
    const body: jsonP.JSONObject = inner ? {
      SNSTopic: inner["SNSTopic"],
      Events: inner["Events"],
    } : {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SetVaultNotifications",
      method: "PUT",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/notification-configuration`,
      responseCode: 204,
    });
  }

  async uploadArchive(
    {abortSignal, ...params}: RequestConfig & s.UploadArchiveInput,
  ): Promise<s.ArchiveCreationOutput> {
    const body = typeof params["body"] === 'string' ? new TextEncoder().encode(params["body"]) : params["body"];
    const headers = new Headers;
    if (params["archiveDescription"] != null) headers.append("x-amz-archive-description", params["archiveDescription"]);
    if (params["checksum"] != null) headers.append("x-amz-sha256-tree-hash", params["checksum"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "UploadArchive",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/archives`,
      responseCode: 201,
    });
    return {
      location: resp.headers.get("Location"),
      checksum: resp.headers.get("x-amz-sha256-tree-hash"),
      archiveId: resp.headers.get("x-amz-archive-id"),
      ...jsonP.readObj({
        required: {},
        optional: {},
      }, await resp.json()),
    };
  }

  async uploadMultipartPart(
    {abortSignal, ...params}: RequestConfig & s.UploadMultipartPartInput,
  ): Promise<s.UploadMultipartPartOutput> {
    const body = typeof params["body"] === 'string' ? new TextEncoder().encode(params["body"]) : params["body"];
    const headers = new Headers;
    if (params["checksum"] != null) headers.append("x-amz-sha256-tree-hash", params["checksum"]);
    if (params["range"] != null) headers.append("Content-Range", params["range"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "UploadMultipartPart",
      method: "PUT",
      requestUri: cmnP.encodePath`/${params["accountId"]}/vaults/${params["vaultName"]}/multipart-uploads/${params["uploadId"]}`,
      responseCode: 204,
    });
    return {
      checksum: resp.headers.get("x-amz-sha256-tree-hash"),
      ...jsonP.readObj({
        required: {},
        optional: {},
      }, await resp.json()),
    };
  }

  // Resource State Waiters

  /** Checks state up to 15 times, 3 seconds apart (about 1 minutes max wait time). */
  async waitForVaultExists(
    params: RequestConfig & s.DescribeVaultInput,
  ): Promise<s.DescribeVaultOutput> {
    const errMessage = 'ResourceNotReady: Resource is not in the state VaultExists';
    for (let i = 0; i < 15; i++) {
      try {
        const resp = await this.describeVault(params);
        return resp; // for status 200
      } catch (err) {
        if (!["ResourceNotFoundException"].includes(err.shortCode)) throw err;
      }
      await new Promise(r => setTimeout(r, 3000));
    }
    throw new Error(errMessage);
  }

  /** Checks state up to 15 times, 3 seconds apart (about 1 minutes max wait time). */
  async waitForVaultNotExists(
    params: RequestConfig & s.DescribeVaultInput,
  ): Promise<Error | s.DescribeVaultOutput> {
    const errMessage = 'ResourceNotReady: Resource is not in the state VaultNotExists';
    for (let i = 0; i < 15; i++) {
      try {
        const resp = await this.describeVault(params);
        continue; // for status 200
      } catch (err) {
        if (["ResourceNotFoundException"].includes(err.shortCode)) return err;
        throw err;
      }
      await new Promise(r => setTimeout(r, 3000));
    }
    throw new Error(errMessage);
  }

}

function toGlacierJobDescription(root: jsonP.JSONValue): s.GlacierJobDescription {
  return jsonP.readObj({
    required: {},
    optional: {
      "JobId": "s",
      "JobDescription": "s",
      "Action": (x: jsonP.JSONValue) => cmnP.readEnum<s.ActionCode>(x),
      "ArchiveId": "s",
      "VaultARN": "s",
      "CreationDate": "s",
      "Completed": "b",
      "StatusCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.StatusCode>(x),
      "StatusMessage": "s",
      "ArchiveSizeInBytes": "n",
      "InventorySizeInBytes": "n",
      "SNSTopic": "s",
      "CompletionDate": "s",
      "SHA256TreeHash": "s",
      "ArchiveSHA256TreeHash": "s",
      "RetrievalByteRange": "s",
      "Tier": "s",
      "InventoryRetrievalParameters": toInventoryRetrievalJobDescription,
      "JobOutputPath": "s",
      "SelectParameters": toSelectParameters,
      "OutputLocation": toOutputLocation,
    },
  }, root);
}

function toDescribeVaultOutput(root: jsonP.JSONValue): s.DescribeVaultOutput {
  return jsonP.readObj({
    required: {},
    optional: {
      "VaultARN": "s",
      "VaultName": "s",
      "CreationDate": "s",
      "LastInventoryDate": "s",
      "NumberOfArchives": "n",
      "SizeInBytes": "n",
    },
  }, root);
}

function fromJobParameters(input?: s.JobParameters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Format: input["Format"],
    Type: input["Type"],
    ArchiveId: input["ArchiveId"],
    Description: input["Description"],
    SNSTopic: input["SNSTopic"],
    RetrievalByteRange: input["RetrievalByteRange"],
    Tier: input["Tier"],
    InventoryRetrievalParameters: fromInventoryRetrievalJobInput(input["InventoryRetrievalParameters"]),
    SelectParameters: fromSelectParameters(input["SelectParameters"]),
    OutputLocation: fromOutputLocation(input["OutputLocation"]),
  }
}

function fromInventoryRetrievalJobInput(input?: s.InventoryRetrievalJobInput | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    StartDate: input["StartDate"],
    EndDate: input["EndDate"],
    Limit: input["Limit"],
    Marker: input["Marker"],
  }
}

function fromSelectParameters(input?: s.SelectParameters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    InputSerialization: fromInputSerialization(input["InputSerialization"]),
    ExpressionType: input["ExpressionType"],
    Expression: input["Expression"],
    OutputSerialization: fromOutputSerialization(input["OutputSerialization"]),
  }
}
function toSelectParameters(root: jsonP.JSONValue): s.SelectParameters {
  return jsonP.readObj({
    required: {},
    optional: {
      "InputSerialization": toInputSerialization,
      "ExpressionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ExpressionType>(x),
      "Expression": "s",
      "OutputSerialization": toOutputSerialization,
    },
  }, root);
}

function fromInputSerialization(input?: s.InputSerialization | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    csv: fromCSVInput(input["csv"]),
  }
}
function toInputSerialization(root: jsonP.JSONValue): s.InputSerialization {
  return jsonP.readObj({
    required: {},
    optional: {
      "csv": toCSVInput,
    },
  }, root);
}

function fromCSVInput(input?: s.CSVInput | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    FileHeaderInfo: input["FileHeaderInfo"],
    Comments: input["Comments"],
    QuoteEscapeCharacter: input["QuoteEscapeCharacter"],
    RecordDelimiter: input["RecordDelimiter"],
    FieldDelimiter: input["FieldDelimiter"],
    QuoteCharacter: input["QuoteCharacter"],
  }
}
function toCSVInput(root: jsonP.JSONValue): s.CSVInput {
  return jsonP.readObj({
    required: {},
    optional: {
      "FileHeaderInfo": (x: jsonP.JSONValue) => cmnP.readEnum<s.FileHeaderInfo>(x),
      "Comments": "s",
      "QuoteEscapeCharacter": "s",
      "RecordDelimiter": "s",
      "FieldDelimiter": "s",
      "QuoteCharacter": "s",
    },
  }, root);
}

function fromOutputSerialization(input?: s.OutputSerialization | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    csv: fromCSVOutput(input["csv"]),
  }
}
function toOutputSerialization(root: jsonP.JSONValue): s.OutputSerialization {
  return jsonP.readObj({
    required: {},
    optional: {
      "csv": toCSVOutput,
    },
  }, root);
}

function fromCSVOutput(input?: s.CSVOutput | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    QuoteFields: input["QuoteFields"],
    QuoteEscapeCharacter: input["QuoteEscapeCharacter"],
    RecordDelimiter: input["RecordDelimiter"],
    FieldDelimiter: input["FieldDelimiter"],
    QuoteCharacter: input["QuoteCharacter"],
  }
}
function toCSVOutput(root: jsonP.JSONValue): s.CSVOutput {
  return jsonP.readObj({
    required: {},
    optional: {
      "QuoteFields": (x: jsonP.JSONValue) => cmnP.readEnum<s.QuoteFields>(x),
      "QuoteEscapeCharacter": "s",
      "RecordDelimiter": "s",
      "FieldDelimiter": "s",
      "QuoteCharacter": "s",
    },
  }, root);
}

function fromOutputLocation(input?: s.OutputLocation | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3: fromS3Location(input["S3"]),
  }
}
function toOutputLocation(root: jsonP.JSONValue): s.OutputLocation {
  return jsonP.readObj({
    required: {},
    optional: {
      "S3": toS3Location,
    },
  }, root);
}

function fromS3Location(input?: s.S3Location | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    BucketName: input["BucketName"],
    Prefix: input["Prefix"],
    Encryption: fromEncryption(input["Encryption"]),
    CannedACL: input["CannedACL"],
    AccessControlList: input["AccessControlList"]?.map(x => fromGrant(x)),
    Tagging: input["Tagging"],
    UserMetadata: input["UserMetadata"],
    StorageClass: input["StorageClass"],
  }
}
function toS3Location(root: jsonP.JSONValue): s.S3Location {
  return jsonP.readObj({
    required: {},
    optional: {
      "BucketName": "s",
      "Prefix": "s",
      "Encryption": toEncryption,
      "CannedACL": (x: jsonP.JSONValue) => cmnP.readEnum<s.CannedACL>(x),
      "AccessControlList": [toGrant],
      "Tagging": x => jsonP.readMap(String, String, x),
      "UserMetadata": x => jsonP.readMap(String, String, x),
      "StorageClass": (x: jsonP.JSONValue) => cmnP.readEnum<s.StorageClass>(x),
    },
  }, root);
}

function fromEncryption(input?: s.Encryption | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    EncryptionType: input["EncryptionType"],
    KMSKeyId: input["KMSKeyId"],
    KMSContext: input["KMSContext"],
  }
}
function toEncryption(root: jsonP.JSONValue): s.Encryption {
  return jsonP.readObj({
    required: {},
    optional: {
      "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
      "KMSKeyId": "s",
      "KMSContext": "s",
    },
  }, root);
}

function fromGrant(input?: s.Grant | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Grantee: fromGrantee(input["Grantee"]),
    Permission: input["Permission"],
  }
}
function toGrant(root: jsonP.JSONValue): s.Grant {
  return jsonP.readObj({
    required: {},
    optional: {
      "Grantee": toGrantee,
      "Permission": (x: jsonP.JSONValue) => cmnP.readEnum<s.Permission>(x),
    },
  }, root);
}

function fromGrantee(input?: s.Grantee | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    DisplayName: input["DisplayName"],
    URI: input["URI"],
    ID: input["ID"],
    EmailAddress: input["EmailAddress"],
  }
}
function toGrantee(root: jsonP.JSONValue): s.Grantee {
  return jsonP.readObj({
    required: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.Type>(x),
    },
    optional: {
      "DisplayName": "s",
      "URI": "s",
      "ID": "s",
      "EmailAddress": "s",
    },
  }, root);
}

function fromVaultLockPolicy(input?: s.VaultLockPolicy | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Policy: input["Policy"],
  }
}

function fromDataRetrievalPolicy(input?: s.DataRetrievalPolicy | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Rules: input["Rules"]?.map(x => fromDataRetrievalRule(x)),
  }
}
function toDataRetrievalPolicy(root: jsonP.JSONValue): s.DataRetrievalPolicy {
  return jsonP.readObj({
    required: {},
    optional: {
      "Rules": [toDataRetrievalRule],
    },
  }, root);
}

function fromDataRetrievalRule(input?: s.DataRetrievalRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Strategy: input["Strategy"],
    BytesPerHour: input["BytesPerHour"],
  }
}
function toDataRetrievalRule(root: jsonP.JSONValue): s.DataRetrievalRule {
  return jsonP.readObj({
    required: {},
    optional: {
      "Strategy": "s",
      "BytesPerHour": "n",
    },
  }, root);
}

function fromVaultAccessPolicy(input?: s.VaultAccessPolicy | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Policy: input["Policy"],
  }
}
function toVaultAccessPolicy(root: jsonP.JSONValue): s.VaultAccessPolicy {
  return jsonP.readObj({
    required: {},
    optional: {
      "Policy": "s",
    },
  }, root);
}

function fromVaultNotificationConfig(input?: s.VaultNotificationConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    SNSTopic: input["SNSTopic"],
    Events: input["Events"],
  }
}
function toVaultNotificationConfig(root: jsonP.JSONValue): s.VaultNotificationConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "SNSTopic": "s",
      "Events": ["s"],
    },
  }, root);
}

function toInventoryRetrievalJobDescription(root: jsonP.JSONValue): s.InventoryRetrievalJobDescription {
  return jsonP.readObj({
    required: {},
    optional: {
      "Format": "s",
      "StartDate": "s",
      "EndDate": "s",
      "Limit": "s",
      "Marker": "s",
    },
  }, root);
}

function toUploadListElement(root: jsonP.JSONValue): s.UploadListElement {
  return jsonP.readObj({
    required: {},
    optional: {
      "MultipartUploadId": "s",
      "VaultARN": "s",
      "ArchiveDescription": "s",
      "PartSizeInBytes": "n",
      "CreationDate": "s",
    },
  }, root);
}

function toPartListElement(root: jsonP.JSONValue): s.PartListElement {
  return jsonP.readObj({
    required: {},
    optional: {
      "RangeInBytes": "s",
      "SHA256TreeHash": "s",
    },
  }, root);
}

function toProvisionedCapacityDescription(root: jsonP.JSONValue): s.ProvisionedCapacityDescription {
  return jsonP.readObj({
    required: {},
    optional: {
      "CapacityId": "s",
      "StartDate": "s",
      "ExpirationDate": "s",
    },
  }, root);
}

// Autogenerated API client for: AWS Comprehend Medical

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

export default class ComprehendMedical {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ComprehendMedical.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-10-30",
    "endpointPrefix": "comprehendmedical",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "ComprehendMedical",
    "serviceFullName": "AWS Comprehend Medical",
    "serviceId": "ComprehendMedical",
    "signatureVersion": "v4",
    "signingName": "comprehendmedical",
    "targetPrefix": "ComprehendMedical_20181030",
    "uid": "comprehendmedical-2018-10-30"
  };

  async describeEntitiesDetectionV2Job(
    {abortSignal, ...params}: RequestConfig & s.DescribeEntitiesDetectionV2JobRequest,
  ): Promise<s.DescribeEntitiesDetectionV2JobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeEntitiesDetectionV2Job",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobProperties": toComprehendMedicalAsyncJobProperties,
      },
    }, await resp.json());
  }

  async describeICD10CMInferenceJob(
    {abortSignal, ...params}: RequestConfig & s.DescribeICD10CMInferenceJobRequest,
  ): Promise<s.DescribeICD10CMInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeICD10CMInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobProperties": toComprehendMedicalAsyncJobProperties,
      },
    }, await resp.json());
  }

  async describePHIDetectionJob(
    {abortSignal, ...params}: RequestConfig & s.DescribePHIDetectionJobRequest,
  ): Promise<s.DescribePHIDetectionJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribePHIDetectionJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobProperties": toComprehendMedicalAsyncJobProperties,
      },
    }, await resp.json());
  }

  async describeRxNormInferenceJob(
    {abortSignal, ...params}: RequestConfig & s.DescribeRxNormInferenceJobRequest,
  ): Promise<s.DescribeRxNormInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeRxNormInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobProperties": toComprehendMedicalAsyncJobProperties,
      },
    }, await resp.json());
  }

  async detectEntities(
    {abortSignal, ...params}: RequestConfig & s.DetectEntitiesRequest,
  ): Promise<s.DetectEntitiesResponse> {
    const body: jsonP.JSONObject = {
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DetectEntities",
    });
    return jsonP.readObj({
      required: {
        "Entities": [toEntity],
        "ModelVersion": "s",
      },
      optional: {
        "UnmappedAttributes": [toUnmappedAttribute],
        "PaginationToken": "s",
      },
    }, await resp.json());
  }

  async detectEntitiesV2(
    {abortSignal, ...params}: RequestConfig & s.DetectEntitiesV2Request,
  ): Promise<s.DetectEntitiesV2Response> {
    const body: jsonP.JSONObject = {
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DetectEntitiesV2",
    });
    return jsonP.readObj({
      required: {
        "Entities": [toEntity],
        "ModelVersion": "s",
      },
      optional: {
        "UnmappedAttributes": [toUnmappedAttribute],
        "PaginationToken": "s",
      },
    }, await resp.json());
  }

  async detectPHI(
    {abortSignal, ...params}: RequestConfig & s.DetectPHIRequest,
  ): Promise<s.DetectPHIResponse> {
    const body: jsonP.JSONObject = {
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DetectPHI",
    });
    return jsonP.readObj({
      required: {
        "Entities": [toEntity],
        "ModelVersion": "s",
      },
      optional: {
        "PaginationToken": "s",
      },
    }, await resp.json());
  }

  async inferICD10CM(
    {abortSignal, ...params}: RequestConfig & s.InferICD10CMRequest,
  ): Promise<s.InferICD10CMResponse> {
    const body: jsonP.JSONObject = {
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "InferICD10CM",
    });
    return jsonP.readObj({
      required: {
        "Entities": [toICD10CMEntity],
      },
      optional: {
        "PaginationToken": "s",
        "ModelVersion": "s",
      },
    }, await resp.json());
  }

  async inferRxNorm(
    {abortSignal, ...params}: RequestConfig & s.InferRxNormRequest,
  ): Promise<s.InferRxNormResponse> {
    const body: jsonP.JSONObject = {
      Text: params["Text"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "InferRxNorm",
    });
    return jsonP.readObj({
      required: {
        "Entities": [toRxNormEntity],
      },
      optional: {
        "PaginationToken": "s",
        "ModelVersion": "s",
      },
    }, await resp.json());
  }

  async listEntitiesDetectionV2Jobs(
    {abortSignal, ...params}: RequestConfig & s.ListEntitiesDetectionV2JobsRequest = {},
  ): Promise<s.ListEntitiesDetectionV2JobsResponse> {
    const body: jsonP.JSONObject = {
      Filter: fromComprehendMedicalAsyncJobFilter(params["Filter"]),
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListEntitiesDetectionV2Jobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobPropertiesList": [toComprehendMedicalAsyncJobProperties],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listICD10CMInferenceJobs(
    {abortSignal, ...params}: RequestConfig & s.ListICD10CMInferenceJobsRequest = {},
  ): Promise<s.ListICD10CMInferenceJobsResponse> {
    const body: jsonP.JSONObject = {
      Filter: fromComprehendMedicalAsyncJobFilter(params["Filter"]),
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListICD10CMInferenceJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobPropertiesList": [toComprehendMedicalAsyncJobProperties],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listPHIDetectionJobs(
    {abortSignal, ...params}: RequestConfig & s.ListPHIDetectionJobsRequest = {},
  ): Promise<s.ListPHIDetectionJobsResponse> {
    const body: jsonP.JSONObject = {
      Filter: fromComprehendMedicalAsyncJobFilter(params["Filter"]),
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListPHIDetectionJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobPropertiesList": [toComprehendMedicalAsyncJobProperties],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRxNormInferenceJobs(
    {abortSignal, ...params}: RequestConfig & s.ListRxNormInferenceJobsRequest = {},
  ): Promise<s.ListRxNormInferenceJobsResponse> {
    const body: jsonP.JSONObject = {
      Filter: fromComprehendMedicalAsyncJobFilter(params["Filter"]),
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListRxNormInferenceJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ComprehendMedicalAsyncJobPropertiesList": [toComprehendMedicalAsyncJobProperties],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async startEntitiesDetectionV2Job(
    {abortSignal, ...params}: RequestConfig & s.StartEntitiesDetectionV2JobRequest,
  ): Promise<s.StartEntitiesDetectionV2JobResponse> {
    const body: jsonP.JSONObject = {
      InputDataConfig: fromInputDataConfig(params["InputDataConfig"]),
      OutputDataConfig: fromOutputDataConfig(params["OutputDataConfig"]),
      DataAccessRoleArn: params["DataAccessRoleArn"],
      JobName: params["JobName"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      KMSKey: params["KMSKey"],
      LanguageCode: params["LanguageCode"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartEntitiesDetectionV2Job",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async startICD10CMInferenceJob(
    {abortSignal, ...params}: RequestConfig & s.StartICD10CMInferenceJobRequest,
  ): Promise<s.StartICD10CMInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      InputDataConfig: fromInputDataConfig(params["InputDataConfig"]),
      OutputDataConfig: fromOutputDataConfig(params["OutputDataConfig"]),
      DataAccessRoleArn: params["DataAccessRoleArn"],
      JobName: params["JobName"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      KMSKey: params["KMSKey"],
      LanguageCode: params["LanguageCode"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartICD10CMInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async startPHIDetectionJob(
    {abortSignal, ...params}: RequestConfig & s.StartPHIDetectionJobRequest,
  ): Promise<s.StartPHIDetectionJobResponse> {
    const body: jsonP.JSONObject = {
      InputDataConfig: fromInputDataConfig(params["InputDataConfig"]),
      OutputDataConfig: fromOutputDataConfig(params["OutputDataConfig"]),
      DataAccessRoleArn: params["DataAccessRoleArn"],
      JobName: params["JobName"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      KMSKey: params["KMSKey"],
      LanguageCode: params["LanguageCode"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartPHIDetectionJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async startRxNormInferenceJob(
    {abortSignal, ...params}: RequestConfig & s.StartRxNormInferenceJobRequest,
  ): Promise<s.StartRxNormInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      InputDataConfig: fromInputDataConfig(params["InputDataConfig"]),
      OutputDataConfig: fromOutputDataConfig(params["OutputDataConfig"]),
      DataAccessRoleArn: params["DataAccessRoleArn"],
      JobName: params["JobName"],
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      KMSKey: params["KMSKey"],
      LanguageCode: params["LanguageCode"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartRxNormInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async stopEntitiesDetectionV2Job(
    {abortSignal, ...params}: RequestConfig & s.StopEntitiesDetectionV2JobRequest,
  ): Promise<s.StopEntitiesDetectionV2JobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopEntitiesDetectionV2Job",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async stopICD10CMInferenceJob(
    {abortSignal, ...params}: RequestConfig & s.StopICD10CMInferenceJobRequest,
  ): Promise<s.StopICD10CMInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopICD10CMInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async stopPHIDetectionJob(
    {abortSignal, ...params}: RequestConfig & s.StopPHIDetectionJobRequest,
  ): Promise<s.StopPHIDetectionJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopPHIDetectionJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async stopRxNormInferenceJob(
    {abortSignal, ...params}: RequestConfig & s.StopRxNormInferenceJobRequest,
  ): Promise<s.StopRxNormInferenceJobResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopRxNormInferenceJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

}

function fromComprehendMedicalAsyncJobFilter(input?: s.ComprehendMedicalAsyncJobFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    JobName: input["JobName"],
    JobStatus: input["JobStatus"],
    SubmitTimeBefore: jsonP.serializeDate_unixTimestamp(input["SubmitTimeBefore"]),
    SubmitTimeAfter: jsonP.serializeDate_unixTimestamp(input["SubmitTimeAfter"]),
  }
}

function fromInputDataConfig(input?: s.InputDataConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3Bucket: input["S3Bucket"],
    S3Key: input["S3Key"],
  }
}
function toInputDataConfig(root: jsonP.JSONValue): s.InputDataConfig {
  return jsonP.readObj({
    required: {
      "S3Bucket": "s",
    },
    optional: {
      "S3Key": "s",
    },
  }, root);
}

function fromOutputDataConfig(input?: s.OutputDataConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3Bucket: input["S3Bucket"],
    S3Key: input["S3Key"],
  }
}
function toOutputDataConfig(root: jsonP.JSONValue): s.OutputDataConfig {
  return jsonP.readObj({
    required: {
      "S3Bucket": "s",
    },
    optional: {
      "S3Key": "s",
    },
  }, root);
}

function toComprehendMedicalAsyncJobProperties(root: jsonP.JSONValue): s.ComprehendMedicalAsyncJobProperties {
  return jsonP.readObj({
    required: {},
    optional: {
      "JobId": "s",
      "JobName": "s",
      "JobStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.JobStatus>(x),
      "Message": "s",
      "SubmitTime": "d",
      "EndTime": "d",
      "ExpirationTime": "d",
      "InputDataConfig": toInputDataConfig,
      "OutputDataConfig": toOutputDataConfig,
      "LanguageCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.LanguageCode>(x),
      "DataAccessRoleArn": "s",
      "ManifestFilePath": "s",
      "KMSKey": "s",
      "ModelVersion": "s",
    },
  }, root);
}

function toEntity(root: jsonP.JSONValue): s.Entity {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Score": "n",
      "Text": "s",
      "Category": (x: jsonP.JSONValue) => cmnP.readEnum<s.EntityType>(x),
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.EntitySubType>(x),
      "Traits": [toTrait],
      "Attributes": [toAttribute],
    },
  }, root);
}

function toTrait(root: jsonP.JSONValue): s.Trait {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": (x: jsonP.JSONValue) => cmnP.readEnum<s.AttributeName>(x),
      "Score": "n",
    },
  }, root);
}

function toAttribute(root: jsonP.JSONValue): s.Attribute {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.EntitySubType>(x),
      "Score": "n",
      "RelationshipScore": "n",
      "RelationshipType": (x: jsonP.JSONValue) => cmnP.readEnum<s.RelationshipType>(x),
      "Id": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Text": "s",
      "Category": (x: jsonP.JSONValue) => cmnP.readEnum<s.EntityType>(x),
      "Traits": [toTrait],
    },
  }, root);
}

function toUnmappedAttribute(root: jsonP.JSONValue): s.UnmappedAttribute {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.EntityType>(x),
      "Attribute": toAttribute,
    },
  }, root);
}

function toICD10CMEntity(root: jsonP.JSONValue): s.ICD10CMEntity {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "n",
      "Text": "s",
      "Category": (x: jsonP.JSONValue) => cmnP.readEnum<s.ICD10CMEntityCategory>(x),
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.ICD10CMEntityType>(x),
      "Score": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Attributes": [toICD10CMAttribute],
      "Traits": [toICD10CMTrait],
      "ICD10CMConcepts": [toICD10CMConcept],
    },
  }, root);
}

function toICD10CMAttribute(root: jsonP.JSONValue): s.ICD10CMAttribute {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.ICD10CMAttributeType>(x),
      "Score": "n",
      "RelationshipScore": "n",
      "Id": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Text": "s",
      "Traits": [toICD10CMTrait],
    },
  }, root);
}

function toICD10CMTrait(root: jsonP.JSONValue): s.ICD10CMTrait {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": (x: jsonP.JSONValue) => cmnP.readEnum<s.ICD10CMTraitName>(x),
      "Score": "n",
    },
  }, root);
}

function toICD10CMConcept(root: jsonP.JSONValue): s.ICD10CMConcept {
  return jsonP.readObj({
    required: {},
    optional: {
      "Description": "s",
      "Code": "s",
      "Score": "n",
    },
  }, root);
}

function toRxNormEntity(root: jsonP.JSONValue): s.RxNormEntity {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "n",
      "Text": "s",
      "Category": (x: jsonP.JSONValue) => cmnP.readEnum<s.RxNormEntityCategory>(x),
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.RxNormEntityType>(x),
      "Score": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Attributes": [toRxNormAttribute],
      "Traits": [toRxNormTrait],
      "RxNormConcepts": [toRxNormConcept],
    },
  }, root);
}

function toRxNormAttribute(root: jsonP.JSONValue): s.RxNormAttribute {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.RxNormAttributeType>(x),
      "Score": "n",
      "RelationshipScore": "n",
      "Id": "n",
      "BeginOffset": "n",
      "EndOffset": "n",
      "Text": "s",
      "Traits": [toRxNormTrait],
    },
  }, root);
}

function toRxNormTrait(root: jsonP.JSONValue): s.RxNormTrait {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": (x: jsonP.JSONValue) => cmnP.readEnum<s.RxNormTraitName>(x),
      "Score": "n",
    },
  }, root);
}

function toRxNormConcept(root: jsonP.JSONValue): s.RxNormConcept {
  return jsonP.readObj({
    required: {},
    optional: {
      "Description": "s",
      "Code": "s",
      "Score": "n",
    },
  }, root);
}

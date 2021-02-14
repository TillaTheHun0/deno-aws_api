// Autogenerated API client for: Amazon Forecast Service

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class ForecastService {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ForecastService.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-06-26",
    "endpointPrefix": "forecast",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon Forecast Service",
    "serviceId": "forecast",
    "signatureVersion": "v4",
    "signingName": "forecast",
    "targetPrefix": "AmazonForecast",
    "uid": "forecast-2018-06-26"
  };

  async createDataset(
    {abortSignal, ...params}: RequestConfig & s.CreateDatasetRequest,
  ): Promise<s.CreateDatasetResponse> {
    const body: jsonP.JSONObject = {
      DatasetName: params["DatasetName"],
      Domain: params["Domain"],
      DatasetType: params["DatasetType"],
      DataFrequency: params["DataFrequency"],
      Schema: fromSchema(params["Schema"]),
      EncryptionConfig: fromEncryptionConfig(params["EncryptionConfig"]),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateDataset",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetArn": "s",
      },
    }, await resp.json());
  }

  async createDatasetGroup(
    {abortSignal, ...params}: RequestConfig & s.CreateDatasetGroupRequest,
  ): Promise<s.CreateDatasetGroupResponse> {
    const body: jsonP.JSONObject = {
      DatasetGroupName: params["DatasetGroupName"],
      Domain: params["Domain"],
      DatasetArns: params["DatasetArns"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateDatasetGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetGroupArn": "s",
      },
    }, await resp.json());
  }

  async createDatasetImportJob(
    {abortSignal, ...params}: RequestConfig & s.CreateDatasetImportJobRequest,
  ): Promise<s.CreateDatasetImportJobResponse> {
    const body: jsonP.JSONObject = {
      DatasetImportJobName: params["DatasetImportJobName"],
      DatasetArn: params["DatasetArn"],
      DataSource: fromDataSource(params["DataSource"]),
      TimestampFormat: params["TimestampFormat"],
      TimeZone: params["TimeZone"],
      UseGeolocationForTimeZone: params["UseGeolocationForTimeZone"],
      GeolocationFormat: params["GeolocationFormat"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateDatasetImportJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetImportJobArn": "s",
      },
    }, await resp.json());
  }

  async createForecast(
    {abortSignal, ...params}: RequestConfig & s.CreateForecastRequest,
  ): Promise<s.CreateForecastResponse> {
    const body: jsonP.JSONObject = {
      ForecastName: params["ForecastName"],
      PredictorArn: params["PredictorArn"],
      ForecastTypes: params["ForecastTypes"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateForecast",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ForecastArn": "s",
      },
    }, await resp.json());
  }

  async createForecastExportJob(
    {abortSignal, ...params}: RequestConfig & s.CreateForecastExportJobRequest,
  ): Promise<s.CreateForecastExportJobResponse> {
    const body: jsonP.JSONObject = {
      ForecastExportJobName: params["ForecastExportJobName"],
      ForecastArn: params["ForecastArn"],
      Destination: fromDataDestination(params["Destination"]),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateForecastExportJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ForecastExportJobArn": "s",
      },
    }, await resp.json());
  }

  async createPredictor(
    {abortSignal, ...params}: RequestConfig & s.CreatePredictorRequest,
  ): Promise<s.CreatePredictorResponse> {
    const body: jsonP.JSONObject = {
      PredictorName: params["PredictorName"],
      AlgorithmArn: params["AlgorithmArn"],
      ForecastHorizon: params["ForecastHorizon"],
      ForecastTypes: params["ForecastTypes"],
      PerformAutoML: params["PerformAutoML"],
      PerformHPO: params["PerformHPO"],
      TrainingParameters: params["TrainingParameters"],
      EvaluationParameters: fromEvaluationParameters(params["EvaluationParameters"]),
      HPOConfig: fromHyperParameterTuningJobConfig(params["HPOConfig"]),
      InputDataConfig: fromInputDataConfig(params["InputDataConfig"]),
      FeaturizationConfig: fromFeaturizationConfig(params["FeaturizationConfig"]),
      EncryptionConfig: fromEncryptionConfig(params["EncryptionConfig"]),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreatePredictor",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PredictorArn": "s",
      },
    }, await resp.json());
  }

  async createPredictorBacktestExportJob(
    {abortSignal, ...params}: RequestConfig & s.CreatePredictorBacktestExportJobRequest,
  ): Promise<s.CreatePredictorBacktestExportJobResponse> {
    const body: jsonP.JSONObject = {
      PredictorBacktestExportJobName: params["PredictorBacktestExportJobName"],
      PredictorArn: params["PredictorArn"],
      Destination: fromDataDestination(params["Destination"]),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreatePredictorBacktestExportJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PredictorBacktestExportJobArn": "s",
      },
    }, await resp.json());
  }

  async deleteDataset(
    {abortSignal, ...params}: RequestConfig & s.DeleteDatasetRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      DatasetArn: params["DatasetArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteDataset",
    });
  }

  async deleteDatasetGroup(
    {abortSignal, ...params}: RequestConfig & s.DeleteDatasetGroupRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      DatasetGroupArn: params["DatasetGroupArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteDatasetGroup",
    });
  }

  async deleteDatasetImportJob(
    {abortSignal, ...params}: RequestConfig & s.DeleteDatasetImportJobRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      DatasetImportJobArn: params["DatasetImportJobArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteDatasetImportJob",
    });
  }

  async deleteForecast(
    {abortSignal, ...params}: RequestConfig & s.DeleteForecastRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ForecastArn: params["ForecastArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteForecast",
    });
  }

  async deleteForecastExportJob(
    {abortSignal, ...params}: RequestConfig & s.DeleteForecastExportJobRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      ForecastExportJobArn: params["ForecastExportJobArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteForecastExportJob",
    });
  }

  async deletePredictor(
    {abortSignal, ...params}: RequestConfig & s.DeletePredictorRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      PredictorArn: params["PredictorArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeletePredictor",
    });
  }

  async deletePredictorBacktestExportJob(
    {abortSignal, ...params}: RequestConfig & s.DeletePredictorBacktestExportJobRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      PredictorBacktestExportJobArn: params["PredictorBacktestExportJobArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeletePredictorBacktestExportJob",
    });
  }

  async describeDataset(
    {abortSignal, ...params}: RequestConfig & s.DescribeDatasetRequest,
  ): Promise<s.DescribeDatasetResponse> {
    const body: jsonP.JSONObject = {
      DatasetArn: params["DatasetArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeDataset",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetArn": "s",
        "DatasetName": "s",
        "Domain": (x: jsonP.JSONValue) => cmnP.readEnum<s.Domain>(x),
        "DatasetType": (x: jsonP.JSONValue) => cmnP.readEnum<s.DatasetType>(x),
        "DataFrequency": "s",
        "Schema": toSchema,
        "EncryptionConfig": toEncryptionConfig,
        "Status": "s",
        "CreationTime": "d",
        "LastModificationTime": "d",
      },
    }, await resp.json());
  }

  async describeDatasetGroup(
    {abortSignal, ...params}: RequestConfig & s.DescribeDatasetGroupRequest,
  ): Promise<s.DescribeDatasetGroupResponse> {
    const body: jsonP.JSONObject = {
      DatasetGroupArn: params["DatasetGroupArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeDatasetGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetGroupName": "s",
        "DatasetGroupArn": "s",
        "DatasetArns": ["s"],
        "Domain": (x: jsonP.JSONValue) => cmnP.readEnum<s.Domain>(x),
        "Status": "s",
        "CreationTime": "d",
        "LastModificationTime": "d",
      },
    }, await resp.json());
  }

  async describeDatasetImportJob(
    {abortSignal, ...params}: RequestConfig & s.DescribeDatasetImportJobRequest,
  ): Promise<s.DescribeDatasetImportJobResponse> {
    const body: jsonP.JSONObject = {
      DatasetImportJobArn: params["DatasetImportJobArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeDatasetImportJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetImportJobName": "s",
        "DatasetImportJobArn": "s",
        "DatasetArn": "s",
        "TimestampFormat": "s",
        "TimeZone": "s",
        "UseGeolocationForTimeZone": "b",
        "GeolocationFormat": "s",
        "DataSource": toDataSource,
        "FieldStatistics": x => jsonP.readMap(String, toStatistics, x),
        "DataSize": "n",
        "Status": "s",
        "Message": "s",
        "CreationTime": "d",
        "LastModificationTime": "d",
      },
    }, await resp.json());
  }

  async describeForecast(
    {abortSignal, ...params}: RequestConfig & s.DescribeForecastRequest,
  ): Promise<s.DescribeForecastResponse> {
    const body: jsonP.JSONObject = {
      ForecastArn: params["ForecastArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeForecast",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ForecastArn": "s",
        "ForecastName": "s",
        "ForecastTypes": ["s"],
        "PredictorArn": "s",
        "DatasetGroupArn": "s",
        "Status": "s",
        "Message": "s",
        "CreationTime": "d",
        "LastModificationTime": "d",
      },
    }, await resp.json());
  }

  async describeForecastExportJob(
    {abortSignal, ...params}: RequestConfig & s.DescribeForecastExportJobRequest,
  ): Promise<s.DescribeForecastExportJobResponse> {
    const body: jsonP.JSONObject = {
      ForecastExportJobArn: params["ForecastExportJobArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeForecastExportJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ForecastExportJobArn": "s",
        "ForecastExportJobName": "s",
        "ForecastArn": "s",
        "Destination": toDataDestination,
        "Message": "s",
        "Status": "s",
        "CreationTime": "d",
        "LastModificationTime": "d",
      },
    }, await resp.json());
  }

  async describePredictor(
    {abortSignal, ...params}: RequestConfig & s.DescribePredictorRequest,
  ): Promise<s.DescribePredictorResponse> {
    const body: jsonP.JSONObject = {
      PredictorArn: params["PredictorArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribePredictor",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PredictorArn": "s",
        "PredictorName": "s",
        "AlgorithmArn": "s",
        "ForecastHorizon": "n",
        "ForecastTypes": ["s"],
        "PerformAutoML": "b",
        "PerformHPO": "b",
        "TrainingParameters": x => jsonP.readMap(String, String, x),
        "EvaluationParameters": toEvaluationParameters,
        "HPOConfig": toHyperParameterTuningJobConfig,
        "InputDataConfig": toInputDataConfig,
        "FeaturizationConfig": toFeaturizationConfig,
        "EncryptionConfig": toEncryptionConfig,
        "PredictorExecutionDetails": toPredictorExecutionDetails,
        "DatasetImportJobArns": ["s"],
        "AutoMLAlgorithmArns": ["s"],
        "Status": "s",
        "Message": "s",
        "CreationTime": "d",
        "LastModificationTime": "d",
      },
    }, await resp.json());
  }

  async describePredictorBacktestExportJob(
    {abortSignal, ...params}: RequestConfig & s.DescribePredictorBacktestExportJobRequest,
  ): Promise<s.DescribePredictorBacktestExportJobResponse> {
    const body: jsonP.JSONObject = {
      PredictorBacktestExportJobArn: params["PredictorBacktestExportJobArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribePredictorBacktestExportJob",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PredictorBacktestExportJobArn": "s",
        "PredictorBacktestExportJobName": "s",
        "PredictorArn": "s",
        "Destination": toDataDestination,
        "Message": "s",
        "Status": "s",
        "CreationTime": "d",
        "LastModificationTime": "d",
      },
    }, await resp.json());
  }

  async getAccuracyMetrics(
    {abortSignal, ...params}: RequestConfig & s.GetAccuracyMetricsRequest,
  ): Promise<s.GetAccuracyMetricsResponse> {
    const body: jsonP.JSONObject = {
      PredictorArn: params["PredictorArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetAccuracyMetrics",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PredictorEvaluationResults": [toEvaluationResult],
      },
    }, await resp.json());
  }

  async listDatasetGroups(
    {abortSignal, ...params}: RequestConfig & s.ListDatasetGroupsRequest = {},
  ): Promise<s.ListDatasetGroupsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListDatasetGroups",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetGroups": [toDatasetGroupSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listDatasetImportJobs(
    {abortSignal, ...params}: RequestConfig & s.ListDatasetImportJobsRequest = {},
  ): Promise<s.ListDatasetImportJobsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListDatasetImportJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DatasetImportJobs": [toDatasetImportJobSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listDatasets(
    {abortSignal, ...params}: RequestConfig & s.ListDatasetsRequest = {},
  ): Promise<s.ListDatasetsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListDatasets",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Datasets": [toDatasetSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listForecastExportJobs(
    {abortSignal, ...params}: RequestConfig & s.ListForecastExportJobsRequest = {},
  ): Promise<s.ListForecastExportJobsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListForecastExportJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ForecastExportJobs": [toForecastExportJobSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listForecasts(
    {abortSignal, ...params}: RequestConfig & s.ListForecastsRequest = {},
  ): Promise<s.ListForecastsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListForecasts",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Forecasts": [toForecastSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listPredictorBacktestExportJobs(
    {abortSignal, ...params}: RequestConfig & s.ListPredictorBacktestExportJobsRequest = {},
  ): Promise<s.ListPredictorBacktestExportJobsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListPredictorBacktestExportJobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PredictorBacktestExportJobs": [toPredictorBacktestExportJobSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listPredictors(
    {abortSignal, ...params}: RequestConfig & s.ListPredictorsRequest = {},
  ): Promise<s.ListPredictorsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListPredictors",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Predictors": [toPredictorSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
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

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
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
      ResourceArn: params["ResourceArn"],
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

  async updateDatasetGroup(
    {abortSignal, ...params}: RequestConfig & s.UpdateDatasetGroupRequest,
  ): Promise<s.UpdateDatasetGroupResponse> {
    const body: jsonP.JSONObject = {
      DatasetGroupArn: params["DatasetGroupArn"],
      DatasetArns: params["DatasetArns"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateDatasetGroup",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

function fromSchema(input?: s.Schema | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Attributes: input["Attributes"]?.map(x => fromSchemaAttribute(x)),
  }
}
function toSchema(root: jsonP.JSONValue): s.Schema {
  return jsonP.readObj({
    required: {},
    optional: {
      "Attributes": [toSchemaAttribute],
    },
  }, root);
}

function fromSchemaAttribute(input?: s.SchemaAttribute | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    AttributeName: input["AttributeName"],
    AttributeType: input["AttributeType"],
  }
}
function toSchemaAttribute(root: jsonP.JSONValue): s.SchemaAttribute {
  return jsonP.readObj({
    required: {},
    optional: {
      "AttributeName": "s",
      "AttributeType": (x: jsonP.JSONValue) => cmnP.readEnum<s.AttributeType>(x),
    },
  }, root);
}

function fromEncryptionConfig(input?: s.EncryptionConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    RoleArn: input["RoleArn"],
    KMSKeyArn: input["KMSKeyArn"],
  }
}
function toEncryptionConfig(root: jsonP.JSONValue): s.EncryptionConfig {
  return jsonP.readObj({
    required: {
      "RoleArn": "s",
      "KMSKeyArn": "s",
    },
    optional: {},
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

function fromDataSource(input?: s.DataSource | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3Config: fromS3Config(input["S3Config"]),
  }
}
function toDataSource(root: jsonP.JSONValue): s.DataSource {
  return jsonP.readObj({
    required: {
      "S3Config": toS3Config,
    },
    optional: {},
  }, root);
}

function fromS3Config(input?: s.S3Config | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Path: input["Path"],
    RoleArn: input["RoleArn"],
    KMSKeyArn: input["KMSKeyArn"],
  }
}
function toS3Config(root: jsonP.JSONValue): s.S3Config {
  return jsonP.readObj({
    required: {
      "Path": "s",
      "RoleArn": "s",
    },
    optional: {
      "KMSKeyArn": "s",
    },
  }, root);
}

function fromDataDestination(input?: s.DataDestination | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3Config: fromS3Config(input["S3Config"]),
  }
}
function toDataDestination(root: jsonP.JSONValue): s.DataDestination {
  return jsonP.readObj({
    required: {
      "S3Config": toS3Config,
    },
    optional: {},
  }, root);
}

function fromEvaluationParameters(input?: s.EvaluationParameters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    NumberOfBacktestWindows: input["NumberOfBacktestWindows"],
    BackTestWindowOffset: input["BackTestWindowOffset"],
  }
}
function toEvaluationParameters(root: jsonP.JSONValue): s.EvaluationParameters {
  return jsonP.readObj({
    required: {},
    optional: {
      "NumberOfBacktestWindows": "n",
      "BackTestWindowOffset": "n",
    },
  }, root);
}

function fromHyperParameterTuningJobConfig(input?: s.HyperParameterTuningJobConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ParameterRanges: fromParameterRanges(input["ParameterRanges"]),
  }
}
function toHyperParameterTuningJobConfig(root: jsonP.JSONValue): s.HyperParameterTuningJobConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "ParameterRanges": toParameterRanges,
    },
  }, root);
}

function fromParameterRanges(input?: s.ParameterRanges | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CategoricalParameterRanges: input["CategoricalParameterRanges"]?.map(x => fromCategoricalParameterRange(x)),
    ContinuousParameterRanges: input["ContinuousParameterRanges"]?.map(x => fromContinuousParameterRange(x)),
    IntegerParameterRanges: input["IntegerParameterRanges"]?.map(x => fromIntegerParameterRange(x)),
  }
}
function toParameterRanges(root: jsonP.JSONValue): s.ParameterRanges {
  return jsonP.readObj({
    required: {},
    optional: {
      "CategoricalParameterRanges": [toCategoricalParameterRange],
      "ContinuousParameterRanges": [toContinuousParameterRange],
      "IntegerParameterRanges": [toIntegerParameterRange],
    },
  }, root);
}

function fromCategoricalParameterRange(input?: s.CategoricalParameterRange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Values: input["Values"],
  }
}
function toCategoricalParameterRange(root: jsonP.JSONValue): s.CategoricalParameterRange {
  return jsonP.readObj({
    required: {
      "Name": "s",
      "Values": ["s"],
    },
    optional: {},
  }, root);
}

function fromContinuousParameterRange(input?: s.ContinuousParameterRange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    MaxValue: input["MaxValue"],
    MinValue: input["MinValue"],
    ScalingType: input["ScalingType"],
  }
}
function toContinuousParameterRange(root: jsonP.JSONValue): s.ContinuousParameterRange {
  return jsonP.readObj({
    required: {
      "Name": "s",
      "MaxValue": "n",
      "MinValue": "n",
    },
    optional: {
      "ScalingType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScalingType>(x),
    },
  }, root);
}

function fromIntegerParameterRange(input?: s.IntegerParameterRange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    MaxValue: input["MaxValue"],
    MinValue: input["MinValue"],
    ScalingType: input["ScalingType"],
  }
}
function toIntegerParameterRange(root: jsonP.JSONValue): s.IntegerParameterRange {
  return jsonP.readObj({
    required: {
      "Name": "s",
      "MaxValue": "n",
      "MinValue": "n",
    },
    optional: {
      "ScalingType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScalingType>(x),
    },
  }, root);
}

function fromInputDataConfig(input?: s.InputDataConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    DatasetGroupArn: input["DatasetGroupArn"],
    SupplementaryFeatures: input["SupplementaryFeatures"]?.map(x => fromSupplementaryFeature(x)),
  }
}
function toInputDataConfig(root: jsonP.JSONValue): s.InputDataConfig {
  return jsonP.readObj({
    required: {
      "DatasetGroupArn": "s",
    },
    optional: {
      "SupplementaryFeatures": [toSupplementaryFeature],
    },
  }, root);
}

function fromSupplementaryFeature(input?: s.SupplementaryFeature | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Value: input["Value"],
  }
}
function toSupplementaryFeature(root: jsonP.JSONValue): s.SupplementaryFeature {
  return jsonP.readObj({
    required: {
      "Name": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

function fromFeaturizationConfig(input?: s.FeaturizationConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ForecastFrequency: input["ForecastFrequency"],
    ForecastDimensions: input["ForecastDimensions"],
    Featurizations: input["Featurizations"]?.map(x => fromFeaturization(x)),
  }
}
function toFeaturizationConfig(root: jsonP.JSONValue): s.FeaturizationConfig {
  return jsonP.readObj({
    required: {
      "ForecastFrequency": "s",
    },
    optional: {
      "ForecastDimensions": ["s"],
      "Featurizations": [toFeaturization],
    },
  }, root);
}

function fromFeaturization(input?: s.Featurization | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    AttributeName: input["AttributeName"],
    FeaturizationPipeline: input["FeaturizationPipeline"]?.map(x => fromFeaturizationMethod(x)),
  }
}
function toFeaturization(root: jsonP.JSONValue): s.Featurization {
  return jsonP.readObj({
    required: {
      "AttributeName": "s",
    },
    optional: {
      "FeaturizationPipeline": [toFeaturizationMethod],
    },
  }, root);
}

function fromFeaturizationMethod(input?: s.FeaturizationMethod | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    FeaturizationMethodName: input["FeaturizationMethodName"],
    FeaturizationMethodParameters: input["FeaturizationMethodParameters"],
  }
}
function toFeaturizationMethod(root: jsonP.JSONValue): s.FeaturizationMethod {
  return jsonP.readObj({
    required: {
      "FeaturizationMethodName": (x: jsonP.JSONValue) => cmnP.readEnum<s.FeaturizationMethodName>(x),
    },
    optional: {
      "FeaturizationMethodParameters": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

function fromFilter(input?: s.Filter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
    Condition: input["Condition"],
  }
}

function toStatistics(root: jsonP.JSONValue): s.Statistics {
  return jsonP.readObj({
    required: {},
    optional: {
      "Count": "n",
      "CountDistinct": "n",
      "CountNull": "n",
      "CountNan": "n",
      "Min": "s",
      "Max": "s",
      "Avg": "n",
      "Stddev": "n",
    },
  }, root);
}

function toPredictorExecutionDetails(root: jsonP.JSONValue): s.PredictorExecutionDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "PredictorExecutions": [toPredictorExecution],
    },
  }, root);
}

function toPredictorExecution(root: jsonP.JSONValue): s.PredictorExecution {
  return jsonP.readObj({
    required: {},
    optional: {
      "AlgorithmArn": "s",
      "TestWindows": [toTestWindowSummary],
    },
  }, root);
}

function toTestWindowSummary(root: jsonP.JSONValue): s.TestWindowSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "TestWindowStart": "d",
      "TestWindowEnd": "d",
      "Status": "s",
      "Message": "s",
    },
  }, root);
}

function toEvaluationResult(root: jsonP.JSONValue): s.EvaluationResult {
  return jsonP.readObj({
    required: {},
    optional: {
      "AlgorithmArn": "s",
      "TestWindows": [toWindowSummary],
    },
  }, root);
}

function toWindowSummary(root: jsonP.JSONValue): s.WindowSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "TestWindowStart": "d",
      "TestWindowEnd": "d",
      "ItemCount": "n",
      "EvaluationType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EvaluationType>(x),
      "Metrics": toMetrics,
    },
  }, root);
}

function toMetrics(root: jsonP.JSONValue): s.Metrics {
  return jsonP.readObj({
    required: {},
    optional: {
      "RMSE": "n",
      "WeightedQuantileLosses": [toWeightedQuantileLoss],
      "ErrorMetrics": [toErrorMetric],
    },
  }, root);
}

function toWeightedQuantileLoss(root: jsonP.JSONValue): s.WeightedQuantileLoss {
  return jsonP.readObj({
    required: {},
    optional: {
      "Quantile": "n",
      "LossValue": "n",
    },
  }, root);
}

function toErrorMetric(root: jsonP.JSONValue): s.ErrorMetric {
  return jsonP.readObj({
    required: {},
    optional: {
      "ForecastType": "s",
      "WAPE": "n",
      "RMSE": "n",
    },
  }, root);
}

function toDatasetGroupSummary(root: jsonP.JSONValue): s.DatasetGroupSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "DatasetGroupArn": "s",
      "DatasetGroupName": "s",
      "CreationTime": "d",
      "LastModificationTime": "d",
    },
  }, root);
}

function toDatasetImportJobSummary(root: jsonP.JSONValue): s.DatasetImportJobSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "DatasetImportJobArn": "s",
      "DatasetImportJobName": "s",
      "DataSource": toDataSource,
      "Status": "s",
      "Message": "s",
      "CreationTime": "d",
      "LastModificationTime": "d",
    },
  }, root);
}

function toDatasetSummary(root: jsonP.JSONValue): s.DatasetSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "DatasetArn": "s",
      "DatasetName": "s",
      "DatasetType": (x: jsonP.JSONValue) => cmnP.readEnum<s.DatasetType>(x),
      "Domain": (x: jsonP.JSONValue) => cmnP.readEnum<s.Domain>(x),
      "CreationTime": "d",
      "LastModificationTime": "d",
    },
  }, root);
}

function toForecastExportJobSummary(root: jsonP.JSONValue): s.ForecastExportJobSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "ForecastExportJobArn": "s",
      "ForecastExportJobName": "s",
      "Destination": toDataDestination,
      "Status": "s",
      "Message": "s",
      "CreationTime": "d",
      "LastModificationTime": "d",
    },
  }, root);
}

function toForecastSummary(root: jsonP.JSONValue): s.ForecastSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "ForecastArn": "s",
      "ForecastName": "s",
      "PredictorArn": "s",
      "DatasetGroupArn": "s",
      "Status": "s",
      "Message": "s",
      "CreationTime": "d",
      "LastModificationTime": "d",
    },
  }, root);
}

function toPredictorBacktestExportJobSummary(root: jsonP.JSONValue): s.PredictorBacktestExportJobSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "PredictorBacktestExportJobArn": "s",
      "PredictorBacktestExportJobName": "s",
      "Destination": toDataDestination,
      "Status": "s",
      "Message": "s",
      "CreationTime": "d",
      "LastModificationTime": "d",
    },
  }, root);
}

function toPredictorSummary(root: jsonP.JSONValue): s.PredictorSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "PredictorArn": "s",
      "PredictorName": "s",
      "DatasetGroupArn": "s",
      "Status": "s",
      "Message": "s",
      "CreationTime": "d",
      "LastModificationTime": "d",
    },
  }, root);
}

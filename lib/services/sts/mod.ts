// Autogenerated API client for: AWS Security Token Service

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as qsP from "../../encoding/querystring.ts";
import * as xmlP from "../../encoding/xml.ts";
import type * as s from "./structs.ts";

export class STS {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(STS.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2011-06-15",
    "endpointPrefix": "sts",
    "globalEndpoint": "sts.amazonaws.com",
    "protocol": "query",
    "serviceAbbreviation": "AWS STS",
    "serviceFullName": "AWS Security Token Service",
    "serviceId": "STS",
    "signatureVersion": "v4",
    "uid": "sts-2011-06-15",
    "xmlNamespace": "https://sts.amazonaws.com/doc/2011-06-15/"
  };

  async assumeRole(
    params: s.AssumeRoleRequest,
  ): Promise<s.AssumeRoleResponse> {
    const body = new URLSearchParams;
    const prefix = '';
    body.append(prefix+"RoleArn", (params["RoleArn"] ?? '').toString());
    body.append(prefix+"RoleSessionName", (params["RoleSessionName"] ?? '').toString());
    if (params["PolicyArns"]) qsP.appendList(body, prefix+"PolicyArns", params["PolicyArns"], {"appender":PolicyDescriptorType_Serialize,"entryPrefix":".member."})
    if ("Policy" in params) body.append(prefix+"Policy", (params["Policy"] ?? '').toString());
    if ("DurationSeconds" in params) body.append(prefix+"DurationSeconds", (params["DurationSeconds"] ?? '').toString());
    if (params["Tags"]) qsP.appendList(body, prefix+"Tags", params["Tags"], {"appender":Tag_Serialize,"entryPrefix":".member."})
    if (params["TransitiveTagKeys"]) qsP.appendList(body, prefix+"TransitiveTagKeys", params["TransitiveTagKeys"], {"entryPrefix":".member."})
    if ("ExternalId" in params) body.append(prefix+"ExternalId", (params["ExternalId"] ?? '').toString());
    if ("SerialNumber" in params) body.append(prefix+"SerialNumber", (params["SerialNumber"] ?? '').toString());
    if ("TokenCode" in params) body.append(prefix+"TokenCode", (params["TokenCode"] ?? '').toString());
    const resp = await this.#client.performRequest({
      body,
      action: "AssumeRole",
    });
    const xml = xmlP.readXmlResult(await resp.text(), "AssumeRoleResult");
    return {
      Credentials: xml.first("Credentials", false, Credentials_Parse),
      AssumedRoleUser: xml.first("AssumedRoleUser", false, AssumedRoleUser_Parse),
      PackedPolicySize: xml.first("PackedPolicySize", false, x => parseInt(x.content ?? '0')),
    };
  }

  async assumeRoleWithSAML(
    params: s.AssumeRoleWithSAMLRequest,
  ): Promise<s.AssumeRoleWithSAMLResponse> {
    const body = new URLSearchParams;
    const prefix = '';
    body.append(prefix+"RoleArn", (params["RoleArn"] ?? '').toString());
    body.append(prefix+"PrincipalArn", (params["PrincipalArn"] ?? '').toString());
    body.append(prefix+"SAMLAssertion", (params["SAMLAssertion"] ?? '').toString());
    if (params["PolicyArns"]) qsP.appendList(body, prefix+"PolicyArns", params["PolicyArns"], {"appender":PolicyDescriptorType_Serialize,"entryPrefix":".member."})
    if ("Policy" in params) body.append(prefix+"Policy", (params["Policy"] ?? '').toString());
    if ("DurationSeconds" in params) body.append(prefix+"DurationSeconds", (params["DurationSeconds"] ?? '').toString());
    const resp = await this.#client.performRequest({
      skipSigning: true,
      body,
      action: "AssumeRoleWithSAML",
    });
    const xml = xmlP.readXmlResult(await resp.text(), "AssumeRoleWithSAMLResult");
    return {
      ...xml.strings({
        optional: {"Subject":true,"SubjectType":true,"Issuer":true,"Audience":true,"NameQualifier":true},
      }),
      Credentials: xml.first("Credentials", false, Credentials_Parse),
      AssumedRoleUser: xml.first("AssumedRoleUser", false, AssumedRoleUser_Parse),
      PackedPolicySize: xml.first("PackedPolicySize", false, x => parseInt(x.content ?? '0')),
    };
  }

  async assumeRoleWithWebIdentity(
    params: s.AssumeRoleWithWebIdentityRequest,
  ): Promise<s.AssumeRoleWithWebIdentityResponse> {
    const body = new URLSearchParams;
    const prefix = '';
    body.append(prefix+"RoleArn", (params["RoleArn"] ?? '').toString());
    body.append(prefix+"RoleSessionName", (params["RoleSessionName"] ?? '').toString());
    body.append(prefix+"WebIdentityToken", (params["WebIdentityToken"] ?? '').toString());
    if ("ProviderId" in params) body.append(prefix+"ProviderId", (params["ProviderId"] ?? '').toString());
    if (params["PolicyArns"]) qsP.appendList(body, prefix+"PolicyArns", params["PolicyArns"], {"appender":PolicyDescriptorType_Serialize,"entryPrefix":".member."})
    if ("Policy" in params) body.append(prefix+"Policy", (params["Policy"] ?? '').toString());
    if ("DurationSeconds" in params) body.append(prefix+"DurationSeconds", (params["DurationSeconds"] ?? '').toString());
    const resp = await this.#client.performRequest({
      skipSigning: true,
      body,
      action: "AssumeRoleWithWebIdentity",
    });
    const xml = xmlP.readXmlResult(await resp.text(), "AssumeRoleWithWebIdentityResult");
    return {
      ...xml.strings({
        optional: {"SubjectFromWebIdentityToken":true,"Provider":true,"Audience":true},
      }),
      Credentials: xml.first("Credentials", false, Credentials_Parse),
      AssumedRoleUser: xml.first("AssumedRoleUser", false, AssumedRoleUser_Parse),
      PackedPolicySize: xml.first("PackedPolicySize", false, x => parseInt(x.content ?? '0')),
    };
  }

  async decodeAuthorizationMessage(
    params: s.DecodeAuthorizationMessageRequest,
  ): Promise<s.DecodeAuthorizationMessageResponse> {
    const body = new URLSearchParams;
    const prefix = '';
    body.append(prefix+"EncodedMessage", (params["EncodedMessage"] ?? '').toString());
    const resp = await this.#client.performRequest({
      body,
      action: "DecodeAuthorizationMessage",
    });
    const xml = xmlP.readXmlResult(await resp.text(), "DecodeAuthorizationMessageResult");
    return xml.strings({
      optional: {"DecodedMessage":true},
    });
  }

  async getAccessKeyInfo(
    params: s.GetAccessKeyInfoRequest,
  ): Promise<s.GetAccessKeyInfoResponse> {
    const body = new URLSearchParams;
    const prefix = '';
    body.append(prefix+"AccessKeyId", (params["AccessKeyId"] ?? '').toString());
    const resp = await this.#client.performRequest({
      body,
      action: "GetAccessKeyInfo",
    });
    const xml = xmlP.readXmlResult(await resp.text(), "GetAccessKeyInfoResult");
    return xml.strings({
      optional: {"Account":true},
    });
  }

  async getCallerIdentity(): Promise<s.GetCallerIdentityResponse> {
    const body = new URLSearchParams;
    const resp = await this.#client.performRequest({
      body,
      action: "GetCallerIdentity",
    });
    const xml = xmlP.readXmlResult(await resp.text(), "GetCallerIdentityResult");
    return xml.strings({
      optional: {"UserId":true,"Account":true,"Arn":true},
    });
  }

  async getFederationToken(
    params: s.GetFederationTokenRequest,
  ): Promise<s.GetFederationTokenResponse> {
    const body = new URLSearchParams;
    const prefix = '';
    body.append(prefix+"Name", (params["Name"] ?? '').toString());
    if ("Policy" in params) body.append(prefix+"Policy", (params["Policy"] ?? '').toString());
    if (params["PolicyArns"]) qsP.appendList(body, prefix+"PolicyArns", params["PolicyArns"], {"appender":PolicyDescriptorType_Serialize,"entryPrefix":".member."})
    if ("DurationSeconds" in params) body.append(prefix+"DurationSeconds", (params["DurationSeconds"] ?? '').toString());
    if (params["Tags"]) qsP.appendList(body, prefix+"Tags", params["Tags"], {"appender":Tag_Serialize,"entryPrefix":".member."})
    const resp = await this.#client.performRequest({
      body,
      action: "GetFederationToken",
    });
    const xml = xmlP.readXmlResult(await resp.text(), "GetFederationTokenResult");
    return {
      Credentials: xml.first("Credentials", false, Credentials_Parse),
      FederatedUser: xml.first("FederatedUser", false, FederatedUser_Parse),
      PackedPolicySize: xml.first("PackedPolicySize", false, x => parseInt(x.content ?? '0')),
    };
  }

  async getSessionToken(
    params: s.GetSessionTokenRequest = {},
  ): Promise<s.GetSessionTokenResponse> {
    const body = new URLSearchParams;
    const prefix = '';
    if ("DurationSeconds" in params) body.append(prefix+"DurationSeconds", (params["DurationSeconds"] ?? '').toString());
    if ("SerialNumber" in params) body.append(prefix+"SerialNumber", (params["SerialNumber"] ?? '').toString());
    if ("TokenCode" in params) body.append(prefix+"TokenCode", (params["TokenCode"] ?? '').toString());
    const resp = await this.#client.performRequest({
      body,
      action: "GetSessionToken",
    });
    const xml = xmlP.readXmlResult(await resp.text(), "GetSessionTokenResult");
    return {
      Credentials: xml.first("Credentials", false, Credentials_Parse),
    };
  }

}

function PolicyDescriptorType_Serialize(body: URLSearchParams, prefix: string, params: s.PolicyDescriptorType) {
  if ("arn" in params) body.append(prefix+".arn", (params["arn"] ?? '').toString());
}

function Tag_Serialize(body: URLSearchParams, prefix: string, params: s.Tag) {
  body.append(prefix+".Key", (params["Key"] ?? '').toString());
  body.append(prefix+".Value", (params["Value"] ?? '').toString());
}

function Credentials_Parse(node: xmlP.XmlNode): s.Credentials {
  return {
    ...node.strings({
      required: {"AccessKeyId":true,"SecretAccessKey":true,"SessionToken":true},
    }),
    Expiration: node.first("Expiration", true, x => xmlP.parseTimestamp(x.content)),
  };
}

function AssumedRoleUser_Parse(node: xmlP.XmlNode): s.AssumedRoleUser {
  return node.strings({
    required: {"AssumedRoleId":true,"Arn":true},
  });
}

function FederatedUser_Parse(node: xmlP.XmlNode): s.FederatedUser {
  return node.strings({
    required: {"FederatedUserId":true,"Arn":true},
  });
}

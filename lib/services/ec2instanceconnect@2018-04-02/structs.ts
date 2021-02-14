// Autogenerated API structures for: AWS EC2 Instance Connect

// refs: 1 - tags: named, input
export interface SendSSHPublicKeyRequest {
  InstanceId: string;
  InstanceOSUser: string;
  SSHPublicKey: string;
  AvailabilityZone: string;
}

// refs: 1 - tags: named, output
export interface SendSSHPublicKeyResponse {
  RequestId?: string | null;
  Success?: boolean | null;
}

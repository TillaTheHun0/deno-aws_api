// Autogenerated API structures for: Amazon Relational Database Service

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AddSourceIdentifierToSubscriptionMessage {
  SubscriptionName: string;
  SourceIdentifier: string;
}

// refs: 1 - tags: named, input
export interface AddTagsToResourceMessage {
  ResourceName: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface AuthorizeDBSecurityGroupIngressMessage {
  DBSecurityGroupName: string;
  CIDRIP?: string | null;
  EC2SecurityGroupName?: string | null;
  EC2SecurityGroupId?: string | null;
  EC2SecurityGroupOwnerId?: string | null;
}

// refs: 1 - tags: named, input
export interface CopyDBSnapshotMessage {
  SourceDBSnapshotIdentifier: string;
  TargetDBSnapshotIdentifier: string;
}

// refs: 1 - tags: named, input
export interface CreateDBInstanceMessage {
  DBName?: string | null;
  DBInstanceIdentifier: string;
  AllocatedStorage: number;
  DBInstanceClass: string;
  Engine: string;
  MasterUsername: string;
  MasterUserPassword: string;
  DBSecurityGroups?: string[] | null;
  VpcSecurityGroupIds?: string[] | null;
  AvailabilityZone?: string | null;
  DBSubnetGroupName?: string | null;
  PreferredMaintenanceWindow?: string | null;
  DBParameterGroupName?: string | null;
  BackupRetentionPeriod?: number | null;
  PreferredBackupWindow?: string | null;
  Port?: number | null;
  MultiAZ?: boolean | null;
  EngineVersion?: string | null;
  AutoMinorVersionUpgrade?: boolean | null;
  LicenseModel?: string | null;
  Iops?: number | null;
  OptionGroupName?: string | null;
  CharacterSetName?: string | null;
  PubliclyAccessible?: boolean | null;
}

// refs: 1 - tags: named, input
export interface CreateDBInstanceReadReplicaMessage {
  DBInstanceIdentifier: string;
  SourceDBInstanceIdentifier: string;
  DBInstanceClass?: string | null;
  AvailabilityZone?: string | null;
  Port?: number | null;
  AutoMinorVersionUpgrade?: boolean | null;
  Iops?: number | null;
  OptionGroupName?: string | null;
  PubliclyAccessible?: boolean | null;
}

// refs: 1 - tags: named, input
export interface CreateDBParameterGroupMessage {
  DBParameterGroupName: string;
  DBParameterGroupFamily: string;
  Description: string;
}

// refs: 1 - tags: named, input
export interface CreateDBSecurityGroupMessage {
  DBSecurityGroupName: string;
  DBSecurityGroupDescription: string;
}

// refs: 1 - tags: named, input
export interface CreateDBSnapshotMessage {
  DBSnapshotIdentifier: string;
  DBInstanceIdentifier: string;
}

// refs: 1 - tags: named, input
export interface CreateDBSubnetGroupMessage {
  DBSubnetGroupName: string;
  DBSubnetGroupDescription: string;
  SubnetIds: string[];
}

// refs: 1 - tags: named, input
export interface CreateEventSubscriptionMessage {
  SubscriptionName: string;
  SnsTopicArn: string;
  SourceType?: string | null;
  EventCategories?: string[] | null;
  SourceIds?: string[] | null;
  Enabled?: boolean | null;
}

// refs: 1 - tags: named, input
export interface CreateOptionGroupMessage {
  OptionGroupName: string;
  EngineName: string;
  MajorEngineVersion: string;
  OptionGroupDescription: string;
}

// refs: 1 - tags: named, input
export interface DeleteDBInstanceMessage {
  DBInstanceIdentifier: string;
  SkipFinalSnapshot?: boolean | null;
  FinalDBSnapshotIdentifier?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteDBParameterGroupMessage {
  DBParameterGroupName: string;
}

// refs: 1 - tags: named, input
export interface DeleteDBSecurityGroupMessage {
  DBSecurityGroupName: string;
}

// refs: 1 - tags: named, input
export interface DeleteDBSnapshotMessage {
  DBSnapshotIdentifier: string;
}

// refs: 1 - tags: named, input
export interface DeleteDBSubnetGroupMessage {
  DBSubnetGroupName: string;
}

// refs: 1 - tags: named, input
export interface DeleteEventSubscriptionMessage {
  SubscriptionName: string;
}

// refs: 1 - tags: named, input
export interface DeleteOptionGroupMessage {
  OptionGroupName: string;
}

// refs: 1 - tags: named, input
export interface DescribeDBEngineVersionsMessage {
  Engine?: string | null;
  EngineVersion?: string | null;
  DBParameterGroupFamily?: string | null;
  MaxRecords?: number | null;
  Marker?: string | null;
  DefaultOnly?: boolean | null;
  ListSupportedCharacterSets?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeDBInstancesMessage {
  DBInstanceIdentifier?: string | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDBLogFilesMessage {
  DBInstanceIdentifier: string;
  FilenameContains?: string | null;
  FileLastWritten?: number | null;
  FileSize?: number | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDBParameterGroupsMessage {
  DBParameterGroupName?: string | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDBParametersMessage {
  DBParameterGroupName: string;
  Source?: string | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDBSecurityGroupsMessage {
  DBSecurityGroupName?: string | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDBSnapshotsMessage {
  DBInstanceIdentifier?: string | null;
  DBSnapshotIdentifier?: string | null;
  SnapshotType?: string | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDBSubnetGroupsMessage {
  DBSubnetGroupName?: string | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeEngineDefaultParametersMessage {
  DBParameterGroupFamily: string;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventCategoriesMessage {
  SourceType?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventSubscriptionsMessage {
  SubscriptionName?: string | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventsMessage {
  SourceIdentifier?: string | null;
  SourceType?: SourceType | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  Duration?: number | null;
  EventCategories?: string[] | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeOptionGroupOptionsMessage {
  EngineName: string;
  MajorEngineVersion?: string | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeOptionGroupsMessage {
  OptionGroupName?: string | null;
  Marker?: string | null;
  MaxRecords?: number | null;
  EngineName?: string | null;
  MajorEngineVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeOrderableDBInstanceOptionsMessage {
  Engine: string;
  EngineVersion?: string | null;
  DBInstanceClass?: string | null;
  LicenseModel?: string | null;
  Vpc?: boolean | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeReservedDBInstancesMessage {
  ReservedDBInstanceId?: string | null;
  ReservedDBInstancesOfferingId?: string | null;
  DBInstanceClass?: string | null;
  Duration?: string | null;
  ProductDescription?: string | null;
  OfferingType?: string | null;
  MultiAZ?: boolean | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeReservedDBInstancesOfferingsMessage {
  ReservedDBInstancesOfferingId?: string | null;
  DBInstanceClass?: string | null;
  Duration?: string | null;
  ProductDescription?: string | null;
  OfferingType?: string | null;
  MultiAZ?: boolean | null;
  MaxRecords?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DownloadDBLogFilePortionMessage {
  DBInstanceIdentifier: string;
  LogFileName: string;
  Marker?: string | null;
  NumberOfLines?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceMessage {
  ResourceName: string;
}

// refs: 1 - tags: named, input
export interface ModifyDBInstanceMessage {
  DBInstanceIdentifier: string;
  AllocatedStorage?: number | null;
  DBInstanceClass?: string | null;
  DBSecurityGroups?: string[] | null;
  VpcSecurityGroupIds?: string[] | null;
  ApplyImmediately?: boolean | null;
  MasterUserPassword?: string | null;
  DBParameterGroupName?: string | null;
  BackupRetentionPeriod?: number | null;
  PreferredBackupWindow?: string | null;
  PreferredMaintenanceWindow?: string | null;
  MultiAZ?: boolean | null;
  EngineVersion?: string | null;
  AllowMajorVersionUpgrade?: boolean | null;
  AutoMinorVersionUpgrade?: boolean | null;
  Iops?: number | null;
  OptionGroupName?: string | null;
  NewDBInstanceIdentifier?: string | null;
}

// refs: 1 - tags: named, input
export interface ModifyDBParameterGroupMessage {
  DBParameterGroupName: string;
  Parameters: Parameter[];
}

// refs: 1 - tags: named, input
export interface ModifyDBSubnetGroupMessage {
  DBSubnetGroupName: string;
  DBSubnetGroupDescription?: string | null;
  SubnetIds: string[];
}

// refs: 1 - tags: named, input
export interface ModifyEventSubscriptionMessage {
  SubscriptionName: string;
  SnsTopicArn?: string | null;
  SourceType?: string | null;
  EventCategories?: string[] | null;
  Enabled?: boolean | null;
}

// refs: 1 - tags: named, input
export interface ModifyOptionGroupMessage {
  OptionGroupName: string;
  OptionsToInclude?: OptionConfiguration[] | null;
  OptionsToRemove?: string[] | null;
  ApplyImmediately?: boolean | null;
}

// refs: 1 - tags: named, input
export interface PromoteReadReplicaMessage {
  DBInstanceIdentifier: string;
  BackupRetentionPeriod?: number | null;
  PreferredBackupWindow?: string | null;
}

// refs: 1 - tags: named, input
export interface PurchaseReservedDBInstancesOfferingMessage {
  ReservedDBInstancesOfferingId: string;
  ReservedDBInstanceId?: string | null;
  DBInstanceCount?: number | null;
}

// refs: 1 - tags: named, input
export interface RebootDBInstanceMessage {
  DBInstanceIdentifier: string;
  ForceFailover?: boolean | null;
}

// refs: 1 - tags: named, input
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  SubscriptionName: string;
  SourceIdentifier: string;
}

// refs: 1 - tags: named, input
export interface RemoveTagsFromResourceMessage {
  ResourceName: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface ResetDBParameterGroupMessage {
  DBParameterGroupName: string;
  ResetAllParameters?: boolean | null;
  Parameters?: Parameter[] | null;
}

// refs: 1 - tags: named, input
export interface RestoreDBInstanceFromDBSnapshotMessage {
  DBInstanceIdentifier: string;
  DBSnapshotIdentifier: string;
  DBInstanceClass?: string | null;
  Port?: number | null;
  AvailabilityZone?: string | null;
  DBSubnetGroupName?: string | null;
  MultiAZ?: boolean | null;
  PubliclyAccessible?: boolean | null;
  AutoMinorVersionUpgrade?: boolean | null;
  LicenseModel?: string | null;
  DBName?: string | null;
  Engine?: string | null;
  Iops?: number | null;
  OptionGroupName?: string | null;
}

// refs: 1 - tags: named, input
export interface RestoreDBInstanceToPointInTimeMessage {
  SourceDBInstanceIdentifier: string;
  TargetDBInstanceIdentifier: string;
  RestoreTime?: Date | number | null;
  UseLatestRestorableTime?: boolean | null;
  DBInstanceClass?: string | null;
  Port?: number | null;
  AvailabilityZone?: string | null;
  DBSubnetGroupName?: string | null;
  MultiAZ?: boolean | null;
  PubliclyAccessible?: boolean | null;
  AutoMinorVersionUpgrade?: boolean | null;
  LicenseModel?: string | null;
  DBName?: string | null;
  Engine?: string | null;
  Iops?: number | null;
  OptionGroupName?: string | null;
}

// refs: 1 - tags: named, input
export interface RevokeDBSecurityGroupIngressMessage {
  DBSecurityGroupName: string;
  CIDRIP?: string | null;
  EC2SecurityGroupName?: string | null;
  EC2SecurityGroupId?: string | null;
  EC2SecurityGroupOwnerId?: string | null;
}

// refs: 1 - tags: named, output
export interface AddSourceIdentifierToSubscriptionResult {
  EventSubscription?: EventSubscription | null;
}

// refs: 1 - tags: named, output
export interface AuthorizeDBSecurityGroupIngressResult {
  DBSecurityGroup?: DBSecurityGroup | null;
}

// refs: 1 - tags: named, output
export interface CopyDBSnapshotResult {
  DBSnapshot?: DBSnapshot | null;
}

// refs: 1 - tags: named, output
export interface CreateDBInstanceResult {
  DBInstance?: DBInstance | null;
}

// refs: 1 - tags: named, output
export interface CreateDBInstanceReadReplicaResult {
  DBInstance?: DBInstance | null;
}

// refs: 1 - tags: named, output
export interface CreateDBParameterGroupResult {
  DBParameterGroup?: DBParameterGroup | null;
}

// refs: 1 - tags: named, output
export interface CreateDBSecurityGroupResult {
  DBSecurityGroup?: DBSecurityGroup | null;
}

// refs: 1 - tags: named, output
export interface CreateDBSnapshotResult {
  DBSnapshot?: DBSnapshot | null;
}

// refs: 1 - tags: named, output
export interface CreateDBSubnetGroupResult {
  DBSubnetGroup?: DBSubnetGroup | null;
}

// refs: 1 - tags: named, output
export interface CreateEventSubscriptionResult {
  EventSubscription?: EventSubscription | null;
}

// refs: 1 - tags: named, output
export interface CreateOptionGroupResult {
  OptionGroup?: OptionGroup | null;
}

// refs: 1 - tags: named, output
export interface DeleteDBInstanceResult {
  DBInstance?: DBInstance | null;
}

// refs: 1 - tags: named, output
export interface DeleteDBSnapshotResult {
  DBSnapshot?: DBSnapshot | null;
}

// refs: 1 - tags: named, output
export interface DeleteEventSubscriptionResult {
  EventSubscription?: EventSubscription | null;
}

// refs: 1 - tags: named, output
export interface DBEngineVersionMessage {
  Marker?: string | null;
  DBEngineVersions: DBEngineVersion[];
}

// refs: 1 - tags: named, output
export interface DBInstanceMessage {
  Marker?: string | null;
  DBInstances: DBInstance[];
}

// refs: 1 - tags: named, output
export interface DescribeDBLogFilesResponse {
  DescribeDBLogFiles: DescribeDBLogFilesDetails[];
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface DBParameterGroupsMessage {
  Marker?: string | null;
  DBParameterGroups: DBParameterGroup[];
}

// refs: 1 - tags: named, output
export interface DBParameterGroupDetails {
  Parameters: Parameter[];
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface DBSecurityGroupMessage {
  Marker?: string | null;
  DBSecurityGroups: DBSecurityGroup[];
}

// refs: 1 - tags: named, output
export interface DBSnapshotMessage {
  Marker?: string | null;
  DBSnapshots: DBSnapshot[];
}

// refs: 1 - tags: named, output
export interface DBSubnetGroupMessage {
  Marker?: string | null;
  DBSubnetGroups: DBSubnetGroup[];
}

// refs: 1 - tags: named, output
export interface DescribeEngineDefaultParametersResult {
  EngineDefaults?: EngineDefaults | null;
}

// refs: 1 - tags: named, output
export interface EventCategoriesMessage {
  EventCategoriesMapList: EventCategoriesMap[];
}

// refs: 1 - tags: named, output
export interface EventSubscriptionsMessage {
  Marker?: string | null;
  EventSubscriptionsList: EventSubscription[];
}

// refs: 1 - tags: named, output
export interface EventsMessage {
  Marker?: string | null;
  Events: Event[];
}

// refs: 1 - tags: named, output
export interface OptionGroupOptionsMessage {
  OptionGroupOptions: OptionGroupOption[];
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface OptionGroups {
  OptionGroupsList: OptionGroup[];
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface OrderableDBInstanceOptionsMessage {
  OrderableDBInstanceOptions: OrderableDBInstanceOption[];
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface ReservedDBInstanceMessage {
  Marker?: string | null;
  ReservedDBInstances: ReservedDBInstance[];
}

// refs: 1 - tags: named, output
export interface ReservedDBInstancesOfferingMessage {
  Marker?: string | null;
  ReservedDBInstancesOfferings: ReservedDBInstancesOffering[];
}

// refs: 1 - tags: named, output
export interface DownloadDBLogFilePortionDetails {
  LogFileData?: string | null;
  Marker?: string | null;
  AdditionalDataPending?: boolean | null;
}

// refs: 1 - tags: named, output
export interface TagListMessage {
  TagList: Tag[];
}

// refs: 1 - tags: named, output
export interface ModifyDBInstanceResult {
  DBInstance?: DBInstance | null;
}

// refs: 1 - tags: named, output
export interface DBParameterGroupNameMessage {
  DBParameterGroupName?: string | null;
}

// refs: 1 - tags: named, output
export interface ModifyDBSubnetGroupResult {
  DBSubnetGroup?: DBSubnetGroup | null;
}

// refs: 1 - tags: named, output
export interface ModifyEventSubscriptionResult {
  EventSubscription?: EventSubscription | null;
}

// refs: 1 - tags: named, output
export interface ModifyOptionGroupResult {
  OptionGroup?: OptionGroup | null;
}

// refs: 1 - tags: named, output
export interface PromoteReadReplicaResult {
  DBInstance?: DBInstance | null;
}

// refs: 1 - tags: named, output
export interface PurchaseReservedDBInstancesOfferingResult {
  ReservedDBInstance?: ReservedDBInstance | null;
}

// refs: 1 - tags: named, output
export interface RebootDBInstanceResult {
  DBInstance?: DBInstance | null;
}

// refs: 1 - tags: named, output
export interface RemoveSourceIdentifierFromSubscriptionResult {
  EventSubscription?: EventSubscription | null;
}

// refs: 1 - tags: named, output
export interface RestoreDBInstanceFromDBSnapshotResult {
  DBInstance?: DBInstance | null;
}

// refs: 1 - tags: named, output
export interface RestoreDBInstanceToPointInTimeResult {
  DBInstance?: DBInstance | null;
}

// refs: 1 - tags: named, output
export interface RevokeDBSecurityGroupIngressResult {
  DBSecurityGroup?: DBSecurityGroup | null;
}

// refs: 2 - tags: input, named, interface, output
export interface Tag {
  Key?: string | null;
  Value?: string | null;
}

// refs: 2 - tags: input, named, enum, output
export type SourceType =
| "db-instance"
| "db-parameter-group"
| "db-security-group"
| "db-snapshot"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface Parameter {
  ParameterName?: string | null;
  ParameterValue?: string | null;
  Description?: string | null;
  Source?: string | null;
  ApplyType?: string | null;
  DataType?: string | null;
  AllowedValues?: string | null;
  IsModifiable?: boolean | null;
  MinimumEngineVersion?: string | null;
  ApplyMethod?: ApplyMethod | null;
}

// refs: 4 - tags: input, named, enum, output
export type ApplyMethod =
| "immediate"
| "pending-reboot"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface OptionConfiguration {
  OptionName: string;
  Port?: number | null;
  DBSecurityGroupMemberships?: string[] | null;
  VpcSecurityGroupMemberships?: string[] | null;
  OptionSettings?: OptionSetting[] | null;
}

// refs: 4 - tags: input, named, interface, output
export interface OptionSetting {
  Name?: string | null;
  Value?: string | null;
  DefaultValue?: string | null;
  Description?: string | null;
  ApplyType?: string | null;
  DataType?: string | null;
  AllowedValues?: string | null;
  IsModifiable?: boolean | null;
  IsCollection?: boolean | null;
}

// refs: 6 - tags: output, named, interface
export interface EventSubscription {
  CustomerAwsId?: string | null;
  CustSubscriptionId?: string | null;
  SnsTopicArn?: string | null;
  Status?: string | null;
  SubscriptionCreationTime?: string | null;
  SourceType?: string | null;
  SourceIdsList: string[];
  EventCategoriesList: string[];
  Enabled?: boolean | null;
}

// refs: 4 - tags: output, named, interface
export interface DBSecurityGroup {
  OwnerId?: string | null;
  DBSecurityGroupName?: string | null;
  DBSecurityGroupDescription?: string | null;
  VpcId?: string | null;
  EC2SecurityGroups: EC2SecurityGroup[];
  IPRanges: IPRange[];
}

// refs: 4 - tags: output, named, interface
export interface EC2SecurityGroup {
  Status?: string | null;
  EC2SecurityGroupName?: string | null;
  EC2SecurityGroupId?: string | null;
  EC2SecurityGroupOwnerId?: string | null;
}

// refs: 4 - tags: output, named, interface
export interface IPRange {
  Status?: string | null;
  CIDRIP?: string | null;
}

// refs: 4 - tags: output, named, interface
export interface DBSnapshot {
  DBSnapshotIdentifier?: string | null;
  DBInstanceIdentifier?: string | null;
  SnapshotCreateTime?: Date | number | null;
  Engine?: string | null;
  AllocatedStorage?: number | null;
  Status?: string | null;
  Port?: number | null;
  AvailabilityZone?: string | null;
  VpcId?: string | null;
  InstanceCreateTime?: Date | number | null;
  MasterUsername?: string | null;
  EngineVersion?: string | null;
  LicenseModel?: string | null;
  SnapshotType?: string | null;
  Iops?: number | null;
  OptionGroupName?: string | null;
}

// refs: 9 - tags: output, named, interface
export interface DBInstance {
  DBInstanceIdentifier?: string | null;
  DBInstanceClass?: string | null;
  Engine?: string | null;
  DBInstanceStatus?: string | null;
  MasterUsername?: string | null;
  DBName?: string | null;
  Endpoint?: Endpoint | null;
  AllocatedStorage?: number | null;
  InstanceCreateTime?: Date | number | null;
  PreferredBackupWindow?: string | null;
  BackupRetentionPeriod?: number | null;
  DBSecurityGroups: DBSecurityGroupMembership[];
  VpcSecurityGroups: VpcSecurityGroupMembership[];
  DBParameterGroups: DBParameterGroupStatus[];
  AvailabilityZone?: string | null;
  DBSubnetGroup?: DBSubnetGroup | null;
  PreferredMaintenanceWindow?: string | null;
  PendingModifiedValues?: PendingModifiedValues | null;
  LatestRestorableTime?: Date | number | null;
  MultiAZ?: boolean | null;
  EngineVersion?: string | null;
  AutoMinorVersionUpgrade?: boolean | null;
  ReadReplicaSourceDBInstanceIdentifier?: string | null;
  ReadReplicaDBInstanceIdentifiers: string[];
  LicenseModel?: string | null;
  Iops?: number | null;
  OptionGroupMemberships: OptionGroupMembership[];
  CharacterSetName?: string | null;
  SecondaryAvailabilityZone?: string | null;
  PubliclyAccessible?: boolean | null;
}

// refs: 9 - tags: output, named, interface
export interface Endpoint {
  Address?: string | null;
  Port?: number | null;
}

// refs: 12 - tags: output, named, interface
export interface DBSecurityGroupMembership {
  DBSecurityGroupName?: string | null;
  Status?: string | null;
}

// refs: 12 - tags: output, named, interface
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string | null;
  Status?: string | null;
}

// refs: 9 - tags: output, named, interface
export interface DBParameterGroupStatus {
  DBParameterGroupName?: string | null;
  ParameterApplyStatus?: string | null;
}

// refs: 12 - tags: output, named, interface
export interface DBSubnetGroup {
  DBSubnetGroupName?: string | null;
  DBSubnetGroupDescription?: string | null;
  VpcId?: string | null;
  SubnetGroupStatus?: string | null;
  Subnets: Subnet[];
}

// refs: 12 - tags: output, named, interface
export interface Subnet {
  SubnetIdentifier?: string | null;
  SubnetAvailabilityZone?: AvailabilityZone | null;
  SubnetStatus?: string | null;
}

// refs: 13 - tags: output, named, interface
export interface AvailabilityZone {
  Name?: string | null;
  ProvisionedIopsCapable?: boolean | null;
}

// refs: 9 - tags: output, named, interface
export interface PendingModifiedValues {
  DBInstanceClass?: string | null;
  AllocatedStorage?: number | null;
  MasterUserPassword?: string | null;
  Port?: number | null;
  BackupRetentionPeriod?: number | null;
  MultiAZ?: boolean | null;
  EngineVersion?: string | null;
  Iops?: number | null;
  DBInstanceIdentifier?: string | null;
}

// refs: 9 - tags: output, named, interface
export interface OptionGroupMembership {
  OptionGroupName?: string | null;
  Status?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface DBParameterGroup {
  DBParameterGroupName?: string | null;
  DBParameterGroupFamily?: string | null;
  Description?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface OptionGroup {
  OptionGroupName?: string | null;
  OptionGroupDescription?: string | null;
  EngineName?: string | null;
  MajorEngineVersion?: string | null;
  Options: Option[];
  AllowsVpcAndNonVpcInstanceMemberships?: boolean | null;
  VpcId?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface Option {
  OptionName?: string | null;
  OptionDescription?: string | null;
  Persistent?: boolean | null;
  Port?: number | null;
  OptionSettings: OptionSetting[];
  DBSecurityGroupMemberships: DBSecurityGroupMembership[];
  VpcSecurityGroupMemberships: VpcSecurityGroupMembership[];
}

// refs: 1 - tags: output, named, interface
export interface DBEngineVersion {
  Engine?: string | null;
  EngineVersion?: string | null;
  DBParameterGroupFamily?: string | null;
  DBEngineDescription?: string | null;
  DBEngineVersionDescription?: string | null;
  DefaultCharacterSet?: CharacterSet | null;
  SupportedCharacterSets: CharacterSet[];
}

// refs: 2 - tags: output, named, interface
export interface CharacterSet {
  CharacterSetName?: string | null;
  CharacterSetDescription?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface DescribeDBLogFilesDetails {
  LogFileName?: string | null;
  LastWritten?: number | null;
  Size?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface EngineDefaults {
  DBParameterGroupFamily?: string | null;
  Marker?: string | null;
  Parameters: Parameter[];
}

// refs: 1 - tags: output, named, interface
export interface EventCategoriesMap {
  SourceType?: string | null;
  EventCategories: string[];
}

// refs: 1 - tags: output, named, interface
export interface Event {
  SourceIdentifier?: string | null;
  SourceType?: SourceType | null;
  Message?: string | null;
  EventCategories: string[];
  Date?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface OptionGroupOption {
  Name?: string | null;
  Description?: string | null;
  EngineName?: string | null;
  MajorEngineVersion?: string | null;
  MinimumRequiredMinorEngineVersion?: string | null;
  PortRequired?: boolean | null;
  DefaultPort?: number | null;
  OptionsDependedOn: string[];
  Persistent?: boolean | null;
  OptionGroupOptionSettings: OptionGroupOptionSetting[];
}

// refs: 1 - tags: output, named, interface
export interface OptionGroupOptionSetting {
  SettingName?: string | null;
  SettingDescription?: string | null;
  DefaultValue?: string | null;
  ApplyType?: string | null;
  AllowedValues?: string | null;
  IsModifiable?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface OrderableDBInstanceOption {
  Engine?: string | null;
  EngineVersion?: string | null;
  DBInstanceClass?: string | null;
  LicenseModel?: string | null;
  AvailabilityZones: AvailabilityZone[];
  MultiAZCapable?: boolean | null;
  ReadReplicaCapable?: boolean | null;
  Vpc?: boolean | null;
}

// refs: 2 - tags: output, named, interface
export interface ReservedDBInstance {
  ReservedDBInstanceId?: string | null;
  ReservedDBInstancesOfferingId?: string | null;
  DBInstanceClass?: string | null;
  StartTime?: Date | number | null;
  Duration?: number | null;
  FixedPrice?: number | null;
  UsagePrice?: number | null;
  CurrencyCode?: string | null;
  DBInstanceCount?: number | null;
  ProductDescription?: string | null;
  OfferingType?: string | null;
  MultiAZ?: boolean | null;
  State?: string | null;
  RecurringCharges: RecurringCharge[];
}

// refs: 3 - tags: output, named, interface
export interface RecurringCharge {
  RecurringChargeAmount?: number | null;
  RecurringChargeFrequency?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ReservedDBInstancesOffering {
  ReservedDBInstancesOfferingId?: string | null;
  DBInstanceClass?: string | null;
  Duration?: number | null;
  FixedPrice?: number | null;
  UsagePrice?: number | null;
  CurrencyCode?: string | null;
  ProductDescription?: string | null;
  OfferingType?: string | null;
  MultiAZ?: boolean | null;
  RecurringCharges: RecurringCharge[];
}

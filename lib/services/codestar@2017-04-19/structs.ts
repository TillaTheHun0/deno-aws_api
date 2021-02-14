// Autogenerated API structures for: AWS CodeStar

// refs: 1 - tags: named, input
export interface AssociateTeamMemberRequest {
  projectId: string;
  clientRequestToken?: string | null;
  userArn: string;
  projectRole: string;
  remoteAccessAllowed?: boolean | null;
}

// refs: 1 - tags: named, input
export interface CreateProjectRequest {
  name: string;
  id: string;
  description?: string | null;
  clientRequestToken?: string | null;
  sourceCode?: Code[] | null;
  toolchain?: Toolchain | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateUserProfileRequest {
  userArn: string;
  displayName: string;
  emailAddress: string;
  sshPublicKey?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteProjectRequest {
  id: string;
  clientRequestToken?: string | null;
  deleteStack?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DeleteUserProfileRequest {
  userArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeProjectRequest {
  id: string;
}

// refs: 1 - tags: named, input
export interface DescribeUserProfileRequest {
  userArn: string;
}

// refs: 1 - tags: named, input
export interface DisassociateTeamMemberRequest {
  projectId: string;
  userArn: string;
}

// refs: 1 - tags: named, input
export interface ListProjectsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListResourcesRequest {
  projectId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForProjectRequest {
  id: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTeamMembersRequest {
  projectId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListUserProfilesRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface TagProjectRequest {
  id: string;
  tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UntagProjectRequest {
  id: string;
  tags: string[];
}

// refs: 1 - tags: named, input
export interface UpdateProjectRequest {
  id: string;
  name?: string | null;
  description?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateTeamMemberRequest {
  projectId: string;
  userArn: string;
  projectRole?: string | null;
  remoteAccessAllowed?: boolean | null;
}

// refs: 1 - tags: named, input
export interface UpdateUserProfileRequest {
  userArn: string;
  displayName?: string | null;
  emailAddress?: string | null;
  sshPublicKey?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateTeamMemberResult {
  clientRequestToken?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateProjectResult {
  id: string;
  arn: string;
  clientRequestToken?: string | null;
  projectTemplateId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateUserProfileResult {
  userArn: string;
  displayName?: string | null;
  emailAddress?: string | null;
  sshPublicKey?: string | null;
  createdTimestamp?: Date | number | null;
  lastModifiedTimestamp?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface DeleteProjectResult {
  stackId?: string | null;
  projectArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteUserProfileResult {
  userArn: string;
}

// refs: 1 - tags: named, output
export interface DescribeProjectResult {
  name?: string | null;
  id?: string | null;
  arn?: string | null;
  description?: string | null;
  clientRequestToken?: string | null;
  createdTimeStamp?: Date | number | null;
  stackId?: string | null;
  projectTemplateId?: string | null;
  status?: ProjectStatus | null;
}

// refs: 1 - tags: named, output
export interface DescribeUserProfileResult {
  userArn: string;
  displayName?: string | null;
  emailAddress?: string | null;
  sshPublicKey?: string | null;
  createdTimestamp: Date | number;
  lastModifiedTimestamp: Date | number;
}

// refs: 1 - tags: named, output
export interface DisassociateTeamMemberResult {
}

// refs: 1 - tags: named, output
export interface ListProjectsResult {
  projects: ProjectSummary[];
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListResourcesResult {
  resources?: Resource[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForProjectResult {
  tags?: { [key: string]: string | null | undefined } | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTeamMembersResult {
  teamMembers: TeamMember[];
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListUserProfilesResult {
  userProfiles: UserProfileSummary[];
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface TagProjectResult {
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface UntagProjectResult {
}

// refs: 1 - tags: named, output
export interface UpdateProjectResult {
}

// refs: 1 - tags: named, output
export interface UpdateTeamMemberResult {
  userArn?: string | null;
  projectRole?: string | null;
  remoteAccessAllowed?: boolean | null;
}

// refs: 1 - tags: named, output
export interface UpdateUserProfileResult {
  userArn: string;
  displayName?: string | null;
  emailAddress?: string | null;
  sshPublicKey?: string | null;
  createdTimestamp?: Date | number | null;
  lastModifiedTimestamp?: Date | number | null;
}

// refs: 1 - tags: input, named, interface
export interface Code {
  source: CodeSource;
  destination: CodeDestination;
}

// refs: 1 - tags: input, named, interface
export interface CodeSource {
  s3: S3Location;
}

// refs: 2 - tags: input, named, interface
export interface S3Location {
  bucketName?: string | null;
  bucketKey?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface CodeDestination {
  codeCommit?: CodeCommitCodeDestination | null;
  gitHub?: GitHubCodeDestination | null;
}

// refs: 1 - tags: input, named, interface
export interface CodeCommitCodeDestination {
  name: string;
}

// refs: 1 - tags: input, named, interface
export interface GitHubCodeDestination {
  name: string;
  description?: string | null;
  type: string;
  owner: string;
  privateRepository: boolean;
  issuesEnabled: boolean;
  token: string;
}

// refs: 1 - tags: input, named, interface
export interface Toolchain {
  source: ToolchainSource;
  roleArn?: string | null;
  stackParameters?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: input, named, interface
export interface ToolchainSource {
  s3: S3Location;
}

// refs: 1 - tags: output, named, interface
export interface ProjectStatus {
  state: string;
  reason?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ProjectSummary {
  projectId?: string | null;
  projectArn?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface Resource {
  id: string;
}

// refs: 1 - tags: output, named, interface
export interface TeamMember {
  userArn: string;
  projectRole: string;
  remoteAccessAllowed?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface UserProfileSummary {
  userArn?: string | null;
  displayName?: string | null;
  emailAddress?: string | null;
  sshPublicKey?: string | null;
}

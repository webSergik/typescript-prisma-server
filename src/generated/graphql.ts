import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
import { Context } from "../context";
export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Long: any;
};

export type AggregateUser = {
  __typename?: "AggregateUser";
  count: Scalars["Int"];
};

export type BatchPayload = {
  __typename?: "BatchPayload";
  count: Scalars["Long"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  token: Scalars["String"];
  user: User;
};

export type Mutation = {
  __typename?: "Mutation";
  login: LoginResponse;
  signup: LoginResponse;
  createUser: User;
  updateUser?: Maybe<User>;
  updateManyUsers: BatchPayload;
  upsertUser: User;
  deleteUser?: Maybe<User>;
  deleteManyUsers: BatchPayload;
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignupArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};

export enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED"
}

export type Node = {
  id: Scalars["ID"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  me?: Maybe<User>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  usersConnection: UserConnection;
  node?: Maybe<Node>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

export type Subscription = {
  __typename?: "Subscription";
  user?: Maybe<UserSubscriptionPayload>;
};

export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserConnection = {
  __typename?: "UserConnection";
  pageInfo: PageInfo;
  edges: Array<Maybe<UserEdge>>;
  aggregate: AggregateUser;
};

export type UserCreateInput = {
  id?: Maybe<Scalars["ID"]>;
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserEdge = {
  __typename?: "UserEdge";
  node: User;
  cursor: Scalars["String"];
};

export enum UserOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  PasswordAsc = "password_ASC",
  PasswordDesc = "password_DESC"
}

export type UserPreviousValues = {
  __typename?: "UserPreviousValues";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UserSubscriptionPayload = {
  __typename?: "UserSubscriptionPayload";
  mutation: MutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<UserPreviousValues>;
};

export type UserSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<Array<UserSubscriptionWhereInput>>;
  OR?: Maybe<Array<UserSubscriptionWhereInput>>;
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type UserWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  email_not?: Maybe<Scalars["String"]>;
  email_in?: Maybe<Array<Scalars["String"]>>;
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  email_lt?: Maybe<Scalars["String"]>;
  email_lte?: Maybe<Scalars["String"]>;
  email_gt?: Maybe<Scalars["String"]>;
  email_gte?: Maybe<Scalars["String"]>;
  email_contains?: Maybe<Scalars["String"]>;
  email_not_contains?: Maybe<Scalars["String"]>;
  email_starts_with?: Maybe<Scalars["String"]>;
  email_not_starts_with?: Maybe<Scalars["String"]>;
  email_ends_with?: Maybe<Scalars["String"]>;
  email_not_ends_with?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  password_not?: Maybe<Scalars["String"]>;
  password_in?: Maybe<Array<Scalars["String"]>>;
  password_not_in?: Maybe<Array<Scalars["String"]>>;
  password_lt?: Maybe<Scalars["String"]>;
  password_lte?: Maybe<Scalars["String"]>;
  password_gt?: Maybe<Scalars["String"]>;
  password_gte?: Maybe<Scalars["String"]>;
  password_contains?: Maybe<Scalars["String"]>;
  password_not_contains?: Maybe<Scalars["String"]>;
  password_starts_with?: Maybe<Scalars["String"]>;
  password_not_starts_with?: Maybe<Scalars["String"]>;
  password_ends_with?: Maybe<Scalars["String"]>;
  password_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
};

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: MaybePromise<{}>;
  User: MaybePromise<User>;
  ID: MaybePromise<Scalars["ID"]>;
  DateTime: MaybePromise<Scalars["DateTime"]>;
  String: MaybePromise<Scalars["String"]>;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UserWhereInput: UserWhereInput;
  UserOrderByInput: UserOrderByInput;
  Int: MaybePromise<Scalars["Int"]>;
  UserConnection: MaybePromise<UserConnection>;
  PageInfo: MaybePromise<PageInfo>;
  Boolean: MaybePromise<Scalars["Boolean"]>;
  UserEdge: MaybePromise<UserEdge>;
  AggregateUser: MaybePromise<AggregateUser>;
  Node: MaybePromise<Node>;
  Mutation: MaybePromise<{}>;
  LoginResponse: MaybePromise<LoginResponse>;
  UserCreateInput: UserCreateInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  BatchPayload: MaybePromise<BatchPayload>;
  Long: MaybePromise<Scalars["Long"]>;
  Subscription: MaybePromise<{}>;
  UserSubscriptionWhereInput: UserSubscriptionWhereInput;
  MutationType: MutationType;
  UserSubscriptionPayload: MaybePromise<UserSubscriptionPayload>;
  UserPreviousValues: MaybePromise<UserPreviousValues>;
};

export type AggregateUserResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["AggregateUser"]
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
};

export type BatchPayloadResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["BatchPayload"]
> = {
  count?: Resolver<ResolversTypes["Long"], ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type LoginResponseResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["LoginResponse"]
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
};

export interface LongScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Long"], any> {
  name: "Long";
}

export type MutationResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Mutation"]
> = {
  login?: Resolver<
    ResolversTypes["LoginResponse"],
    ParentType,
    ContextType,
    MutationLoginArgs
  >;
  signup?: Resolver<
    ResolversTypes["LoginResponse"],
    ParentType,
    ContextType,
    MutationSignupArgs
  >;
  createUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    MutationCreateUserArgs
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    MutationUpdateUserArgs
  >;
  updateManyUsers?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    MutationUpdateManyUsersArgs
  >;
  upsertUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    MutationUpsertUserArgs
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    MutationDeleteUserArgs
  >;
  deleteManyUsers?: Resolver<
    ResolversTypes["BatchPayload"],
    ParentType,
    ContextType,
    MutationDeleteManyUsersArgs
  >;
};

export type NodeResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Node"]
> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
};

export type PageInfoResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["PageInfo"]
> = {
  hasNextPage?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  endCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Query"]
> = {
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    QueryUserArgs
  >;
  users?: Resolver<
    Array<Maybe<ResolversTypes["User"]>>,
    ParentType,
    ContextType,
    QueryUsersArgs
  >;
  usersConnection?: Resolver<
    ResolversTypes["UserConnection"],
    ParentType,
    ContextType,
    QueryUsersConnectionArgs
  >;
  node?: Resolver<
    Maybe<ResolversTypes["Node"]>,
    ParentType,
    ContextType,
    QueryNodeArgs
  >;
};

export type SubscriptionResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["Subscription"]
> = {
  user?: SubscriptionResolver<
    Maybe<ResolversTypes["UserSubscriptionPayload"]>,
    ParentType,
    ContextType,
    SubscriptionUserArgs
  >;
};

export type UserResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type UserConnectionResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["UserConnection"]
> = {
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  edges?: Resolver<
    Array<Maybe<ResolversTypes["UserEdge"]>>,
    ParentType,
    ContextType
  >;
  aggregate?: Resolver<
    ResolversTypes["AggregateUser"],
    ParentType,
    ContextType
  >;
};

export type UserEdgeResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["UserEdge"]
> = {
  node?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type UserPreviousValuesResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["UserPreviousValues"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type UserSubscriptionPayloadResolvers<
  ContextType = Context,
  ParentType = ResolversTypes["UserSubscriptionPayload"]
> = {
  mutation?: Resolver<ResolversTypes["MutationType"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  updatedFields?: Resolver<
    Maybe<Array<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  previousValues?: Resolver<
    Maybe<ResolversTypes["UserPreviousValues"]>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = Context> = {
  AggregateUser?: AggregateUserResolvers<ContextType>;
  BatchPayload?: BatchPayloadResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserPreviousValues?: UserPreviousValuesResolvers<ContextType>;
  UserSubscriptionPayload?: UserSubscriptionPayloadResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;

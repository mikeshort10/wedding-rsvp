import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum DietaryRestriction {
  LactoseIntolerant = 'LACTOSE_INTOLERANT',
  PeanutAllergy = 'PEANUT_ALLERGY',
  Vegan = 'VEGAN',
  Vegetarian = 'VEGETARIAN'
}

export type Mutation = {
  __typename?: 'Mutation';
  updateRsvps?: Maybe<UpdateResult>;
};


export type MutationUpdateRsvpsArgs = {
  rsvps: Array<UpdateRsvpInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  allRsvp?: Maybe<RsvpConnection>;
  allRsvpsByLastNameAndZip?: Maybe<RsvpConnection>;
};


export type QueryAllRsvpsByLastNameAndZipArgs = {
  lastName: Scalars['String'];
  zipCode: Scalars['String'];
};

export type Rsvp = {
  __typename?: 'Rsvp';
  attending?: Maybe<Scalars['Boolean']>;
  dietaryRestrictionNote?: Maybe<Scalars['String']>;
  dietaryRestrictions?: Maybe<Array<DietaryRestriction>>;
  firstName: Scalars['String'];
  groupCode: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  zipCode: Scalars['String'];
};

export type RsvpConnection = {
  __typename?: 'RsvpConnection';
  nodes: Array<Rsvp>;
  pageInfo: PageInfo;
};

export type UpdateResult = {
  __typename?: 'UpdateResult';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateRsvpInput = {
  attending: Scalars['Boolean'];
  dietaryRestrictionNote?: InputMaybe<Scalars['String']>;
  dietaryRestrictions?: InputMaybe<Array<DietaryRestriction>>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DietaryRestriction: DietaryRestriction;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  Rsvp: ResolverTypeWrapper<Rsvp>;
  RsvpConnection: ResolverTypeWrapper<RsvpConnection>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateResult: ResolverTypeWrapper<UpdateResult>;
  UpdateRsvpInput: UpdateRsvpInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  PageInfo: PageInfo;
  Query: {};
  Rsvp: Rsvp;
  RsvpConnection: RsvpConnection;
  String: Scalars['String'];
  UpdateResult: UpdateResult;
  UpdateRsvpInput: UpdateRsvpInput;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  updateRsvps?: Resolver<Maybe<ResolversTypes['UpdateResult']>, ParentType, ContextType, RequireFields<MutationUpdateRsvpsArgs, 'rsvps'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allRsvp?: Resolver<Maybe<ResolversTypes['RsvpConnection']>, ParentType, ContextType>;
  allRsvpsByLastNameAndZip?: Resolver<Maybe<ResolversTypes['RsvpConnection']>, ParentType, ContextType, RequireFields<QueryAllRsvpsByLastNameAndZipArgs, 'lastName' | 'zipCode'>>;
};

export type RsvpResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rsvp'] = ResolversParentTypes['Rsvp']> = {
  attending?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dietaryRestrictionNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dietaryRestrictions?: Resolver<Maybe<Array<ResolversTypes['DietaryRestriction']>>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  groupCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RsvpConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RsvpConnection'] = ResolversParentTypes['RsvpConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Rsvp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateResult'] = ResolversParentTypes['UpdateResult']> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rsvp?: RsvpResolvers<ContextType>;
  RsvpConnection?: RsvpConnectionResolvers<ContextType>;
  UpdateResult?: UpdateResultResolvers<ContextType>;
};


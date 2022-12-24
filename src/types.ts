import { AppSyncResolverHandler } from "aws-lambda";
import { Mutation, Query } from "../src/generated/graphql";

type ResolverHandler<
  Base,
  FieldKey extends keyof Base,
  Args = Record<never, never>
> = AppSyncResolverHandler<Args, unknown, Base[FieldKey]>;
type QueryHandler<
  QueryKey extends keyof Query,
  Args = Record<never, never>
> = ResolverHandler<Query, QueryKey, Args>;
export type MutationHandler<
  QueryKey extends keyof Mutation,
  Args = Record<never, never>
> = ResolverHandler<Mutation, QueryKey, Args>;

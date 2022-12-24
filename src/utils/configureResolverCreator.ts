import * as cdk from "aws-cdk-lib";
import * as path from "node:path";
import type { Query } from "../generated/graphql";
import * as appsync from "@aws-cdk/aws-appsync-alpha";

type Config<T extends { __typename?: string }> = {
  env?: Record<string, string>;
  api: appsync.GraphqlApi;
  typeName: NonNullable<T["__typename"]>;
};

export const configureResolverCreator = <
  T extends { __typename?: string } = Query
>(
  thisStack: cdk.Stack,
  config: Config<T>
) => {
  return (fieldName: keyof T & string) => {
    const lambda = new cdk.aws_lambda_nodejs.NodejsFunction(
      thisStack,
      `${fieldName}Handler`,
      {
        handler: "handler",
        runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
        entry: path.join(__dirname, "..", "functions", `${fieldName}.ts`),
        environment: config.env,
      }
    );

    const dataSource = config.api.addLambdaDataSource(
      `${fieldName}DataSource`,
      lambda
    );

    const resolver = dataSource.createResolver(`${fieldName}Resolver`, {
      typeName: config.typeName,
      fieldName,
    });
  };
};

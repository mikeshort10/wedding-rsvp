import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { PipelineConfig } from "../bin/wedding-rsvp";
import * as appsync from "@aws-cdk/aws-appsync-alpha";
import * as path from "node:path";
import { configureResolverCreator } from "../src/utils/configureResolverCreator";
import { Mutation, Query } from "../src/generated/graphql";

export class WeddingRsvpStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: cdk.StackProps & { config: PipelineConfig }
  ) {
    super(scope, id, props);

    const api = new appsync.GraphqlApi(
      this,
      `MeetingRsvpAppSync-${props.config.environment}`,
      {
        name: `MeetingRsvpAppSync-${props.config.environment}`,
        schema: appsync.SchemaFile.fromAsset(
          path.join(__dirname, "..", "resources", "schema.graphql")
        ),
      }
    );

    const baseConfig = {
      api,
      env: {
        // TODO: create DynamoDB table
        // TABLE_NAME: ""
      },
    };

    const createQueryResolver = configureResolverCreator<Query>(this, {
      ...baseConfig,
      typeName: "Query",
    });
    const createMutationResolver = configureResolverCreator<Mutation>(this, {
      ...baseConfig,
      typeName: "Mutation",
    });

    [
      createQueryResolver("allRsvp"),
      createQueryResolver("allRsvpsByLastNameAndZip"),
      createMutationResolver("updateRsvps"),
    ];
  }
}

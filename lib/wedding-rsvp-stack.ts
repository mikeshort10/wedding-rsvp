import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { PipelineConfig } from "../bin/wedding-rsvp";

export class WeddingRsvpStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: cdk.StackProps & { config: PipelineConfig }
  ) {
    super(scope, id, props);
  }
}

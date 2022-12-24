import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { PipelineConfig } from "../bin/wedding-rsvp";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class WeddingRsvpStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: cdk.StackProps & { config: PipelineConfig }
  ) {
    super(scope, id, props);

    const pipeline = new cdk.pipelines.CodePipeline(
      this,
      `WeddingPipeline-${props?.config.environment}`,
      {
        synth: new cdk.pipelines.ShellStep(`Synth`, {
          input: cdk.pipelines.CodePipelineSource.gitHub(
            "mikeshort10/wedding-rsvp",
            props.config.branch,
            { trigger: cdk.aws_codepipeline_actions.GitHubTrigger.WEBHOOK }
          ),
          installCommands: ["npm ci"],
          commands: ["npm synth"],
          env: {
            CDK_ENV: props.config.environment,
          },
        }),
      }
    );
  }
}

import { pipe } from "fp-ts/lib/function";
import { MutationUpdateRsvpsArgs } from "../src/generated/graphql";
import { MutationHandler } from "../src/types";

type Handler = MutationHandler<"updateRsvps", MutationUpdateRsvpsArgs>;

export const handler: Handler = async (event) => {
  const rsvps = event.arguments.rsvps;
  return pipe(rsvps);
};

import { Rsvp } from "../../generated/graphql";

const Rsvp = {
  createGroupCode: (rsvp: Rsvp): string => {
    return [rsvp.lastName, rsvp.zipCode].join(":");
  },
  getGroupCodes: (rsvp: Rsvp): string[] => {
    return [Rsvp.createGroupCode(rsvp), rsvp.groupCode].filter(Boolean);
  },
};

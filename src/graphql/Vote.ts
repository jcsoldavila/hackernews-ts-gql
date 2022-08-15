import { objectType, extendType, nonNull, intArg } from "nexus";

export const Vote = objectType({
    name: "Vote",
    definition(t) {
        t.field("vote", {
            type: Vote,
            args: {
                linkId: nonNull(intArg()),
            },
        });
    },
});
import { extendType, nonNull, objectType, stringArg } from "nexus";
import * as bcrypt from "bcryptjs";


export const AuthPayLoad = objectType({
    name: "AuthPayLoad",
    definition(t) {
        t.nonNull.string("token");
        t.nonNull.field("user", {
            type: "User",
        });
    },
});

export const AuthMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("signup", {
            type: "AuthPayLoad",
            args: {
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
                name: nonNull(stringArg()),
            },
            async resolve (parent, args, context, info) {
                const { email, name } = args;

                const password = await bcrypt.hash(args.password, 10);
            }
        })
    },
})
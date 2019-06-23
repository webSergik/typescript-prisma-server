import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { MutationResolvers } from "../generated/graphql";

const APP_SECRET = "super_secret";

const Mutation: MutationResolvers = {
  signup: async (_, { email, password }, { prisma }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.createUser({
      email,
      password: hashedPassword
    });
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
      token,
      user
    };
  },
  login: (_, { email, password }, context) => {
    return null;
  }
};

export default Mutation;

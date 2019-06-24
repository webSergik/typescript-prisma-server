import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { MutationResolvers } from "../generated/graphql";
import { APP_SECRET } from "../utils";

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
  login: async (_, { email, password }, { prisma }) => {
    const user = await prisma.user({ email });

    if (!user) {
      throw new Error("Invalid login");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET, {
      expiresIn: "30d" // token will expire in 30days
    });

    return {
      token,
      user
    };
  }
};

export default Mutation;

import { QueryResolvers } from "../generated/graphql";

const Query: QueryResolvers = {
  me: (_, __, { prisma, user }) => {
    console.log(user);
    if (user) return prisma.user({ id: user.userId });
  },
  users: (_, __, { prisma }) => {
    return prisma.users();
  }
};

export default Query;

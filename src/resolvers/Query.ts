import { QueryResolvers } from "../generated/graphql";

const Query: QueryResolvers = {
  // me: (_, __, { user }) => {
  //   if (user) return user;
  // },
  users: (_, __, { prisma }) => {
    return prisma.users();
  }
};

export default Query;

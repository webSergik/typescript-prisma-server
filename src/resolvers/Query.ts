import { QueryResolvers } from "../generated/graphql";

const Query: QueryResolvers = {
  me: (_, __, { user }) => {
    if (user) return user;
  },
  users: (_, __, { prisma }, info) => {
    return prisma.users(_, info);
  }
};

export default Query;

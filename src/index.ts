import { ApolloServer } from "apollo-server";
import { prisma } from "./generated/prisma-client";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = importSchema("src/schema/schema.graphql");
const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false }
});

const server = new ApolloServer({
  schema,
  context: { prisma }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

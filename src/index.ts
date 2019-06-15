import { ApolloServer } from "apollo-server";
import { prisma } from "./generated/prisma-client";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./schema/schema.graphql";

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

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}

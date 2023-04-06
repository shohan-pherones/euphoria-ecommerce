const { ApolloServer } = require("apollo-server-micro");
const typeDefs = require("@/graphql/products/typeDefs");
const resolvers = require("@/graphql/products/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

let handler;

async function startServer() {
  await server.start();
  handler = server.createHandler({ path: "/api/products" });
}

export default async function apiHandler(req, res) {
  if (!handler) {
    await startServer();
  }

  return handler(req, res);
}

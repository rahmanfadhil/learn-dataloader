const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url) => console.log(`Server has started on ${url}`));

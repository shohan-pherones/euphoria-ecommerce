const { gql } = require("apollo-server-micro");

const typeDefs = gql`
  type Product {
    _id: ID!
    title: String!
    price: Float!
    imageUrl: String!
    category: String!
    description: String!
  }

  type Query {
    products: [Product!]!
  }
`;

module.exports = typeDefs;

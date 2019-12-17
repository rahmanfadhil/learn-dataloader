const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    authors: [Author]
    books: [Book]
    hello: String
  }

  type Author {
    name: String
    email: String
    books: [Book]
  }

  type Book {
    id: ID
    title: String
    author: Author
  }
`;

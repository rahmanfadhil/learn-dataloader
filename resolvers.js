const { authors, books } = require("./data");
const DataLoader = require("dataloader");

module.exports = {
  Query: {
    books: () => books,
    hello: () => "world",
  },
  Book: {
    author: (parent) => {
      const authorLoader = new DataLoader((keys) => {
        const result = keys.map((authorId) => {
          return authors.find((author) => author.id === authorId);
        });

        return Promise.resolve(result);
      });

      return authorLoader.load(parent.author);
    },
  },
};

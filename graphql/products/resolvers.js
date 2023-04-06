const Product = require("@/models/Product");

const resolvers = {
  Query: {
    products: async () => {
      try {
        const products = await Product.find();
        return products;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers;

require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3001,
  mongoURI: process.env.MONGODB_PRODUCT_URI || "mongodb://mymongodb/products",
  rabbitMQURI: process.env.RABBITMQ_URL,
  exchangeName: "products",
  queueName: "products_queue",
};

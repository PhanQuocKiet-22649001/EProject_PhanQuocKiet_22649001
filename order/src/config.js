require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://mymongodb/orders',
    rabbitMQURI: process.env.RABBITMQ_URL,
    rabbitMQQueue: 'orders',
    port: 3002
};
  
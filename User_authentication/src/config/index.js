const dotenv = require('dotenv');
dotenv.config(); // Add this line

module.exports = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL:process.env.DATABASE_URL
}       
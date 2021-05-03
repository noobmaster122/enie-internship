const Sequelize = require("sequelize")
//const envi = process.env.NODE_ENV
const config = require("./config")["development"]

  module.exports = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
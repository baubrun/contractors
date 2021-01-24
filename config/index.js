require("dotenv/config")



const config = {
  dbUri: process.env.DATABASE_URI,
  port: process.env.PORT || 5000
}

module.exports =  config
const express = require("express")
const routers = require("./routes")
const mongoose = require("mongoose")
const { db_url, option } = require("./config")

const app = express()

mongoose.connect(db_url, option, function (err) {
  if (err) console.error(err)

  console.log("Database connected!")
})

// use json
app.use(express.json())
app.use(express.urlencoded())
// all routers
app.use(routers)

app.listen(1234)
console.log("server start")

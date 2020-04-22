const express = require("express")
const app = express()

app.use(function (req, res, next) {
  // ...
  console.log(req.ip)
  console.log(req.headers)
  console.log(req.params)
  console.log(req.hostname)
  console.log(req.query)
  console.log(req.protocol)
  next()
})

app.get("/books", function (req, res) {
  res.json("books data in object")
})

app.listen(1234)
console.log("server start")

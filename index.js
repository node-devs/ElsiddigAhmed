const express = require("express")
const app = express()

app.get("/", function (req, res) {
  res.send("welcome")
})

app.listen(1234)
console.log("server start")

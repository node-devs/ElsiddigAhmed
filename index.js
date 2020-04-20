const express = require("express")
const app = express()

app.get("/:name/:age", function (req, res) {
  res.send("welcome " + req.params.name + " you are " + req.params.age)
})

// app.get("/", function (req, res) {
//   res.send("welcome " + req.query.name)
// })

app.listen(1234)
console.log("server start")

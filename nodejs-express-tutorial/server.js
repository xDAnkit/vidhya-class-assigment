const express = require("express");
const app = express();

app.get("/", (Req, res) => {
  res.send("Hello world!!!!");
});

app.post("/", (Req, res) => {
    res.send("POST- Hello world!!!!");
  });

  app.listen("7415", () => {
    console.log("Server started")
  });
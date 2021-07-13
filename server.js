const http = require("http");
var cors = require("cors");
var express = require('express')
var app = express();

app.use(cors());

const server = http.createServer(app);

let dataArray = [
  { id: 0, country: "Belarus", age: "21", sex: "men" },
  { id: 1, country: "Portugal", age: "44", sex: "men" },
  { id: 2, country: "China", age: "33", sex: "men" },
];

server.on("request", (req, res) => {
  // res.write(res);
  // res.end("Server ready");
});

server.listen(5000, () => console.log("Server works"));

app.get("/dataArray", function (req, res) {
    console.log('fff')
  res.send(dataArray);
});

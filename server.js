const http = require("http");
var cors = require("cors");
var express = require("express");
var app = express();
let bodyParser = require('body-parser')

let jsonParser = bodyParser.json()

app.use(cors());


const server = http.createServer(app);

let dataArray = [
  { id: 0, country: "Belarus", age: "21", sex: "men", isChecked:false},
  { id: 1, country: "Portugal", age: "44", sex: "men", isChecked:false},
  { id: 2, country: "China", age: "33", sex: "men", isChecked:false },
];

server.on("request", (req, res) => {
  // res.write(res);
  // res.end("Server ready");
});

server.listen(5000, () => console.log("Server works"));

app.get("/dataArray", function (req, res) {
  console.log("start");
  res.send(dataArray);
});

app.delete("/delete/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let newarray = dataArray;
  newarray = [
    ...newarray.filter((el) => {
      console.log("el", el);
      console.log("id", id);
      return id !== el.id;
    }),
  ];

  // dataArray = [
  //   ...dataArray.filter((el) => {
  //     console.log("el", el);
  //     console.log("id", id);
  //     return id !== el.id;
  //   }),
  // ];
  console.log('newarr',newarray);
  res.send(newarray);
  dataArray.length= 0;
  dataArray.push(...newarray)
});

app.post("/add", (req, res) => {
  let newarray = dataArray;

  let lastIndex = newarray[newarray.length - 1].id;
  // let lastIndex = dataArray[dataArray.length - 1].id;

  console.log(lastIndex);
  newarray = [
    ...newarray,
    { id: lastIndex + 1, country: "", age: "", sex: "",isChecked:false },
  ];
  console.log(newarray);
  res.send(newarray);
  dataArray.length= 0;
  dataArray.push(...newarray)
});

app.patch('/update/:id', jsonParser, (req, res) => {
  console.log('requpdate', req.body);
  res.send(req.body);
  // return {
  //   id: dataArray.id,
  //   country: countryField.current.value,
  //   age: ageField.current.value,
  //   sex: sexField.current.value,
  // };
});

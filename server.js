const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors()); //응답요청수락

//http메소드, 라우팅,콜백함수
app.get("", function (req, res) {
  res.sendFile(__dirname + "/map.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

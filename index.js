//모듈 방식
const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("hello express");
});
app.get("/hello", function (req, res) {
  res.send("안녕하세요. express입니다.");
});
app.get("/introduce", function (req, res) {
  console.log(req.query.name);
  console.log(req.query.age);
  if (req.query.age > 20) {
    res.send(
      "<h1>안녕하세요. 잘생긴 " +
        req.query.name +
        "님 당신은 미성년자가 아님으로 입장 가능합니다.</h1>"
    );
  } else {
    res.send(
      "<h1>안녕하세요. 잘생긴 " +
        req.query.name +
        "님 당신은 미성년자임으로 입장 불가능합니다.</h1>"
    );
  }
});
app.get("/weather", function (req, res) {
  if (req.query.region === "서울") {
    res.send("<h1>맑음</h1");
  } else if (req.query.region === "춘천") res.send("<h1>폭설</h1>");
});

app.listen(3000, function () {
  console.log("3000번 포트로 들어오는 명령을 들을 수 있어요.");
});

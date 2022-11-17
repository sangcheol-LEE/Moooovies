// 백엔드 시작점 !
// express js 다운받기

const express = require('express'); // 익스프레스 모듈을 가져온다.
const app = express() // 새로운 익스프레스 앱을 만들고 !
const port = 3000 // 포트는 내 마음 !

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://zlrz002:tkdas6708%40@boilerian.jklar1o.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("monggoDB Connected...."))
  .catch(err => console.log(err))

app.get("/", (request, response) => response.send("Hello World How are you ~?"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


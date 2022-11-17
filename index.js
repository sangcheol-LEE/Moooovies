// 백엔드 시작점 !
// express js 다운받기

const express = require('express'); // 익스프레스 모듈을 가져온다.
const app = express() // 새로운 익스프레스 앱을 만들고 !
const port = 3000 // 포트는 내 마음 !
const {User} = require("./models/User");
const bodyParser = require("body-parser");

const config = require("./config/key");

app.use(bodyParser.urlencoded({extended: true})); // 바디파서에 옵션을 주기 위해 사용합니다.
// => 위 코드는 application/x-www-form-urlencoded 의 형식의 데이터를 읽어주고
app.use(bodyParser.json());
// => 위 코드는 application/json 형식의 데이터를 읽는다.

const mongoose = require("mongoose")
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("monggoDB Connected...."))
  .catch(err => console.log(err))

app.get("/", (request, response) => response.send("Hello World How are you ~? 내 이름은 상철이야"))

//회원가입 라우터 기능 !
app.post("/register", (request, response) => {

  // 회원가입시 필요한 정보들을 클라이언트에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.

  // 1. 인스턴스 만들기
  const user = new User(request.body)

  // 2. 몽고디비 메서드인 save를 이용해서 정보들이 유저모델에 저장이된다. 이후 콜백함수가 오는데 이때 에러가 있으면 클라이언트에 에러가 있다고 제이슨 형식으로 전달해준다.
  user.save((err, userInfo) => {
    if(err) return response.json({ success: false, err })
    return response.status(200).json({
      success: true
    })
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


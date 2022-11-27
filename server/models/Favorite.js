const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// 스키마
const favoriteSchema = mongoose.Schema({
  userForm : {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  movieId: {
    type : String
  },
  movieTitle: {
    type : String
  },
  moviePost : {
    type : String
  },
  movieRunTime: {
    type : String
  }
},{timestamps : true})

// User = 모델
const Favorite = mongoose.model("Favorite", favoriteSchema) // 스키마를 모델로 감싸줬다.


// 다른 파일에서도 쓰게하기 위해
module.exports = {Favorite}


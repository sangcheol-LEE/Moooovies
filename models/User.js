const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10

// 스키마
const userSchema = mongoose.Schema({
  name : {
    type : String,
    maxlength: 50
  },
  email: {
    type : String,
    trim : true // 공백을 지워주는 역할
  },
  password: {
    type : String,
    minlength: 5
  },
  lastname : {
    type : String,
    maxlength: 50
  },
  role : {
    type : Number,
    default : 0 // 내가 롤을 따로 지정하지 않으면 기본값으로 0을 주겠다.
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

userSchema.pre("save", function(next) {
  var user = this;

  if(user.isModified("password")) {
    // 비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if(err) return next(err)
      bcrypt.hash(user.password, salt, function(err, hash){
        if(err) return next(err)
        user.password = hash;
        next()
      })
    })
  }
})

// User = 모델
const User = mongoose.model("User", userSchema) // 스키마를 모델로 감싸줬다.


// 다른 파일에서도 쓰게하기 위해
module.exports = {User}


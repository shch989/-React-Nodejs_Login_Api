const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, // 빈칸을 자동 제거처리
    unique: 1 // 중복 불가
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: { // 관리자 권한
    type: Number, // 숫자 값을 지정하면 관리자 권한
    default: 0 // role을 지정하지 않으면 0
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: { // 토큰 유효기간
    type: Number
  }

})

const User = mongoose.model('User', userSchema)

module.exports = { User }
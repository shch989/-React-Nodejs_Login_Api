const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require('./models/User')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://semi2790:981104shch98@cluster0.n8phi9o.mongodb.net/?retryWrites=true&w=majority', {
      // useNewUrlPaser: true, useUnifiedTofology: true, useCreateIndex: true, useFindAndModify: false

}).then(() => console.log('mongoDB 연결 성공'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.post('/register', (req, res) => {

  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 
  // 그것들을 데이터 베이스에 넣어준다.

  // bodyParser 필수
  const user = new User(req.body)
  user.save((err, doc) => {
    if(err) return res.json({ success: false, message: err})
    return res.status(200).json({ success: true })
  })

})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})
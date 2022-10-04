const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://semi2790:981104shch98@cluster0.n8phi9o.mongodb.net/?retryWrites=true&w=majority', {
      // useNewUrlPaser: true, useUnifiedTofology: true, useCreateIndex: true, useFindAndModify: false

}).then(() => console.log('mongoDB 연결 성공'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})
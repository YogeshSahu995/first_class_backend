require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=> {
  res.send('yogesh.com')
})

app.get('/login', (req, res) => {
  res.send('<h1> please login at a trendy shop </h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2> Free Fire </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
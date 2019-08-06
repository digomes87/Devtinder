const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const routes = require('./routes')
const server = express()

server.use(cors())
server.use(bodyparser.json());
mongoose.connect('mongodb+srv://pycoorp:pycoorp@cluster0-twy2b.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true
})

server.use(routes)
server.listen(7777)
const express = require('express')
const DevControllers = require('./controllers/DevControllers')
const LikesControllers = require('./controllers/LikeControllers')
const DislikesControllers = require('./controllers/DislikeControllers')
const routes = express.Router()

routes.post('/devs', DevControllers.index)
routes.post('/devs', DevControllers.store)
routes.post('/devs/:devId/likes', LikesControllers.store)
routes.post('/devs/:devId/dislikes', DislikesControllers.store)

module.exports = routes
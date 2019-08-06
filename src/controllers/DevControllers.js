const axios = require('axios')
const Dev = require('../models/Dev')
module.exports = {
   async index(req,resp){
    const {user} = req.headers
    const loggedDev = await Dev.findById(user)
    const user = await Dev.find({
      $and: [
        {_id:{$ne:user}},
        {_id:{$nin: loggedDev.likes}},
        {_id:{$nin: loggedDev.dislikes}},
      ]
    })
    return resp.json(users)
  },
   async store(req, resp) {
    const { username } = req.body;
    const userExist = await Dev.findOne({user: username})

    if(userExist){
      return resp.json(userExist)
    }

    const response = await axios.get(`https://api.github.com/users/${username}`)
    const {name, bio, avatar_url} = response.data;
    const dev = await Dev.create({
      name:name,
      user:username,
      bio:bio,
      avatar:avatar_url
    })
    return resp.json(dev)
  }
}
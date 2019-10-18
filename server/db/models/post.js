const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('posts', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Post

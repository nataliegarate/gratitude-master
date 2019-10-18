const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('posts', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Post

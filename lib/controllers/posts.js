const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const { Post } = require('../models/Post');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (e) {
    next(e);
  }
}).post('/', authenticate, async (req, res, next) => {
  try {
    const post = await Post.insert(req.body);
    res.json(post);
  } catch (e) {
    next(e);
  }
});

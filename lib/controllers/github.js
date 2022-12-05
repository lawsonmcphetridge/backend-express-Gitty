const { Router } = require('express');
const { GithubUser } = require('../models/GithubUser');
const { makeCodeIntoToken, fetchGithubProfile } = require('../services/github');

module.exports = Router()
  .get('/login', async (req, res) => {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GH_CLIENT_ID}&scope=user&redirect_uri=${process.env.GH_REDIRECT_URI}`
    );
  })
  .get('/callback', async (req, res, next) => {
    try {
      const { code } = req.query;
      const token = await makeCodeIntoToken(code);
      const { email, login, avatar_url } = await fetchGithubProfile(token);
      let user = await GithubUser.fetchGithubProfile(login);
      if (!user) {
        user = GithubUser.insert({
          login,
          email,
          avatar: avatar_url,
        });
      }
    } catch (e) {
      next(e);
    }
  });

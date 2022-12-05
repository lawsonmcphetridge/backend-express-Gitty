const pool = require('../utils/pool');

class GithubUser {
  id;
  email;
  login;
  avatar;
  constructor(row) {
    this.id = row.id;
    this.email = row.email;
    this.login = row.login;
    this.avatar = row.avatar;
  }
}

module.exports = { GithubUser };

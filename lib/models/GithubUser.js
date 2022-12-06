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

  static async findUser(login) {
    const { rows } = await pool.query(
      `
        select * from 
        github_users where login = $1
        `,
      [login]
    );
    if (!rows[0]) return null;
    return new GithubUser(rows[0]);
  }

  static async insert({ login, email, avatar }) {
    if (!login) throw new Error('you need to login');
    const { rows } = await pool.query(
      `
        INSERT INTO github_users (login, email, avatar)
        values ($1, $2, $3)
        returning *    
        `,
      [login, email, avatar]
    );
    return new GithubUser(rows[0]);
  }
}

module.exports = { GithubUser };

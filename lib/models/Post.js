const pool = require('../utils/pool');

class Post {
  id;
  post;
  constructor(row) {
    this.id = row.id;
    this.post = row.post;
  }

  static async getAllPosts() {
    const { rows } = await pool.query(`
        select * from posts
        `);
    return rows.map((row) => new Post(row));
  }
}

module.exports = { Post };

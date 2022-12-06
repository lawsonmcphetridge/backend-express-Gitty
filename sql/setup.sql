-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS users cascade;

drop table if exists github_users;

drop table if exists posts;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL
);

CREATE TABLE github_users (
id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
login text not null,
email text,
avatar text
);

CREATE TABLE posts (
id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
post VARCHAR(255)
);

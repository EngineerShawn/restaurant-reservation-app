/**
 * Knex configuration file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://fwrmqktn:hx8eNz4SMD5vXj9UyEBOMUhDMF5T-t5L@fanny.db.elephantsql.com/fwrmqktn", //process.env.DB_URL,
  DATABASE_URL_DEVELOPMENT = "postgres://fwrmqktn:hx8eNz4SMD5vXj9UyEBOMUhDMF5T-t5L@fanny.db.elephantsql.com/fwrmqktn",         // process.env.DB_URL_DEV,
  DATABASE_URL_TEST = process.env.DB_URL_TEST,
  DATABASE_URL_PREVIEW = process.env.DB_URL_PREVIEW,
  DEBUG,
} = process.env;
module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: process.env.DATABASE_URL_DEVELOPMENT || "postgres://fwrmqktn:hx8eNz4SMD5vXj9UyEBOMUhDMF5T-t5L@fanny.db.elephantsql.com/fwrmqktn",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: process.env.DATABASE_URL || "postgres://fwrmqktn:hx8eNz4SMD5vXj9UyEBOMUhDMF5T-t5L@fanny.db.elephantsql.com/fwrmqktn",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};

const { knexSnakeCaseMappers } = require('objection');
module.exports = {
  development: {
    client: process.env.DB_DIALECT || 'mysql2',
    useNullAsDefault: true,
    debug: true,
    ...knexSnakeCaseMappers(),
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'goldtree9',
      database: process.env.DB_NAME || 'todo'
    }
  },
  production: {
    client: process.env.DB_DIALECT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }
  }
};

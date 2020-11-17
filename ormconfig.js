const { SnakeNamingStrategy } = require('typeorm-naming-strategies')

module.exports = {
  "type": "sqlite",
  "database": "database.sqlite",
  "synchronize": true,
  namingStrategy: new SnakeNamingStrategy(),
  "logging": false,
  "entities": [
    "src/entity/**/*.ts"
  ],
  "migrations": [
    "src/migration/**/*.ts"
  ],
  "subscribers": [
    "src/subscriber/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

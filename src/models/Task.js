const { Model, knexSnakeCaseMappers } = require('objection');

class Task extends Model {
  static get tableName() {
    return 'tasks';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['details'],

      properties: {
        id: { type: 'integer' },
        userId: { type: 'integer' },
        details: { type: 'string', minLength: 1, maxLength: 255 },
        isCompleted: { type: 'boolean', default: false },
        reminder: { type: 'datetime' }
      }
    };
  }

  static get relationMappings() {
    const User = require('./User');

    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tasks.userId',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = Task;

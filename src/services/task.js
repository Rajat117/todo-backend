const Task = require('../models/Task');

let service = {};

/**
 * Get One Particular Task By Its id
 */

service.getOne = async id => {
  try {
    const task = await Task.query().findById(id);
    console.log(task);
    return task;
  } catch (error) {
    throw error;
  }
};

/**
 * Get All Tasks Of Particular User By userId
 */

service.getAllByUserId = async userId => {
  console.log(userId);
  try {
    return await Task.query().where('user_id', userId);
  } catch (error) {
    throw error;
  }
};

/**
 * Create a New Task
 */

service.create = async (data, userId) => {
  try {
    return await Task.query().insert({ ...data, userId: parseInt(userId) });
  } catch (error) {
    throw error;
  }
};

/**
 * Update a Task By Its id
 */

service.update = async (id, data) => {
  try {
    return await Task.query()
      .findById(id)
      .updateAndFetchById(id, data);
  } catch (error) {
    throw error;
  }
};

/**
 * Delete a Task By Its id
 */

service.delete = async id => {
  try {
    return await Task.query().deleteById(id);
  } catch (error) {
    throw error;
  }
};

module.exports = service;

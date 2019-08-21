const taskService = require('../services/task');
const responseTransformer = require('../middleware/responseTransformer');

let controller = {};

controller.getOne = async (req, res, next) => {
  try {
    const result = await taskService.getOne(req.params.id);
    responseTransformer(res, result, 'Task Fetched', true);
  } catch (error) {
    responseTransformer(res, error, 'Failed To Fetch Task', false);
  }
};

controller.getAll = async (req, res, next) => {
  try {
    const result = await taskService.getAllByUserId(req.params.userId);
    responseTransformer(res, result, 'List Of Tasks', true);
  } catch (error) {
    responseTransformer(res, error, 'Failed To Fetch Tasks', false);
  }
};

controller.create = async (req, res, next) => {
  try {
    const result = await taskService.create(req.body, req.params.userId);
    responseTransformer(res, result, 'Task Created', true);
  } catch (error) {
    responseTransformer(res, error, 'Failed To Create Task', false);
  }
};

controller.update = async (req, res, next) => {
  try {
    const result = await taskService.update(req.params.id, req.body);
    responseTransformer(res, result, 'Task Updated', true);
  } catch (error) {
    responseTransformer(res, error, 'Failed To Update Task', false);
  }
};

controller.delete = async (req, res, next) => {
  try {
    const result = await taskService.delete(req.params.id);
    responseTransformer(res, result, 'Task Deleted', true);
  } catch (error) {
    responseTransformer(res, error, 'Failed To Delete Task', false);
  }
};

module.exports = controller;

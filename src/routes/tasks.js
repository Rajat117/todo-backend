let express = require('express');
let router = express.Router();

const taskController = require('../controllers/task');

// GET Tasks listing.
router.get('/:userId/task', taskController.getAll);

router.get('/:userId/task/:id', taskController.getOne);

router.post('/:userId/task', taskController.create);

router.put('/:userId/task/:id', taskController.update);

router.delete('/:userId/task/:id', taskController.delete);

module.exports = router;

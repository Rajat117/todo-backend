let express = require('express');
let router = express.Router();

const taskRouter = require('./tasks');

//  GET home page
router.get('/', function(req, res, next) {
  res.send('ok');
});

router.use('/user', taskRouter);

module.exports = router;

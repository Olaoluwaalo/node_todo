const router = require('express').Router();
const UserController = require('../controllers/user_controller');
router.post('/todo/registration', UserController.register);
router.post('/todo/login', UserController.login);
module.exports = router;
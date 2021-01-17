const { Router } = require('express');

const router = Router();

const userController = require('./../controllers/user.controller');
router.post('/', userController.create);

module.exports = router;

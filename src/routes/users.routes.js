const { Router } = require('express');

const router = Router();

const userController = require('./../controllers/user.controller');

router.get('/', userController.getAll);
router.post('/', userController.create);

module.exports = router;

const { Router } = require('express');

const router = Router();

const userController = require('./../controllers/user.controller');

router.get('/', userController.getAll);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;

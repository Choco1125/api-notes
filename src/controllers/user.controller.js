const userModel = require("./../models/user.model");

const userController = {

  create(req, res) {
    const { email, password } = req.body;
    if (email && password) {
      const saved = userModel.create(email, password);
      if (saved) {
        res.status(201).json({
          'message': 'User created.'
        });
      } else {
        res.status(500).json({
          'message': 'Can not create user, try again.'
        });
      }

    } else {
      res.status(400).json({
        'message': 'Wrong data.'
      });
    }
  }

}

module.exports = userController;
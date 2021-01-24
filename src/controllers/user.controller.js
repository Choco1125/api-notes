const userModel = require("./../models/user.model");

const userController = {

  async getAll(req, res) {
		const data = await userModel.getAll();
		res.status(200).json(data);
  }

}

module.exports = userController;

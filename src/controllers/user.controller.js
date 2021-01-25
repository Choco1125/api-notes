const userModel = require("./../models/user.model");

const userController = {

	async getAll(req, res) {
		const data = await userModel.getAll();
		res.status(200).json(data);
	},
	async create(req, res) {
		const { email, password } = req.body;
		if (!email || !password) return res.status(400).json({ message: "You must provide required data." });
		let saved = await userModel.create(email, password);
		if (!saved) return res.status(500).json({ message: "Saved user failed." });
		res.status(201).json({ message: "User created." });
	}

}

module.exports = userController;
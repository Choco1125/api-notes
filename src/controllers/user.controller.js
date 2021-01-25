const { updateEmail } = require("./../models/user.model");
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
		if (!saved) return res.status(500).json({ message: "User already exists." });
		res.status(201).json({ message: "User created." });
	},
	async update(req, res) {
		const { email, password } = req.body;
		const { id } = req.params;
		let saved = false;
		if (email) {
			saved = await userModel.updateEmail(email, id);
		}
		if (password) {
			saved = await userModel.updatePassword(password, id);
		}
		if (!saved) return res.status(500).json({ message: "Can not update user data." });
		res.status(200).json({ message: "User updated." });
	}
}

module.exports = userController;
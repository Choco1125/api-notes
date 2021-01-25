const connect = require('./../database/connection');

const userModel = {
	async getAll() {
		try {
			const database = await connect();
			const [rows, fields] = await database.query("SELECT * FROM users");
			return rows;
		} catch (e) {
			console.log(`Get all user exception: ${e}`);
		}
	},
	async create(email, password) {
		try {
			const database = await connect();
			const query = "INSERT INTO users (email,password) VALUES (?,?)";
			await database.execute(query, [email, password]);
			return true;
		} catch (e) {
			console.log(`Create user exception: ${e}`);
			return false;
		}
	},
	async updateEmail(email, id) {
		try {
			const database = await connect();
			await database.execute("UPDATE users SET email=? WHERE id= ?", [email, id]);
			return true;
		} catch (e) {
			console.log(`Update email user exception: ${e}`);
			return false;
		}
	},
	async updatePassword(password, id) {
		try {
			const database = await connect();
			await database.execute("UPDATE users SET password=? WHERE id = ?", [password, id]);
			return true;
		} catch (e) {
			console.log(`Update passowrd user exception: ${e}`);
			return false;
		}
	}
}

module.exports = userModel;
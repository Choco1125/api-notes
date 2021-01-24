const connect = require('./../database/connection');

const userModel = {
	async getAll(){
		try{
			const database = await connect();
			const [rows, fields] = await database.query("SELECT * FROM users");
			return rows;	
		}catch(e){
			console.log(`exception: ${e}`);
		}
	}
}

module.exports = userModel;

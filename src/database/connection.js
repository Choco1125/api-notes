const mysql = require('mysql2/promise');

async function connect(){
	try{
		const connection = await mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'api_notes'
		});
		return connection;
	
	}catch(e){
		console.log(e);
	}
}

	module.exports = connect;

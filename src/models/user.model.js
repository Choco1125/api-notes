const connection = require('./../database/connection');
const { connect } = require('./../database/connection');

const userModel = {
  async create(email, password) {
    try {
      connection.query("INSERT INTO users (email,password) VALUES (?,?)", [email, password], (err, result) => {
        if (err) {
          return false;
        }
        return true
      });
    } catch (e) {
      console.log(e);
      return true;
    }
  }
}

module.exports = userModel;
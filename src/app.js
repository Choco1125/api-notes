const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

//Bodyparser
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/users', require('./routes/users.routes'));

// app.get('/', (req, res) => {
//   res.send("Hello world!");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
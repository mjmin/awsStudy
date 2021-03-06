const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!\n');
 });


app.use('/users', require('./api/users'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');

  require('./models').sequelize.sync({force: true})
      .then(() => {
        console.log('Databases sync');
      });
});

module.exports = app;
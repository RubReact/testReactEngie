const express = require ("express");
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/agency.js')(app, fs);

const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});

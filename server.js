'use strict';

var express = require('express');
var dotenv = require('dotenv');
var cors = require('cors');

dotenv.config();
cors();

var api = express();
var PORT = process.env.PORT;
api.use(cors());

var scores = [{
  user: 'EJT',
  score: '01842'
}, {
  user: 'PPB',
  score: '01812'
}, {
  user: 'EJT',
  score: '01442'
}];

api.get('/', function (req, res) {
  res.send('Test API works!');
});

api.get('/scores', function (req, res) {
  res.send(scores);
});

api.listen(PORT, function () {
  console.log('Listening on http://localhost:' + PORT);
});
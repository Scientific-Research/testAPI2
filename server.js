'use strict';

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

import _express from 'express';

var _express2 = _interopRequireDefault(_express);

import _dotenv from 'dotenv';

var _dotenv2 = _interopRequireDefault(_dotenv);

import _cors from 'cors';

var _cors2 = _interopRequireDefault(_cors);

_dotenv2['default'].config();
(0, _cors2['default'])();

var api = (0, _express2['default'])();
var PORT = process.env.PORT;
api.use((0, _cors2['default'])());

var scores = [
  {
    user: 'EJT',
    score: '01842',
  },
  {
    user: 'PPB',
    score: '01812',
  },
  {
    user: 'EJT',
    score: '01442',
  },
];

api.get('/', function (req, res) {
  res.send('Test API works!');
});

api.get('/scores', function (req, res) {
  res.send(scores);
});

api.listen(PORT, function () {
  console.log('Listening on http://localhost:' + PORT);
});

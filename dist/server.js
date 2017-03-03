'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _search = require('./routes/search');

var _search2 = _interopRequireDefault(_search);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;
var dbUri = process.env.MONGODB_URI || 'mongodb://localhost/searches';

_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect(dbUri).then(function () {
  return console.log('Database connected');
}).catch(function (err) {
  return console.log(err);
});

app.use('/api', _search2.default);
app.use('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '/view/index.html'));
});

app.listen(port);
console.log('App running at port ' + port);
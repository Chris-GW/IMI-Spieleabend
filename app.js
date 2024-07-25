var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const http = require("http");
const consolidate = require('consolidate')

var app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html',consolidate.mustache)
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));


app.use('/', indexRouter);
app.use('/users', usersRouter);




var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
console.log("Server listening on Port " + port);




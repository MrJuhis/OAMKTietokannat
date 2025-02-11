var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 80;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

app.use((req, res, next) => {
    console.log(`${req.method} request received at ${req.url}`);
    next();
});

app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

app.get('/user/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
});

app.get('/sum/:num1/:num2', (req, res) => {
    const sum = parseInt(req.params.num1) + parseInt(req.params.num2);
    res.send(`Sum: ${sum}`);
});

app.post('/data', (req, res) => {
    res.json({ message: 'Data received', data: req.body });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

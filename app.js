const path = require('path');

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
// const { authMiddleware } = require('./middlewares/auth');

require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: '*',
    credentials: true // Autoriser la transmission du cookie de session depuis le navigateur vers le serveur
  })
);

app.use('/', authRouter);
app.use('/', indexRouter);
// app.use("/users", authMiddleware, usersRouter);
app.use('/users', usersRouter);

module.exports = app;

const express = require('express');
require('./database/index');

const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());

//config routers
app.use('/users', usersRouter);

app.listen(process.env.PORT | 3000);
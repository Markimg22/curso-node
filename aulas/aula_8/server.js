require('dotenv').config();

const express = require('express');
const app = express();

// Connection to Database
const mongoose = require('mongoose');
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection to database finished');
    app.emit('Connected');
  })
  .catch((e) => console.log(`Error in connection: ${e}`));

const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(middleware); // todas as requisições vão passar por essa função
app.use(routes);

// Connected
app.on('Connected', () => {
  app.listen(3000, () => {
    console.log('Server starting in http://localhost:3000/');
  });
});

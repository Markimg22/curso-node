const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(middleware); // todas as requisições vão passar por essa função
app.use(routes);

app.listen(3000, () => {
  console.log('Server starting in http://localhost:3000/');
});

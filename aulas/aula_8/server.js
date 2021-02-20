require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connection to Database
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

// Session
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

// Routes
const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware');

// File Static
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

// Config Sessions
const sessionOptions = session({
  secret: 'adwadadkpkpo1k23131 wdawd12 aoskdaw()', // id da seção, pode ser qualquer coisa
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // ficar salvo durante 1 dia
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

// Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(middleware);
app.use(routes);

// Connected
app.on('Connected', () => {
  app.listen(3000, () => {
    console.log('Server starting in http://localhost:3000/');
  });
});

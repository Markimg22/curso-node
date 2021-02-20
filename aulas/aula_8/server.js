require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

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

// Session
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

// Helmet
const helmet = require('helmet');
app.use(helmet());

// Config Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

// Config Sessions
const sessionOptions = session({
  secret: 'adwadadkpkpo1k23131 wdawd12 aoskdaw()',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

// Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Csurf
const csrf = require('csurf');
app.use(csrf());

// Middlewares
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require('./src/middlewares/middleware');
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

// Routes
const routes = require('./routes');
app.use(routes);

// Connected
app.on('Connected', () => {
  app.listen(3000, () => {
    console.log('Server starting in http://localhost:3000/');
  });
});

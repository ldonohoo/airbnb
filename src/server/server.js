const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
// const sessionMiddleware = require('./modules/session-middleware');
// const passport = require('./strategies/user.strategy');

// Route Includes
const airbnbRouter = require('./routes/airbnb.router');
// const userRouter = require('./routes/user.router');
// const listsRouter = require('./routes/lists.router');
// const listItemsRouter = require('./routes/list-items.router');
// const locationsRouter = require('./routes/locations.router');
// const weatherRouter = require('./routes/weather.router');
// const timeOfDayRouter = require('./routes/timeofday.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
// app.use(sessionMiddleware);

// Start Passport Sessions
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
// app.use('/api/user', userRouter);
// app.use('/api/lists', listsRouter);
// app.use('/api/list_items', listItemsRouter);
// app.use('/api/locations', locationsRouter);
// app.use('/api/weather', weatherRouter);
// app.use('/api/time_of_days', timeOfDayRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
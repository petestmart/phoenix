
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const requirementsRouter = require('./routes/requirements.router');
const jobRequirementsRouter = require('./routes/jobRequirements.router');
const tasksRouter = require('./routes/tasks.router');
const contactRouter = require('./routes/contact.router');
const jobsRouter = require('./routes/jobs.router');
const interviewStagesRouter = require('./routes/interviewStages.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/requirements', requirementsRouter);
app.use('/api/job_requirements', jobRequirementsRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/contact', contactRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/interviewStages', interviewStagesRouter);
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

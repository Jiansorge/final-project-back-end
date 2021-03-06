const { CLIENT_BASE_URL, NODE_ENV, PORT } = process.env
const express = require('express')
const app = express()

// Enable requests from localhost
app.use(require('cors')({
  origin: CLIENT_BASE_URL,
  optionsSuccessStatus: 200
}))

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Database Connection
require('./db/connection')()

// Application-level Middleware
if (NODE_ENV === 'development') app.use(require('morgan')('dev'))
app.use(require('body-parser').json())

// Attach token to request
app.use(require('./api/middleware/set-token'))

// Routes
app.use('/api', require('./api/routes/auth'))
app.use('/api/users', require('./api/routes/users'))
app.use('/api/users/:userId/assignments', require('./api/routes/assignments'))

// Not Found Handler
app.use((req, res, next) => {
  const error = new Error(`Could not ${req.method} ${req.path}`)
  error.status = 404
  next(error)
})

// Error Handler
app.use((err, req, res, next) => {
  if (NODE_ENV === 'development') console.error(err)
  const { message, status } = err
  res.status(status).json({ status, message })
})

// Open Connection
const listener = () => console.log(`Listening on Port ${PORT}!`)
app.listen(PORT, listener)

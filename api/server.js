import mongoose from 'mongoose'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import xss from 'xss-clean'
import hpp from 'hpp'
import cookieParser from 'cookie-parser'

import backendRouter from './routes'
import defaultRouter from './routers/defaultRouter'

import { ErrorController } from './controllers'

import { MONGODB_URI, EXPRESS_PORT, BACKEND_BASEURL } from './config'

// 1. Create main express intance
const app = express()

// Set security HTTP
app.use(helmet())

// create a limiter, and how many request per ip in specific time period
const limiter = rateLimit({
  max: 100, // 100 requests
  windowMs: 60 * 60 * 1000, // in 1 hour,
  message: 'Too many requests from this IP, please try again in an hour!'
})

// 4. Ensure that the router is parsing the request body to appropriately format incoming requests. Limit body to 10kb
app.use(express.json({ limit: '10kb' }))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

// Data sanitization against NoSQL query injection
app.use(mongoSanitize())

// Data sanitization against XSS
app.use(xss())

// Prevent parameter pollution - we can pass a whitelist for query parameter we would like to be duplicated e.g. { whitelist: ['duration']}
app.use(hpp())

// 5. Utilise routes - apply limiter on api routes
app.use(BACKEND_BASEURL, limiter, backendRouter)

// Handled routes that are not defined
app.all('/api/*', defaultRouter)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('./client/build'))

  // if it doesnt recognize the route, Express will serve up the index.html
  app.get('*', (req, res) => {
    res.sendFile('./client/build/index.html')
  })
}
app.use(ErrorController.handleError)

// 6. Define configuration for mongodb
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

// 7. Start server
mongoose
  .connect(MONGODB_URI, MONGO_CONFIG)
  .then(() => {
    console.log(`Connected to database at ${MONGODB_URI}`)
    app.listen(EXPRESS_PORT, () => {
      console.log(`Server is running on PORT: ${EXPRESS_PORT}`)
    })
  })
  .catch(err => {
    console.error(err)
  })

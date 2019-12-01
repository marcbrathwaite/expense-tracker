import mongoose from 'mongoose'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import xss from 'xss-clean'
import hpp from 'hpp'

import backendRouter from './routes'
import defaultRouter from './routers/defaultRouter'

import { ErrorController } from './controllers'

import { MONGODB_URI, MONGODB_PORT, BACKEND_BASEURL } from './config'

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
app.all('*', defaultRouter)

app.use(ErrorController.handleError)

// 6. Define configuration for mongodb
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// 7. Start server
mongoose
  .connect(MONGODB_URI, MONGO_CONFIG)
  .then(async () => {
    console.log(`Connected to database at ${MONGODB_URI}`)
    app.listen(MONGODB_PORT, () => {
      console.log(`Server is running on PORT: ${MONGODB_PORT}`)
    })
  })
  .catch(err => {
    console.error(err)
  })

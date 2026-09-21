import express from 'express'
import cors from 'cors'

import { config } from './config/env.js'

import healthRoutes from './routes/healthRoutes.js'
import networkRoutes from './routes/networkRoutes.js'

const app = express()

/*
 * Middleware
 */

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({
  extended: true
}))

/*
 * Routes
 */

app.use(
  '/api',
  healthRoutes
)

app.use(
  '/api/network',
  networkRoutes
)

/*
 * Root
 */

app.get('/', (req, res) => {
  res.json({
    message: 'Leonardo IT Lab API',
    status: 'online'
  })
})

/*
 * 404
 */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  })
})

/*
 * Error handler
 */

app.use(
  (error, req, res, next) => {
    console.error(error)

    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
)

/*
 * Start server
 */

app.listen(
  config.port,
  () => {
    console.log(
      `Leonardo IT Lab API running on port ${config.port}`
    )
  }
)
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const passport = require('passport')
const config = require('./config')
const authRoutes = require('./routes/auth')

require('./models').connect(
  config.dbUri,
  {
    useMongoClient: true
  }
)

const dev = process.env.NODE_ENV !== 'production'

const app = next({
  dev
})
const handle = app.getRequestHandler()
const api = require('./routes/api.js')
const indexroute = require('./routes/index')
const localSignupStrategy = require('./routes/passport/local-signup')
const localLoginStrategy = require('./routes/passport/local-login')
app
  .prepare()
  .then(() => {
    const server = express()
    const port = !dev ? 80 : 3000
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(passport.initialize())

    passport.use('local-signup', localSignupStrategy)
    passport.use('local-login', localLoginStrategy)

    server.use('/auth', authRoutes)

    server.use('/api', api)
    server.use('/upload', indexroute)
    server.use(express.static('public'))

    server.get('/player/:filename', (req, res) => {
      const actualPage = '/player'
      const queryParams = { title: req.params.filename }
      app.render(req, res, actualPage, queryParams)
    })
    server.get('/video:category', (req, res) => {
      const actualPage = '/video'
      const queryParams = { category: res.params.category }
      app.render(req, res, actualPage, queryParams)
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

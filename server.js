const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const passport = require('passport')
const config = require('./config')

require('./models').connect(
  config.dbUri,
  {
    useMongoClient: true
  }
)

const dev = process.env.NODE_ENV !== 'production'
console.log(process.env.NODE_ENV)

const app = next({
  dev
})
const handle = app.getRequestHandler()
const api = require('./routes/api.js')
const indexroute = require('./routes/index')
app
  .prepare()
  .then(() => {
    const server = express()
    const port = !dev ? 80 : 3000
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(passport.initialize())
    const localSignupStrategy = require('./routes/passport/local-signup')
    const localLoginStrategy = require('./routes/passport/local-login')
    passport.use('local-signup', localSignupStrategy)
    passport.use('local-login', localLoginStrategy)
    const authRoutes = require('./routes/auth')
    server.use('/auth', authRoutes)

    server.get('/api', api.video)
    server.use('/upload', indexroute)
    server.use(express.static('public'))
    server.get('/api/video/allList', api.explore)

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

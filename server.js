const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
var passport = require('passport')
var session = require('express-session')

var db = mongoose.connection
db.on('error', console.error)
db.once('open', function() {
  // CONNECTED TO MONGODB SERVER
  console.log('Connected to mongod server')
})

mongoose.connect('mongodb://renex.iptime.org:27017/nastreamer')

const dev = process.env.NODE_ENV !== 'production'
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

    server.use(
      session({
        secret: 'nastreamerbyrenex',
        resave: true,
        saveUninitialized: false
      })
    )
    require('./routes/passport')(passport)
    server.use(passport.initialize())
    server.use(passport.session())

    server.get('/api', api.video)
    server.use('/upload', indexroute)
    server.use(express.static('public'))
    server.get('/api/video/allList', api.explore)

    server.post(
      '/login',
      passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login', //로그인 실패시 redirect할 url주소
        failureFlash: true
      })
    )

    server.post(
      '/signin',
      passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/signup', //가입 실패시 redirect할 url주소
        failureFlash: true
      })
    )

    server.get('/player/:filename', (req, res) => {
      const actualPage = '/player'
      const queryParams = { title: req.params.filename }
      app.render(req, res, actualPage, queryParams)
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

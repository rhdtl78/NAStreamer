const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const passport = require('passport')
const config = require('./config')
const authRoutes = require('./routes/auth')

require('./models').connect(config.dbUri)

const dev = process.env.NODE_ENV !== 'production'

const app = next({
  dev
})
const handle = app.getRequestHandler()
const api = require('./routes/api.js')
const indexroute = require('./routes/index')
const localSignupStrategy = require('./routes/passport/local-signup')
const localLoginStrategy = require('./routes/passport/local-login')

const server = express()
const port = !dev ? 80 : 3000

server.use(bodyParser.json())
server.use(passport.initialize())

passport.use('local-signup', localSignupStrategy)
passport.use('local-login', localLoginStrategy)

server.use('/auth', authRoutes)

server.use('/api', api)
server.use('/upload', indexroute)
server.use(express.static('public'))

/* 
* Socket IO start
* 나중에 소켓IO 파일을 만들어서 관리하는게 더 좋을 듯
*/
const httpServer = require('http').Server(server)
const io = require('socket.io')(httpServer)

io.on('connection', socket => {
  socket.on('playerTimeCheker', data => {
    //TODO:나중에 여기에 타임아웃이 나면 디비로 정보를 전달
    console.log(data)
  })

  socket.on('disconnect', data => {
    console.log(`Connection diconnect : ${data}`)
  })
})
/* 
* Socket IO End
*
*/

app
  .prepare()
  .then(() => {
    server.get('/player/:uid', (req, res) => {
      const actualPage = '/player'
      const queryParams = { uid: req.params.uid }
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

    httpServer.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

const express = require('express')
const next = require('next')

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

    server.get('/api', api.video)
    server.use('/upload', indexroute)
    server.use(express.static('public'))
    server.get('/api/hello', api.explore)

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

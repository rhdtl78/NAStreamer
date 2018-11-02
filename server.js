const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()
const api = require('./routes/api.js')
app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/api', api.video)
    server.post('/upload', api.upload)
    server.use(express.static('public'))

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

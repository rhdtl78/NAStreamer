const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})

const multer = require('multer')

const handle = app.getRequestHandler()
const api = require('./routes/api.js')
app
  .prepare()
  .then(() => {
    const server = express()

    const upload = multer({ dest: 'explore/public' })

    server.get('/api', api.video)

    server.post('/upload', upload.single('avatar'), (req, res) => {
      console.log(req.file)
    })

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

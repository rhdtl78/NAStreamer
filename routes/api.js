const fs = require('fs')
module.exports = {
  video: async (req, res) => {
    const path = `explore/public/${req.query.filename}`
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-')
      const start = parseInt(parts[0], 10)
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
      const chunksize = end - start + 1
      const file = fs.createReadStream(path, { start, end })
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4'
      }
      res.writeHead(206, head)
      file.pipe(res)
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4'
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
    }
  },
  explore: async (req, res) => {
    let result = []
    fs.readdir('./explore/public', function(err, file) {
      if (err) res.json({ result: [], success: false })
      file.forEach(file => {
        var ext = file.substring(file.length - 3, file.length)
        if (ext === 'mp4' || ext === 'avi' || ext === 'mkv') result.push(file)
      })
      res.json({ result: result, success: true })
    })
  }
}

module.exports = {
  video: async (req, res) => {
    const _json = {}
    _json.renex = true
    res.json(_json)
  }
}

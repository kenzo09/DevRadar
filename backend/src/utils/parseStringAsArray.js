module.exports = function parseStringAsArray(text) {
  return text.split(',').map(c => c.trim())
}
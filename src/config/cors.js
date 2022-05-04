// CORS = Chain of Responsabilities
// Middleware
module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origins', '*')
    res.header('Access-Control-Allow-Methods', 'GET')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}
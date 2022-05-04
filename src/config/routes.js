const express = require('express')

module.exports = function(server) { 
    // Maping routes

    // API Routes

    const router = express.Router()
    server.use('/api', router) // server.use = middleware

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}
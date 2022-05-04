const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOPtions({new: true, runValidators: true})

module.exports = Todo
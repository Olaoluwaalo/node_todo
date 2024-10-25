const mongoose = require('mongoose');

const dbName = 'mongodb+srv://olaoluwagabriel7:4lKL2LkO0DW6GRNG@nodetodo.s4aez.mongodb.net/?retryWrites=true&w=majority&appName=NodeTodo';
const connection = mongoose.createConnection(dbName).on('open', () => {
    console.log('Connected DB');
}).on('error', (err) => {
    console.log('Connected DB Error', err);
});
module.exports = connection;

const { connect, connection, default: mongoose } = require('mongoose');

const connectionString =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialApiDB';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



mongoose.connection.on('open', _ => {
    console.log('Database is connected to mongodb://127.0.0.1:27017/socialApiDB', )
})

mongoose.connection.on('error', _ => {
    console.log(err)
})

module.exports = connection;
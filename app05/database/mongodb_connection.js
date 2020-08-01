const db_link = 'mongodb://127.0.0.1:27017/testqldb';

const { connect, disconnect, model, Schema } = require('mongoose');
const { Manager, Worker, Geolocation } = require('./mongodb_models');

class Database {
    constructor() {
        connect(db_link, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => { console.log('Connected to the database'); })
            .catch(() => { console.error('Failed to connect'); });
    }

    disconnect() {
        disconnect()
            .then(() => { console.log('The connection is closed\n'); })
            .catch(() => { console.error('The connection failed to close\n'); });
    }
}



module.exports = new Database();
module.exports.Managers = model('Managers', new Schema(Manager));
module.exports.Workers = model('Workers', new Schema(Worker));
module.exports.Geolocation = model('Geolocation', new Schema(Geolocation));
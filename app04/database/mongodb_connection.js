/** MongoDB Connection */

const DBLINK = 'mongodb://127.0.0.1:27017/testqldb';
const mongoose = require('mongoose');
const { Manager, Worker, Geolocation } = require('./mongodb_models');

class Database {
    constructor() {
        mongoose.connect(DBLINK, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => { console.log('Successfully connected to a db\n'); })
            .catch(() => { console.log('Failed to connect to the db\n'); });
    }

    disconnect = () => {
        mongoose.disconnect()
            .then(() => { console.log('The connection is closed\n'); })
            .catch(() => { console.log('The connection failed to close\n'); });
    };
}

module.exports = new Database();
module.exports.Managers = mongoose.model('Managers', new mongoose.Schema(Manager));
module.exports.Workers = mongoose.model('Workers', new mongoose.Schema(Worker));
module.exports.Geolocation = mongoose.model('Geolocation', new mongoose.Schema(Geolocation));
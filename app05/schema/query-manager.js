
const {
    GraphQLID
} = require('graphql');

const { ManagerType } = require('./models_ql');
const { Managers } = require('../database/mongodb_connection');

module.exports.findManager = (id) => {
    return Managers.find({ id: id })
        .then((result) => {
            if (result[0]) {
                return result.pop();
            } else {
                throw 'Not found in db';
            }
        })
        .catch((e) => {
            console.error(e);
        });
};

// register

// login

// current

// register worker

// /update-worker/:id

// /delete-worker/:id
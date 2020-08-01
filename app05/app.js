const PORT = 8005;

const express = require('express')();
const { graphqlHTTP } = require('express-graphql');

const root = require('./schema/schema');
const db = require('./database/mongodb_connection');
db;

express
    .use('/graphql', graphqlHTTP({
        schema: root,
        graphiql: true
    }))
    .listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
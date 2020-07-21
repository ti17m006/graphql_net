const PORT = 8000;

const express = require('express')();
const exgraph = require('express-graphql');

const schema = require('./schema/schema');

express
    .use('/graphql', exgraph.graphqlHTTP({
        schema,
        graphiql: true
    }))
    .listen(PORT, () => {
        console.log(`Linstening on a port ${PORT}`);
    })
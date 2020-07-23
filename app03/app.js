
const PORT = 8000;

const express = require('express')();
const { graphqlHTTP } = require('express-graphql');
const schema = require();

express
    .use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
    }))
    .listen(PORT, () => { console.log(`Listening on port ${PORT}`); });

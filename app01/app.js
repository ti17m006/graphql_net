const PORT = 8000;

const app = require('express')();
const exgraph = require('express-graphql');
const schema = require('./schema/schema');

app
    .use('/graphql', exgraph.graphqlHTTP({
        schema,
        graphiql: true
    }))
    .listen(PORT, () => {
        console.log(`Linstening on a port ${PORT}`);
    });
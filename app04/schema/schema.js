
const { GraphQLSchema, GraphQLObjectType } = require('graphql');


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        manager: {

        }
    })
});
module.exports = new GraphQLSchema({
    query: RootQuery
});
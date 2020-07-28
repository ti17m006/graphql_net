
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { ManagerType, WorkerType, GeoType } = require('./models-ql');

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
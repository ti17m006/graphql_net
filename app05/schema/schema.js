
const { GraphQLSchema, GraphQLObjectType, GraphQLID } = require('graphql');

const { ManagerType } = require('./models_ql');
const { findManager } = require('./query-manager');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getManager: {
            type: ManagerType,
            args: { id: { type: GraphQLID } },
            resolve(parents, args) {
                return findManager(parseInt(args.id));
            }
        }

    }
});

// const Mutations = new GraphQLObjectType({
//     name: 'MutationType',
//     field: {

//     }
// });

module.exports = new GraphQLSchema({
    query: RootQuery
    // mutation: Mutations
});
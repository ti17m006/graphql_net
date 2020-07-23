const _ = require('lodash');
const { Managers, Workers } = require('./data');

const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const { Manager, Worker, Geolocation } = require('./models');

const ManagerType = new GraphQLObjectType(Manager(GraphQLID, GraphQLString));
const WorkerType = new GraphQLObjectType(Worker(GraphQLID, GraphQLString));

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        manager: {
            type: ManagerType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(Managers, { id: parseInt(args.id) });
            }
        },
        worker: {
            type: WorkerType,
            args: { id: { type: GraphQLID } },
            resolve(parents, args) {
                return _find(Workers, { id: args.id });
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

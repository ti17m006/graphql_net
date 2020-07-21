const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const _ = require('lodash');
const { Managers, Workers } = require('./data');
const { ManagerSchema, WorkerSchema } = require('./model-schemas');

const ManagerType = new GraphQLObjectType(ManagerSchema(GraphQLID, GraphQLString));
const WorkerType = new GraphQLObjectType(WorkerSchema(GraphQLID, GraphQLString));

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        manager: {
            type: ManagerType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return _.find(Managers, { id: parseInt(args.id) });
            }
        },
        worker: {
            type: WorkerType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return _.find(Workers, { id: parseInt(args.id) });
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
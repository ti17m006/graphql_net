const _ = require('lodash');
const { Managers, Workers, Geolocation01 } = require('./data');
const { GraphQLSchema, GraphQLObjectType, GraphQLID } = require('graphql');
const { ManagerType, WorkerType, GeoType } = require('./models');

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
            resolve(parent, args) {
                return _.find(Workers, { id: parseInt(args.id) });
            }
        },
        geolocation: {
            type: GeoType,
            args: { worker_id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(Geolocation01, { worker_id: parseInt(args.worker_id) });
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

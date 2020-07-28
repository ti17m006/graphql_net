
const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const { ManagerType, WorkerType, GeoType } = require('./models-ql');
const { Managers, Workers, Geolocation } = require('../database/mongodb_connection');
const { Manager } = require('../database/mongodb_models');


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        manager: {
            type: ManagerType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {

            }
        }
    })
});

const Mutations = new GraphQLObjectType({
    name: "mutation",
    fields: () => ({
        addManager: {
            type: ManagerType,
            args: {
                id: { type: GraphQLID },
                fullname: { type: GraphQLString },
                username: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parent, args) {
                let manager = new Managers({
                    id: parseInt(args.id),
                    fullname: args.fullname,
                    username: args.username,
                    password: args.password
                });
                manager.save()
                    .then(() => { console.log(`Manager ${manager} saved successfully`); })
                    .catch(() => { console.error(`Manager ${manager} not saved`); });
                return manager;
            }
        }
    })
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
});
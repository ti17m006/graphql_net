const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = require('graphql');

const Manager = () => {
    return {
        name: 'Manager',
        fields: () => ({
            id: { type: GraphQLID },
            fullname: { type: GraphQLString },
            username: { type: GraphQLString },
            password: { type: GraphQLString }
        })
    };
};

const Worker = () => {
    return {
        name: 'Worker',
        fields: () => ({
            id: { type: GraphQLID },
            fullname: { type: GraphQLString },
            username: { type: GraphQLString },
            password: { type: GraphQLString }
        })
    };
};

const Location = () => {
    return {
        name: 'Location',
        fields: () => ({
            longitude: { type: GraphQLString },
            latitude: { type: GraphQLString }
        })
    };
};

const Geo = () => {
    return {
        name: 'Geo',
        fields: () => ({
            id: { type: GraphQLID },
            worker_id: { type: GraphQLID },
            geo: { type: new GraphQLList(new GraphQLObjectType(Location(GraphQLString))) }
        })
    };
}

module.exports.ManagerType = new GraphQLObjectType(Manager());

module.exports.WorkerType = new GraphQLObjectType(Worker());

// const LocationType = new GraphQLList(new GraphQLObjectType(Location(GraphQLString)));

module.exports.GeoType = new GraphQLObjectType(Geo());
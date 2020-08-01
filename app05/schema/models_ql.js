
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLString
} = require('graphql');

const Manager = {
    name: 'Manager',
    fields: {
        id: { type: GraphQLID },
        fullname: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    }
}

const Worker = {
    name: 'Worker',
    fields: {
        id: { type: GraphQLID },
        fullname: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    }
}

const Location = {
    name: 'Location',
    fields: {
        longitude: { type: GraphQLString },
        latitude: { type: GraphQLString }
    }
};

const Geolocation = {
    name: 'Geolocation',
    fields: {
        id: { type: GraphQLID },
        worker_id: { type: GraphQLID },
        geo: { type: new GraphQLList(new GraphQLObjectType(Location)) }
    }
};



module.exports.ManagerType = new GraphQLObjectType(Manager);
module.exports.WorkerType = new GraphQLObjectType(Worker);
module.exports.GeolocationType = new GraphQLObjectType(Geolocation);
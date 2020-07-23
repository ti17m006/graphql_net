module.exports.Manager = (id, string) => {
    return {
        name: 'Manager',
        fields: () => ({
            id: { type: id },
            fullname: { type: string },
            username: { type: string },
            password: { type: string }
        })
    };
};

module.exports.Worker = (id, string) => {
    return {
        name: 'Worker',
        fields: () => ({
            id: { type: id },
            fullname: { type: string },
            username: { type: string },
            password: { type: string }
        })
    };
};

module.exports.Geolocation = () => {
    return {
        name: 'Geolocation',
        fields: () => ({})
    };
};
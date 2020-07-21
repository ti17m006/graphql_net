
module.exports.ManagerSchema = function (id, string) {
    return {
        name: 'Manager',
        fields: () => ({
            id: {
                type: id
            },
            fullname: {
                type: string
            },
            username: {
                type: string
            },
            password: {
                type: string
            }
        })
    };
}


module.exports.WorkerSchema = function (id, string) {
    return {
        name: 'Worker',
        fields: () => ({
            id: {
                type: id
            },
            fullname: {
                type: string
            },
            username: {
                type: string
            },
            password: {
                type: string
            }
        })
    };
}

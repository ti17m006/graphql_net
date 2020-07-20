
module.exports.Manager = function (int, string) {
    return {
        name: 'Manager',
        fields: () => ({
            id: {
                type: int
            },
            username: {
                type: string
            },
            fullname: {
                type: string
            },
            password: {
                type: string
            }
        })
    }
}
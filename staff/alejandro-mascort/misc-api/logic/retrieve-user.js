require('../utils/polyfills/string')
require('../utils/polyfills/function')
const { find } = require('../data')
const { UnexistenceError} = require('../errors')

const mongo = require('../data/mongo')
const { ObjectId } = mongo

module.exports = userId => {
    String.validate.notVoid(userId)

    return mongo.connect()
        .then(connection => {
            const users = connection.db().collection('users')

            debugger

            return users.findOne({ _id: ObjectId(userId) })
        })
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)

            delete user._id
            delete user.password

            return user
        })
}
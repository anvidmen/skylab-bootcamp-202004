require('plates-commons/polyfills/string')
const { mongoose: { ObjectId }, models: { Restaurant } } = require('plates-data')
const restaurant = require('plates-data/models/schemas/restaurant')
const {errors: {UnexistenceError}} = require('plates-commons')

module.exports = restaurantId => {
    String.validate.notVoid(restaurantId)

    return Restaurant.findOne({ _id: ObjectId(restaurantId) })
        .populate('dishes', 'name')
        .lean()
        .then(restaurant => {
            if (!restaurant) throw new UnexistenceError(`restaurant with id ${restaurantId} does not exist`)

            restaurant.id = restaurant._id.toString()

            delete restaurant._id
           

            return restaurant
        })
}
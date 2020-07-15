const {model} = require('mongoose')
const {product,user, productQuantity, order} = require('./schemas')

 module.exports = {
     Product: model('Product',product),
     User: model('User',user),
     ProductQuantity : model('ProductQuantity',productQuantity),
     Order : model('Order', order)
 }
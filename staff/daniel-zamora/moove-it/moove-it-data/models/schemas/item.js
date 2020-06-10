const { Schema } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },

    // scale:{
    //     type: Number,
    //     default: 1, 
    //     required: false
    // },

    position: { 
        type: [Number],
        required: true,
        default: 0
    },

    orientation: { 
        type: Number,
        required: true,
        default: 0
    },

    width: { 
        type: Number,
        required: true,
        default: 1
    },

    height: { 
        type: Number,
        required: true,
        default: 1
    },

    // img: String 
})
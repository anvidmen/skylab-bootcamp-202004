const { Schema } = require('mongoose')
require('7-potencias-commons/polyfills/url')

module.exports = new Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  danceStyle: {
    type: String,
    required: true
  },

  monday: {
    type: Boolean,
    required: false
  },

  tuesday: {
    type: Boolean,
    required: false
  },

  wednesday: {
    type: Boolean,
    required: false
  },
  thursday: {
    type: Boolean,
    required: false
  },

  friday: {
    type: Boolean,
    required: false
  },

  saturday: {
    type: Boolean,
    required: false
  },

  sunday: {
    type: Boolean,
    required: false
  },

  isOnline: {
    type: Boolean,
    required: true,
    default: false
  },

  isGroupLesson: {
    type: Boolean,
    required: true,
    default: false
  },

  periodicity: {
    type: String,
    required: true,
    default: 'once'
    // validate: [periodicity.validate, 'invalid periodicity']
  },

  hour: {
    type: Number,
    required: true
  },

  minute: {
    type: Number,
    required: true
  },

  day: {
    type: Number,
    required: true
  },

  month: {
    type: Number,
    required: true
  },

  year: {
    type: Number,
    required: true
  }

})

const { env: { SECRET } } = process

const { Router } = require('express')
const { registerUser, authenticateUser, retrieveUser, toggleEscapeRoomPending, toggleEscapeRoomParticipated, toggleEscapeRoomFavorites } = require('./handlers')
const bodyParser = require('body-parser')
const { jwtVerifierExtractor } = require('../middlewares')
const { handleError } = require('../helpers')

const parseBody = bodyParser.json()
const verifyExtractJwt = jwtVerifierExtractor(SECRET, handleError)

const api = new Router()

api.post('/users', parseBody, registerUser)

api.post('/users/auth', parseBody, authenticateUser)

api.get('/users/:userId?', verifyExtractJwt, retrieveUser)

api.patch('/users/pending', parseBody, verifyExtractJwt, toggleEscapeRoomPending)

api.patch('/users/participated', parseBody, verifyExtractJwt, toggleEscapeRoomParticipated)

api.patch('/users/favorites', parseBody, verifyExtractJwt, toggleEscapeRoomFavorites)

module.exports = {
    api
}
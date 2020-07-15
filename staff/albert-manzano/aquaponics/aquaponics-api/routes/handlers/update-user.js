const { updateUser } = require('aquaponics-server-logic')
const { handleError } = require('../../helpers')

module.exports = (req, res) => {
    try {
        const { params: { userId } } = req
        const { body: { userUpdate } } = req
        
        updateUser(userId, userUpdate)
            .then(() => res.status(204).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}
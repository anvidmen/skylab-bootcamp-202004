const { registerSymptom } = require('server-logic')
const { handleError } = require('../../helpers')

module.exports = (req, res) => {
    try {
        const { body: { symptom } } = req

        registerSymptom( symptom )
            .then(id => res.status(200).send({id}))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}

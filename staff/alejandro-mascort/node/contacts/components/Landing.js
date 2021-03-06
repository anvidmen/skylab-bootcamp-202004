const readline = require('readline')
const Feedback = require('./Feedback')
const style = require('./Landing.style')

function Landing(callback) {
    console.log(style.color, '=======')
    console.log(style.color, 'Landing')
    console.log(style.color, '=======')

    const interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    (function chooseAnOption() {
        console.log(style.color)
        interface.question(`Choose an option:
- add contact
- list contacts
- search users
`, value => {
            if (value.trim() !== 'add contact' && value.trim() !== 'list contacts' && value.trim() !== 'search users') {
                Feedback('invalid option', 'error')

                chooseAnOption()
            } else {
                interface.close()
                
                callback(null, value)
            }
        })
    })()
}

module.exports = Landing
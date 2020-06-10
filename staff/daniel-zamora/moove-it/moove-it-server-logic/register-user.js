require('moove-it-commons/polyfills/string')
const {utils: {Email}, errors: {DuplicityError, CredentialsError}} = require('moove-it-commons')
const { models: { User } } = require('moove-it-data')
const bcrypt = require('bcryptjs')


module.exports = (name, surname, email, password, passwordValidate) => {
    String.validate.notVoid(name)
    String.validate.notVoid(surname)
    String.validate.notVoid(email)
    Email.validate(email)
    String.validate.notVoid(password)
    String.validate.notVoid(passwordValidate)

    return (async () => {
        const user = await User.findOne({ email })

        if(user) throw new DuplicityError (`${email} already exist`)

        if(password !== passwordValidate) throw new CredentialsError ('Passwords does not match')
    
        const hash = await bcrypt.hash(password, 10)
    
        await User.create({ name, surname, email, password: hash})
    })()
      
}   
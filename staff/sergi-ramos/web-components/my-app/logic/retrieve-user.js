const retrieveUser = (email) => {
    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (!EMAIL_REGEX.test(email)) throw new Error(email + ' is not an e-mail')
    debugger
    const user = users.find( (user) => {
        return user.email === email
    })
    const { name, surname, email: _email } = user
    return { name, surname, _email }
}
require('../utils/polyfills/string')
require('../utils/polyfills/function')
require('../utils/polyfills/json')
const fs = require('fs')
const path = require('path')
const { Files: { deleteFilesByExtensionFromDirectory }, uid } = require('../utils')

module.exports = target => {
    function find(filter, callback) { // filter => { name: 'pepito', surname: 'grillo' }
        if (typeof filter !== 'object') throw new TypeError(`${filter} is not an object`)
        Function.validate(callback)

        fs.readdir(path.join(__dirname, target), (error, files) => {
            if (error) return callback(error)

            files = files.filter(file => path.extname(file) === '.json')

            const results = []

            if (!files.length) return callback(null, results)

            let i = 0;

            (function readFile() {
                fs.readFile(path.join(path.join(__dirname, target), files[i]), 'utf8', (error, json) => {
                    if (error) return callback(error)

                    const existing = JSON.parse(json)

                    const keys = Object.keys(filter)

                    let matches = true

                    for (let j = 0; j < keys.length && matches; j++) {
                        const key = keys[j]

                        const value = filter[key]

                        matches = existing[key] === value
                    }

                    if (matches) {
                        results.push(existing)
                    }

                    if (++i < files.length) return readFile()

                    callback(null, results)
                })
            })()
        })
    }

    function deleteMany(callback) {
        deleteFilesByExtensionFromDirectory(path.join(__dirname, target), '.json', error => {
            if (error) return callback(error)

            callback()
        })
    }

    function create(data, callback) {
        data.id = uid()

        fs.writeFile(path.join(path.join(__dirname, target), `${data.id}.json`), JSON.prettify(data), error => {
            if (error) return callback(error)

            callback(null, data.id)
        })
    }

    
    function update(id, data) {
        String.validate.notVoid(id)
        
        if(!data instanceof Object) return reject(new TypeError(`${data} is not an object`))
        
        return new Promise((resolve, reject) => {
            
            data.id = id
            fs.readFile(path.join(path.join(__dirname, target), `${id}.json`), (error, user) => {
                if (error) return reject(error)
                
                const userData = JSON.parse(user)
                const keys = Object.keys(data)
                const values = Object.values(data)
                
                keys.forEach((key, i) => userData[key] = values[i])
                
                fs.writeFile(path.join(path.join(__dirname, target), `${id}.json`), JSON.prettify(userData), error => {
                    if (error) return reject(error)
        
                    resolve()
                })
            })
        })
    }

    function remove(id, callback) {
        fs.unlink(path.join(path.join(__dirname, target), `${id}.json`), error => {
            if (error) return callback(error)

            callback(null)
        })
    }

    return {
        find,
        deleteMany,
        create,
        update,
        remove
    }
}
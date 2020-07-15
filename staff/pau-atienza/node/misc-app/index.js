//Libraries
const express = require('express')
const app = express()

//Components
const {App, Home, Search, ListContacts, AddContact, Feedback, ListStickies, AddSticky, 
Register, Login, ListUsers, ContactDetails, NotFound404} = require('./components')

//Logic
const {addContact, registerUser, search, addSticky, listContacts, listStickies, authenticateUser, deleteFile} = require('./logic')

app.use(express.static('public'))

//TODO middleware que chequeee que el id de la cookie existe

app.get('/home', (req, res) =>{
    const cookie = req.header('cookie')

    if(!cookie) return res.redirect('/login')
    
    const [username, id] = cookie.split('=')

    if (!id) return res.redirect('/login')
    
    res.send(App(Home(username)))
})

app.get('/register', (req, res)=>{
    
    res.send(App(Register()))
})

app.post('/register',(req, res)=>{
    req.on('data' , data =>{
        const arrList = decodeURIComponent(data.toString()).split('&')

        let obj = {};
        arrList.forEach(element =>{
            const split = element.split('=')
            obj[split[0]] = split[1]
        })
        try{
            registerUser(obj, (error,id)=>{
                if(error) return res.send(App(Feedback("Fail:(",'error')))
                const {username} = obj
                res.send(App(Feedback(`User ${username} created!`)))
            })
        }catch(error){
            if(error) return res.send(App(Feedback("Fail:(",'error')))  
        }
    })                
})

app.get('/login', (req, res)=>{
    res.send(App(Login()))
})

app.post('/login',(req, res)=>{

    req.on('data' , data =>{
        const arrList = decodeURIComponent(data.toString()).split('&')

        let obj = {};
        arrList.forEach(element =>{
            const split = element.split('=')
            obj[split[0]] = split[1]
        })

        try{
            authenticateUser(obj, (error,user)=>{
                if(error) return res.send(App(Feedback("Fail:(",'error')))
                if (!user) return res.send(App(Feedback("Wrong e-mail or password",'warning')))
               
                const {username, id} = user
                res.cookie(`${username}`, id)
                res.redirect('/home') 
            })
        }catch(error){
            if(error) return res.send(App(Feedback("Fail:(",'error')))  
        }
    })                
})

app.get('/users', (req, res) => {
    const cookie = req.header('cookie')

    if(!cookie) return res.redirect('/login')

    const {url} = req
    if (url.includes('?')){
        const [, queryString] = url.split('?')
        const [, query] = queryString.split('=')
        const [,id] = cookie.split('=')
        const string = "users"
        try{
            search(id, query, string, (error, users) => {
                if (error) return res.send(App(`${Search(string)}${ListUsers(users)}${Feedback(error.message, 'error')}`))
                res.send(App(`${Search(string, query)}${ListUsers(users)}`))
            })
        }catch(error){
            if(error) return res.send(App(Feedback("Fail:(",'error')))  
        }
    }
    else{
        const string = "users"
        res.send(App(`${Search(string)}`))
    }     
})

app.post("/contact-details", (req, res) => {
    const cookie = req.header('cookie')

    if(!cookie) return res.redirect('/login')

    req.on('data', data=>{
        let [, contact] = decodeURIComponent(data.toString()).split('=')
        contact = JSON.parse(contact.split('/')[0])
        res.send(App(ContactDetails(contact)))
    })
})

app.post("/contact-delete", (req, res) => {
    const cookie = req.header('cookie')

    if(!cookie) return res.redirect('/login')

    req.on('data', data=>{
        const string = 'contacts'
        let [, contact] = decodeURIComponent(data.toString()).split('=')
        contact = JSON.parse(contact.split('/')[0])
        try{
            deleteFile(contact.uniqueid, string, deleteerror => {
                const [,id] = cookie.split('=')
                listContacts(id, (error, contacts)=>{
                    if (deleteerror)  return res.send(App(`${Search()}${Feedback(deleteerror.message, 'error')}`))
                    if (error) return res.send(App(`${Search(string)}${Feedback(error.message, 'error')}`))
                    res.send(App(`${Search(string)}${ListContacts(contacts)}${Feedback('Contact deleted')}`))
                })
            })
        }catch(error){
            if(error) return res.send(App(Feedback("Fail:(",'error')))  
        }       
    })
})

app.get('/contacts', (req, res) => {
    const cookie = req.header('cookie')

    if(!cookie) return res.redirect('/login')

    const {url} = req
    if (url.includes('?')){
        const [, queryString] = url.split('?')
        const [, query] = queryString.split('=')
        const [,id] = cookie.split('=')
        const string = "contacts"

        try{
            search(id, query, string,(error, contacts) => {
                if (error) return res.send(App(`${Search(string)}${ListContacts(contacts)}${Feedback(error.message, 'error')}`))
    
                res.send(App(`${Search(string, query)}${ListContacts(contacts)}`))
            })
        }catch(error){
            if(error) return res.send(App(Feedback("Fail:(",'error')))  
        } 
        
    }
    else{
        const [,id] = cookie.split('=')
        const string = "contacts"

        try{
            listContacts(id, (error, contacts)=>{
                if (error) return res.send(App(`${Search(string)}${ListContacts()}${Feedback(error.message, 'error')}`))
                res.send(App(`${Search(string)}${ListContacts(contacts)}`))
            })
        }catch(error){
            if(error) return res.send(App(Feedback("Fail:(",'error')))  
        } 
    }       
})

app.get('/add-contact',(req, res)=>{
    const cookie = req.header('cookie')

    if(!cookie) return res.redirect('/login')
    else res.send(App(AddContact()))
})

app.post('/add-contact',(req, res)=>{
    const cookie = req.header('cookie')

    if(!cookie) return res.redirect('/login')
    req.on('data' , data =>{
        
        const arrList = data.toString().replace('%40','@').split('&')

        let contact = {};
        arrList.forEach(element =>{
            const split = element.split('=')
            contact[split[0]] = split[1]
        })
        const [,id] = cookie.split('=')
        contact.id = id
        try{
            addContact(contact, (error,id)=>{
                if(error)return res.send(App(`${AddContact()}${Feedback("Fail:(",'error')}`))
                
                const {name} = contact
                res.send(App(`${AddContact()}${Feedback(`Contact ${name} created!`)}`))
            })  
        }catch(error){
            if(error) return res.send(App(Feedback("Fail:(",'error')))  
        } 
    })                
})

app.get('/stickies', (req, res) => {
    const cookie = req.header('cookie')

    if(!cookie) return res.redirect('/login')

    const {url} = req
    if (url.includes('?')){
        const [, queryString] = url.split('?')
        const [, query] = queryString.split('=')
        const [,id] = cookie.split('=')
        const string = "stickies"
        try{
            search(id, query, string,(error, stickies) => {
                if (error) return res.send(App(`${Search(string)}${Feedback(error.message, 'error')}`))
    
                res.send(App(`${Search(string, query)}${ListStickies(stickies)}`))
            })
        }catch(error){
            if(error) return res.send(App(Feedback("Fail:(",'error')))  
        } 
    }
    else{
        const [,id] = cookie.split('=')
        try{
            listStickies(id, (error, stickies)=>{
                const string = "stickies"
                if (error) return res.send(App(`${Search(string)}${Feedback(error.message, 'error')}`))
                res.send(App(`${Search(string)}${ListStickies(stickies)}`))
            })
        }catch(error){
            if(error) return res.send(App(Feedback("Fail:(",'error')))  
        } 
    }       
})

app.get('/add-sticky',(req, res)=>{

    const cookie = req.header('cookie')

    if(!cookie) return res.redirect('/login')
    res.send(App(AddSticky()))
})

app.post('/add-sticky',(req, res)=>{
    const cookie = req.header('cookie')

    if(!cookie) return res.redirect('/login')

    req.on('data' , data =>{
        
        const arrList = data.toString().split('&')

        let sticky = {};
        arrList.forEach(element =>{
            const [key, value] = element.split('=')
            sticky[key] = decodeURIComponent(value.split('+').join(' '))
        })
        
        const [,id] = cookie.split('=')
        sticky.id = id
        try{
            addSticky(sticky, (error)=>{
                if(error){ return res.send(App(Feedback("Fail:(",'error')))
                }else{
                    const {tag} = sticky
                    res.send(App(`${AddSticky()}${Feedback(`Sticky "${tag}" created!`)}`))
                }
            })
        }catch(error){
            if(error) return res.send(App(Feedback("Fail:(",'error')))  
        } 
    })
})

app.post('/logout', (req, res) => {
    res.clearCookie('userId')

    res.redirect('/login')
})

app.get('\*', (req,res)=>{
    res.status(404).send(App(NotFound404()))
})

app.listen(8080)
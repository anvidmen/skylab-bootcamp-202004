"use strict"

describe("getcurrentUser",() => {
    beforeEach(() => {
        expect(localStorage.trello_token).to.not.be.undefined
        Trello.setToken(localStorage.trello_token)
    })
              
    it("should return the info about pepitogrillo", (done) => {
        getcurrentUser((user) => {
            expect(user.fullName).to.equal("Pepito Grillo")
            expect(user.id).to.equal("5eb3ec705c0d190c3dd2cc89")
            expect(user.username).to.equal("pepitogrilloskylab")
            done()
        },() => {
            expect(true).to.equal(false)
            done()
        })
    })

    it("should throw an error if called with the wrong type of parameters", () => {
        expect(function() {
            getcurrentUser(undefined, () => {})
        }).to.throw(TypeError, undefined + " is not a function")
       
        expect(function(){
            getcurrentUser("notafunction", () => {})
        }).to.throw(TypeError, "notafunction" + " is not a function")
        
        expect(function(){
            getcurrentUser(() => {}, undefined)
        }).to.throw(TypeError, undefined + " is not a function")
        
        expect(function(){
            getcurrentUser(() => {}, "notafunction")
        }).to.throw(TypeError, "notafunction" + " is not a function")
    })

    it("should throw an error if Trello.token() is not defined",() => {
        const token = Trello.token()

        expect(function() {
            Trello.setToken(undefined)
            getcurrentUser(() => {}, () => {})
        }).to.throw(Error,"Trello does not include a token")
        Trello.setToken(token)
    })

    it("should call onFailure when called and the stored token is invalid", (done) => {
        const token = Trello.token()

        Trello.setToken("12345678901234567890123456789012")
        getcurrentUser(() => {
            Trello.setToken(token)
            expect(true).to.equal(false)
            done()
        },(error) => {
            expect(error.responseText).to.equal("invalid token")
            expect(error.status).to.equal(401)
            expect(error.statusText).to.equal("error")
            Trello.setToken(token)
            done()
        })
    })
})
function Landing(onRegister, onLogin) {
    const temp = document.createElement('div')

    temp.innerHTML = `<section class="landing">
    <a href="">Register</a> or <a href="">Login</a>
</section>`

    const container = temp.firstChild

    // const anchors = container.querySelectorAll('a')
    // const register = anchors[0]
    // const login = anchors[1]

    const [register, login] = container.querySelectorAll('a')

    register.addEventListener('click', function(event) {
        event.preventDefault()

        onRegister()
    })

    login.addEventListener('click', function(event) {
        event.preventDefault()

        onLogin()
    })

    return container
}
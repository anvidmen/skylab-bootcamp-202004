class Login extends Component {
    constructor(onSubmit, onRegister) {
        super(`<section class="login">
    <h1>Login</h1>
    <form>
    <input type="email" name="email" placeholder="e-mail" required>
        <input type="password" name="password" placeholder="password" required>
        <button>Submit</button>
        or <a href="">Register</a>
    </form>
</section>`)

        const form = this.container.querySelector('form')

        let feedback

        form.addEventListener('submit', function (event) {
            event.preventDefault()

            let { email, password } = event.target

            email = email.value
            password = password.value

            try {
                onSubmit(email, password)

                cleanUp()
            } catch (error) {
                if (!feedback) {
                    feedback = new Feedback(error.message, 'error')

                    this.container.append(feedback.container)
                } else feedback.innerText = error.message
            }
        }.bind(this))

        const cleanUp = function () {
            form.email.value = ''
            form.password.value = ''

            if (feedback) {
                this.container.removeChild(feedback.container)

                feedback = undefined
            }
        }.bind(this)

        const register = this.container.querySelector('a')

        register.addEventListener('click', function (event) {
            event.preventDefault()

            onRegister()

            cleanUp()
        })
    }
}
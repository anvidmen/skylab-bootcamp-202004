const {useState} = React;

function Register ({onRegister,onGoToLogin}) {

    const [error, setError] = useState('')
    

    const handleSubmit = event => {
        event.preventDefault()

        let { name, surname, email, password } = event.target

        name = name.value
        surname = surname.value
        email = email.value
        password = password.value

        try {
            //this.props.onSubmit(name, surname, email, password)
            registerUser(name, surname, email, password, error => {
                if (error) return setError(error.message)

                onRegister()
            })
        } catch ({ message }) {
            setError(message)
        }
    }

    const handleGoToLogin = event => {
        event.preventDefault()

        onGoToLogin()
    }


        return <section className="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" required pattern="[A-Za-z]{1,20}" />
                <input type="text" name="surname" placeholder="surname" required pattern="[A-Za-z]{1,20}" />
                <input type="email" name="email" placeholder="e-mail" required />
                <input type="password" name="password" placeholder="password" required minLength="8" />
                <button>Submit</button>
                or <a href="" onClick={handleGoToLogin}>Login</a>

                {error && <Feedback message={error} level="error" />}
            </form>
        </section>
    
}
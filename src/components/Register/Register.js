import React from 'react';
import styles from '../SignIn/SignIn.module.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEmailChange = event => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = event => {
        this.setState({ password: event.target.value });
    }

    onNameChange = event => {
        this.setState({ name: event.target.value })
    }

    onSubmitRegister = event => {
        event.preventDefault();
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        return (
            <main className={styles.formContainer}>
                <form className={styles.form}>
                    <fieldset id="sign_up" className={styles.signInFields}>
                        <legend>Sign up</legend>
                        <div>
                            <label className="label" htmlFor="name">Name</label>
                            <input 
                                className="input" 
                                type="text" 
                                name="name"  
                                id="name"
                                onChange={this.onNameChange}>
                            </input>
                        </div>
                        <div>
                            <label className="label" htmlFor="email-address">Email</label>
                            <input 
                                className="input" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.onEmailChange}>
                            </input>
                        </div>
                        <div>
                            <label className="label" htmlFor="password">Password</label>
                            <input 
                                className="input" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange}>
                            </input>
                        </div>
                    </fieldset>
                    <div className={styles.buttonContainer}>
                        <input 
                            className="button" 
                            onClick={this.onSubmitRegister} 
                            type="submit" 
                            value="Sign up">
                        </input>
                    </div>
                </form>
            </main>
        )
    }
    
}

export default Register;
import React, { useReducer } from 'react';
import styles from './SignIn.module.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = event => {
        this.setState({ signInEmail: event.target.value });
    }

    onPasswordChange = event => {
        this.setState({ signInPassword: event.target.value });
    }

    onSubmitSignIn = event => {
        event.preventDefault();
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
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
                        <legend>Sign In</legend>
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
                    <div>
                        <input 
                            className="button" 
                            onClick={this.onSubmitSignIn} 
                            type="submit" 
                            value="Sign in">
                        </input>
                    </div>
                    <div>
                        <p className="link" onClick={() => this.props.onRouteChange('register')} >Sign up</p>
                    </div>
                </form>
            </main>
        )
    }
    
}

export default SignIn;
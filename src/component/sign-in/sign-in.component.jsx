import React from 'react';
import './sign-in.style.scss';

import Input from '../input/input.component';
import Button from '../button/button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange(e) {
        console.log(e);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Sign in with your email and password</h2>

                <form onSubmit={this.onSubmit}>
                    <Input type="text"
                        name="email"
                        label="Email"
                        placeholder="user@domain.com"
                        onChange={this.onChange}
                        value={this.state.email} />

                    <Input type="password"
                        name="password"
                        label="Password"
                        placeholder="Your Password"
                        onChange={this.onChange}
                        value={this.state.password} />

                    <div className="login-btn-container">
                        <Button type="submit" text="Login" onSubmit={this.onSubmit} />
                        <Button type="button" text="Sign-In With Google" onClick={() => signInWithGoogle()} />
                    </div>
                </form>
            </div>
        );
    }

}
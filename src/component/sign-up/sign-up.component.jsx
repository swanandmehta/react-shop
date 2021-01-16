import React from 'react';

import Input from '../input/input.component';
import Button from '../button/button.component';

import { signUpWithEmail } from '../../firebase/firebase.utils';

export class SignUp extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onChange = (event) => {
        this.setState({[event.target.name] : event.target.value});

    }

    onSubmit = (event) => {
        event.preventDefault();
        signUpWithEmail(this.state.email, this.state.password, this.state.name);
    }

    render() {
        return (
            <div>
                <h2>Sign up with your email and password</h2>

                <form onSubmit={this.onSubmit}>
                    <Input type="text"
                        name="name"
                        label="Name"
                        placeholder="John Smith"
                        onChange={this.onChange}
                        value={this.state.name}
                        required />

                    <Input type="email"
                        name="email"
                        label="Email"
                        placeholder="user@domain.com"
                        onChange={this.onChange} 
                        value={this.state.email}
                        required/>

                    <Input type="password"
                        name="password"
                        label="Password"
                        placeholder="Your Password"
                        onChange={this.onChange} 
                        value={this.state.password}
                        required/>

                    <Button type="submit" text="Sign-up" onSubmit={this.onSubmit} />
                </form>
            </div>
        );
    }

}
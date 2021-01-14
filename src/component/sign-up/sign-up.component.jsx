import React from 'react';

import Input from '../input/input.component';
import Button from '../button/button.component';

export class SignUp extends React.Component {

    constructor() {
        super()
        this.state = {
            firstname: '',
            lastName: '',
            email: '',
            password: '',
        }
    }

    onChange(e) {
        console.log(e);
    }

    onSubmit(e) {
        console.log(e);
    }

    render() {
        return (
            <div>
                <h2>Sign up with your email and password</h2>

                <form onSubmit={this.onSubmit}>
                    <Input type="text"
                        name="firstName"
                        label="First Name"
                        placeholder="John"
                        onChange={this.onChange}
                        value={this.state.firstname}
                        required />

                    <Input type="text"
                        name="lastName"
                        label="Last Name"
                        placeholder="Smith"
                        onChange={this.onChange}
                        value={this.state.lastName} 
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
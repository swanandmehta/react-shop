import React from 'react';

import Input from '../input/input.component';
import Button from '../button/button.component';

export class SignIn extends React.Component {

    constructor(){
        super()
        this.state = {
            username: '',
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
                        id="username" 
                        label="Email" 
                        placeholder="user@domain.com" 
                        onChange={this.onChange} />
                    
                    <Input type="password" 
                        id="password" 
                        label="Password" 
                        placeholder="Your Krown Password" 
                        onChange={this.onChange} />

                    <Button type="submit" text="Login" onSubmit={this.onSubmit}/>
                </form>
            </div>
        );
    }

}
import React from 'react';

import Input from '../input/input.component';
import Button from '../button/button.component';

export class SignIn extends React.Component {

    constructor(){
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
                        value={this.state.email}/>
                    
                    <Input type="password" 
                        name="password" 
                        label="Password" 
                        placeholder="Your Password" 
                        onChange={this.onChange} 
                        value={this.state.password}/>

                    <Button type="submit" text="Login" onSubmit={this.onSubmit}/>
                </form>
            </div>
        );
    }

}
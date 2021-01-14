import React from 'react';

export class SignUp extends React.Component {

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
        console.log(e);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="username" id="username" onChange={this.onChange}/>
                <input type="password" name="password" id="password" onChange={this.onChange}/>
            </form>
        );
    }

}
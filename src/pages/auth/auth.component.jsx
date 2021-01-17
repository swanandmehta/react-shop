import './auth.style.scss';
import React from 'react';

import { SignIn } from "../../component/sign-in/sign-in.component";
import { SignUp } from "../../component/sign-up/sign-up.component";

class Auth extends React.Component {

    componentDidUpdate() {
    }

    render() {
        return (
            <div className="auth">
                <div className="sign-in">
                    <SignIn />
                </div>
                <div className="sign-up">
                    <SignUp />
                </div>
            </div>
        );
    }
};

export default Auth;
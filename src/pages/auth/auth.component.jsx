import './auth.style.scss';
import { SignIn } from "../../component/sign-in/sign-in.component";
import { SignUp } from "../../component/sign-up/sign-up.component";

export const Auth = () => {
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
};
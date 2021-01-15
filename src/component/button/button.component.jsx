import './button.style.scss';

const Button = ({text, ...other}) => {
    return (
        <div className="button-container">
            <button className="button" {...other} >
                {text.toUpperCase()}
            </button>
        </div>
    );
};

export default Button;
import './button.style.scss';

const Button = ({type, text, onSubmit, ...other}) => {
    return (
        <div className="button-container">
            <button className="button" type={type} onSubmit={onSubmit} {...other} >
                {text}
            </button>
        </div>
    );
};

export default Button;
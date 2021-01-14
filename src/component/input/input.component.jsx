import './input.style.scss';

const Input = ({type, id, onChange, placeholder, label, ...other}) => {
    return (
        <div className="input-container">
            {
                label != null ? 
                <label for={id} className="label">{label}</label> : null 
            }
            <input className="input" 
                type={type} 
                id={id} 
                name={id} 
                placeholder={placeholder} 
                onChange={onChange} 
                {...other} />
        </div>
    );
}

export default Input;
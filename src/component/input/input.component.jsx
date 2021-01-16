import './input.style.scss';

const Input = ({type, name, onChange, placeholder, label, ...other}) => {
    return (
        <div className="input-container">
            {
                label != null ? 
                <label className="label">{label}</label> : null 
            }
            <input className="input"
                autoComplete='on' 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                onChange={onChange} 
                {...other} />
        </div>
    );
}

export default Input;
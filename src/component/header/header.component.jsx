import './header.style.scss';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Link className="header-menu" to="/">
                    <Logo className='logo' />
                </Link>
            </div>
            <div className="menu-container">
                <Link className="header-menu" to="/shop">SHOP</Link>
                <Link className="header-menu" to="/contact">CONTACT</Link>
                <Link className="header-menu" to="/sign-up">SIGN IN</Link>
                <Link className="header-menu" to="/cart">CART</Link>
            </div>
        </header>
    )
}
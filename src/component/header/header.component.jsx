import './header.style.scss';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userLogout } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
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
                {
                    currentUser == null ?
                        <Link className="header-menu" to="/auth">SIGN IN</Link> :
                        <Link className="header-menu" to="/" onClick={() => userLogout()}>LOGOUT</Link>
                }

                <Link className="header-menu" to="/cart">CART</Link>
            </div>
        </header>
    )
};

const mapStateToProps = (state) => {
    return  {
        currentUser: state.user.activeUser
    };
};

export default connect(mapStateToProps)(Header);
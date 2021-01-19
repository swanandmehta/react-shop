import './header.style.scss';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userLogout } from '../../firebase/firebase.utils';
import HeaderCartContainer from '../header-cart-container/header-cart-container.component';
import { toggleCart } from '../../redux/cart/cart.action';

const Header = ({ currentUser, showCart, toggleCartHandler }) => {
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

                <div className="header-menu" onClick={() => toggleCartHandler()}>CART</div>
            </div>
            {
                showCart ? <HeaderCartContainer /> : null
            }
            
        </header>
    )
};

const mapStateToProps = (state) => {
    return  {
        currentUser: state.user.activeUser,
        showCart: state.cart.visible
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHandler: () => dispatch(toggleCart()) 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
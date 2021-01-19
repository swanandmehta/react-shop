import { connect } from 'react-redux';

import HeaderCartItem from '../header-cart-item/header-cart-item.component';
import Button from '../button/button.component';

import './header-cart-container.style.scss';

const HeaderCartContainer = ({cart}) => {
    return  (
        <div className="header-cart-container">
            {
                cart.map(element => <HeaderCartItem key={element.id} element={element} />)
            }

            <div className="cart-checkout">
                <Button text="Checkout"></Button>
            </div>
        </div>
    );
}

const mapStateToProp = (state) => {
    return  {
        cart : state.cart.cart
    }
}

export default connect(mapStateToProp)(HeaderCartContainer);
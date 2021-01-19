import { connect } from 'react-redux';

import HeaderCartItem from '../header-cart-item/header-cart-item.component';
import Button from '../button/button.component';
import { selectItems } from '../../redux/cart/cart.selector';

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
    //console.log("I am being called -carts")
    return  {
        cart : selectItems(state)
    }
}

export default connect(mapStateToProp)(HeaderCartContainer);
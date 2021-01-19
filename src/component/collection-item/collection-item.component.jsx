import './collection-item.style.scss';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';
import Button from '../button/button.component';

const CollectionItem = ({ item, addItemHandler }) => {
    return (
        <div className="item">
            <div className="add-item" >

            </div>
            <div className="product">
                <img className="product-img" src={item.img} alt={item.name} />
            </div>            
            <div className="product-desc">
                <p>{item.name}</p>
                <p>${item.price}</p>
            </div>
            <Button text="Add To Cart" onClick={() => addItemHandler(item)}></Button>            
        </div>
    );
}

const dispatchToProp = (dispatch) => {
    return  {
        addItemHandler: (item) => {
            return dispatch(addItem(item))
        }
    }
}

export default connect(null, dispatchToProp)(CollectionItem);
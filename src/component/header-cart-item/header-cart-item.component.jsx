import './header-cart-item.style.scss';

const HeaderCartItem = ({element}) => {
    return (
        <div className="cart-item">
            <img className="item-img" src={element.img} alt={element.name} />
            <div className="item-details">
                <p className='item-detail'>{element.name}</p>
                <p className='item-detail'>${element.price} X {element.quentity}</p>
                <p className='item-detail'>Total : ${element.price * element.quentity}</p>
            </div>
        </div>
    );
}

export default HeaderCartItem;
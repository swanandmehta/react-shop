import './collection-item.style.scss';

const CollectionItem = ({ name, img, price }) => {
    return (
        <div className="item">
            <div className="product">
                <img className="product-img" src={img} alt={name} />
            </div>
            <div className="product-desc">
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </div>
    );
}

export default CollectionItem;
import './shop.style.scss';

import Collection from "../../component/collection/collection.component"

export const Shop = () => {
    return (
        <div className="shop">
            <Collection type='hats' />
            <Collection type='jackets' />
            <Collection type='sneakers' />
            <Collection type='womens' />
            <Collection type='mens' />
        </div>
    );
};
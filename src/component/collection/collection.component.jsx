import './collection.style.scss';
import React from 'react';
import SHOP_DATA from './collection.data';
import CollectionItem from '../collection-item/collection-item.component';

class Collection extends React.Component {

    constructor({type}){
        super()
        this.state = {
            products : SHOP_DATA[type]
        }
    }

    render() {
        const { products } = this.state;
        return (
            <div className="collection">
                <h3 className="title">{this.props.type.toUpperCase()}</h3>
                {
                    products.map(element => <CollectionItem key={element.id} item={element} />)
                }
            </div>
        );
    }

}

export default Collection
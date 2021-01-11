import React from 'react';

import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component';
import hats from "../../img/hats.jpg";
import jacket from "../../img/jacket.jpg";
import men from "../../img/men.jpg";
import sniker from "../../img/sniker.jpg";
import women from "../../img/women.jpg";


export class Directory extends React.Component {

    constructor(){
        super()

        this.state = {
            sections: [
              {
                title: 'hats',
                imageUrl: hats,
                id: 1,
                size: 'small',
                linkUrl: 'hats'
              },
              {
                title: 'jackets',
                imageUrl: jacket,
                id: 2,
                size: 'small',
                linkUrl: 'jackets'
              },
              {
                title: 'sneakers',
                imageUrl: sniker,
                id: 3,
                size: 'small',
                linkUrl: 'sneakers'
              },
              {
                title: 'womens',
                imageUrl: women,
                id: 4,
                size: 'large',
                linkUrl: 'womens'
              },
              {
                title: 'mens',
                imageUrl: men,
                id: 5,
                size: 'large',
                linkUrl: 'mens'
              }
            ]
          };
    }

    render() {
        return (
            <div className='directory'>
                {
                    this.state.sections.map(
                        ({id, ...other}) => {
                           return <MenuItem key={id} {...other}/>
                        }
                    )
                }
            </div>
        );
    }

}
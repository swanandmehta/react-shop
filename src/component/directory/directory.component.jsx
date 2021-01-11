import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

export class Directory extends React.Component {

    constructor(){
        super()

        this.state = {
            sections: [
              {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                size: 'small',
                linkUrl: 'hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                size: 'small',
                linkUrl: 'jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                size: 'small',
                linkUrl: 'sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large',
                linkUrl: 'womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
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
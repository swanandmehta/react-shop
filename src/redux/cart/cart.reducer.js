
const INIT = {
    cart : [],
    visible: false
}

const cartReducer = (state = INIT, action) => {
    switch(action.type) {
        case 'ADD_ITEM' : 
            const items = [...state.cart]; 
            const item = items.find((element) => {
                if(action.payload.id === element.id){
                    return true;
                }
                return false;
            });

            if(item !== undefined) {
                item.quentity = item.quentity + 1;
            }else {
                const newItem =  {...action.payload};
                newItem.quentity = 1;
                items.push(newItem);
            }

            return {
                ...state,
                cart : items
            }
        case 'TOGGLE_CART' : 
            return {
                ...state,
                visible: !state.visible
            }

        default : 
            return state;
    }
}

export  {cartReducer};
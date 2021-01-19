const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}

const toggleCart = () => {
    return {
        type: "TOGGLE_CART",
    }
}

export { addItem, toggleCart };
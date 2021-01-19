import { createSelector } from 'reselect';

const selectCart = (state) => {
    return state.cart;
}

export const selectVisible = createSelector(
    [selectCart],
    (cart) => {
        return cart.visible;
    }
)

export const selectItems = createSelector(
    [selectCart],
    (cart) => {
        return cart.cart
    }
)
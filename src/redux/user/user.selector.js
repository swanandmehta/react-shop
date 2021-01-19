import { createSelector } from 'reselect';

const selectUser = (state) => {
    return state.user;
}

export const selectActiveUser = createSelector(
    [selectUser],
    (user) => {
        return user.activeUser;
    }
)
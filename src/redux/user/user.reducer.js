const INIT = {
    activeUser: null
}

const userReducer = (state = INIT, action) => {

    switch(action.type) {
        case 'SET_USER' : return {
            ...state,
            activeUser: action.payload
        }

        default :  return state;
    }

};

export default userReducer;
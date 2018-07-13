const DEFAULT_STATE = {
    loading: false,
    loaded: false,
    error: false,
    mains: [],
    desserts: [],
    toppings: {}
}

export default function reducer(state=DEFAULT_STATE, action) {
    switch (action.type) {
        case "GET_MENU_PENDING": {
            return {...state, loading: true}
        }
        case "GET_MENU_REJECTED": {
            return {...state, loading: false, error: true}
        }
        case "GET_MENU_FULFILLED": {
            let menu = action.payload.data;
            if (typeof menu === 'string' || menu instanceof String) {
                menu = JSON.parse(menu);
            }
            return {
                ...state,
                loading: false,
                loaded: true,
                error: false,
                mains: menu.mains,
                desserts: menu.desserts,
                toppings: menu.toppings
            }
        }
        default: {
            return state
        }
    }
};
const DEFAULT_STATE = {
    diet: "all"
}

export default function reducer(state=DEFAULT_STATE, action) {
    switch (action.type) {
        case "SET_DIET": {
            return {...state, diet: action.payload}
        }
        default: {
            return state
        }
    }
};
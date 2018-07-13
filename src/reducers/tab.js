const DEFAULT_STATE = {
    main: {
        price: 0,
        vegetarian: false,
        vegan: false,
        name: "No Main Selected",
        toppings: null
    },
    toppings: [],
    dessert: null
}

export default function reducer(state=DEFAULT_STATE, action) {
    switch (action.type) {
        case "SET_MAIN": {
            return {...state, main: action.payload, toppings: []}
        }
        case "SET_DESSERT": {
            return {...state, dessert: action.payload}
        }
        case "ADD_TOPPING": {
            let new_toppings = [...state.toppings, action.payload]
            return {...state, toppings: new_toppings}
        }
        case "SET_TOPPINGS": {
            return {...state, toppings: action.payload}
        }
        default: {
            return state
        }
    }
};
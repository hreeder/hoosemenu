import { filterByDiet } from '../util';

export function setMenuItem(type, menu, diet) {
    let entries = filterByDiet(menu, diet)

    let chosen = entries[~~(Math.random()*entries.length)]

    return { type: type, payload: chosen }
}

export function setToppings(newToppings) {
    return { type: "SET_TOPPINGS", payload: newToppings }
}
import { filterByDiet } from '../util';

export function setMenuItem(type, menu, diet) {
    let entries = filterByDiet(menu, diet)

    // Read the ~~ as Math.floor
    // Essentially we're getting a random entry from entries
    let chosen = entries[~~(Math.random()*entries.length)]

    return { type: type, payload: chosen }
}

export function setToppings(newToppings) {
    return { type: "SET_TOPPINGS", payload: newToppings }
}
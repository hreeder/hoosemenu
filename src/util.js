export function filterByDiet(items, diet) {
    switch (diet) {
        case "meat": {
            return items.filter(entry => !entry.vegetarian && !entry.vegan);
        }
        case "vegetarian": {
            return items.filter(entry => entry.vegetarian);
        }
        case "vegan": {
            return items.filter(entry => entry.vegan);
        }
        default: {
            return items;
        }
    }
}
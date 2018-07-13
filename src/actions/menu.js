import axios from 'axios';

export function getMenu() {
    return {
        type: "GET_MENU",
        payload: axios.get("/menu.json")
    }
}
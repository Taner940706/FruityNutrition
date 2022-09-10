import * as api from './api.js';


const host_fruit = 'https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit';
const host_img = 'https://cors-anywhere.herokuapp.com/https://imsea.herokuapp.com/api/1?q=';

export async function getAllFruits() {
    return await api.get(host_fruit + '/all');
}

export async function getFruitById(id) {
    return await api.get(host_fruit + `/${id}`);
}
export async function searchFruitByFamily(query) {
    return await api.get(host_fruit + "/family/" + encodeURIComponent(`${query}`));
}
export async function searchFruitByGenus(query) {
    return await api.get(host_fruit + "/genus/" + encodeURIComponent(`${query}`));;
}
export async function searchFruitByOrder(query) {
    return await api.get(host_fruit + "/order/" + encodeURIComponent(`${query}`));;
}
export async function createFruit(listing) {
    return await api.put(host_fruit, listing);
}
export async function getFruitPicByName(name) {
    return await api.get(host_img + "happy "+`${name}`);
}
export async function searchFruitByName(query){
    return api.get(host_fruit+"/"+ encodeURIComponent(`${query}`))
}







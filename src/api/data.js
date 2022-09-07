import * as api from './api.js';

const host_fruit = 'https://www.fruityvice.com/api/fruit';
const host_img = 'https://imsea.herokuapp.com/api/1?q=';

export async function getAllFruits() {
    return await api.get(host_fruit + '/all');
}
export async function getRecentFruit() {
    return await api.get(host_fruit + '/sortBy=_createdOn%20asc&distinct=name');
}

export async function getFruitById(id) {
    return await api.get(host_fruit + `/${id}`);
}
export async function getFruitByFamily(family) {
    return await api.get(host_fruit + `/family/${family}`);
}
export async function getFruitByGenus(genus) {
    return await api.get(host_fruit + `/genus/${genus}`);
}
export async function getFruitByNutrition(min, max) {
    return await api.get(host_fruit + `nutrition?min=${min}&max=${max}`);
}
export async function createFruit(listing) {
    return await api.put(host_fruit, listing);
}
export async function getFruitPicByName(name) {
    return await api.get(host_img + `${name}`);
}
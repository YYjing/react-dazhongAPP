import {get } from '../get.js';

export function getData() {
    const result = get('/api/homead');
    return result;
}

export function getList(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page);
    return result;
}

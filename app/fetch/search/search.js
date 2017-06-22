import {get } from '../get.js'

export function search(page, city, category, keyword) {
    const str = keyword ? '/' + keyword : '';
    const list = get('/api/search/' + city + '/' + page + '/' + category + str)
    return list;
}

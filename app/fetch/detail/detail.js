import {get } from '../get.js'

export function detailList(id, page) {
    const list = get('/api/detail/comment/' + id + '/' + page)
    return list;
}

export function detailinfo(id) {
    const info = get('/api/detail/info/' + id)
    return info;
}

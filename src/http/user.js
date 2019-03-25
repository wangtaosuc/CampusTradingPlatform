import axios from './http.js'

export const login = (params) => { return axios.post('users/login', params)}
export const register = (params) => { return axios.post('users/register', params)}

// goods
export const addGoods = (params) => { return axios.post('/goods', params)}
export const getStoreGoods = (params) => { return axios.post('/goods/store', params)}
export const getAllGoods = (params) => { return axios.get('/goods', params)}
export const editGoods = (params) => { return axios.post('/goods/:id', params)}
export const undercarriage = (params) => { return axios.post('/goods/pullOff/:id', params)}
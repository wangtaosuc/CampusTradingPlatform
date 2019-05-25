import axios from './http.js'

export const login = (params) => { return axios.post('users/login', params)}
export const register = (params) => { return axios.post('users/register', params)}

// goods
export const addGoods = (params) => { return axios.post('/goods', params)}
export const getStoreGoods = (params) => { return axios.post('/goods/store', params)}
export const getAllGoods = (params) => { return axios.get('/goods', params)}
export const getSingleGood = (params) => { return axios.get(`/goods/${params.id}`)}
export const editGoods = (params) => { return axios.post('/goods/:id', params)}
export const undercarriage = (params) => { return axios.post('/goods/pullOff/:id', params)}

// shopcar
export const addShopCar = (params) => { return axios.post('/shopCar', params)}
export const getShopCar = (params) => { return axios.get('/shopCar', params)}
export const delShopCar = (params) => { return axios.delete(`/shopCar/${params}`, params)}
export const delAll = (params) => { return axios.delete(`/shopCar`, params)}

// community
export const addCommunity = (params) => { return axios.post('/community', params)}
export const getCommunity = (params) => { return axios.get('/community/info', params)}

//manager
export const getAllUser = (params) => {return axios.get('/users', params)}
export const resetPW = (params) => { return axios.get(`/users/resetPW/${params}`)}


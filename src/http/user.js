import axios from './http.js'

export const login = (params) => { return axios.post('users/login', params)}
import requests from '../api/request.js'

export const userLogin = (params) => requests({url: '/users/login', method: 'get', params })
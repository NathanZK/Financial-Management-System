import http from './httpService'
import config from '../config.json'

export function register(user){
    return http.post(`${config.apiEndpoint}user`, {
        email: user.username,
        password: user.password,
        name: user.name
    })
}


export function getUser(token){
    return http.get(`${config.apiEndpoint}user`)
}
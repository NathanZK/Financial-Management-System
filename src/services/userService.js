import http from './httpServices' 
import config from '../config.json'

export function register(user){
    console.log(user)
    http.post(`${config.apiEndpoint}user/`, {user})
    .then(res=> console.log(res))
    .catch(e=> console.log(e.message))
}


export function getUser(token){
    return http.get(`${config.apiEndpoint}user`)
}
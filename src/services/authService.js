import jwtDecode from 'jwt-decode';
import http from './httpServices'
import config from '../config.json'
import { redirect } from 'react-router-dom';

const tokenKey= 'token'

http.setJwt(getJwt())
export async function auth (username, password){
    const {data}=await http.post(`${config.apiEndpoint}token/`, {username, password})
    const {access } = data
    localStorage.setItem(tokenKey, access)
}


export function loginWithJwt (jwt){
    localStorage.setItem(tokenKey, jwt)
}

export function getCurrentUser(){
    try {
        const result =localStorage.getItem(tokenKey)
        const user= jwtDecode(result)
        return user
      } catch (ex) {
        return null
      }
}

export function logout(){
    localStorage.removeItem(tokenKey)
    window.location= '/'
}

function getJwt(){
    return localStorage.getItem('token')
}

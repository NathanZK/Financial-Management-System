import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpServices'

export async function getAllCampaign() {
  
  return await http.get(`${config.apiEndpoint}allposts/`)
}

export async function addCategory({request}){
  const res= await request.formData()
  const submission= {
    name: res.get('name')
  }
  http.post(`${config.apiEndpoint}category/`, submission)
  .then(res=>{console.log(res)})
  .catch(e=> console.log('error submitting'))
  return redirect('/dashboard')
}

export async function editCategory(id, name){
  http.put(`${config.apiEndpoint}category/${id}/`, {name})
  .then(res=> res)
  .catch(e=> console.log(e.message))
  return redirect('/dashboard')
}

export async function deleteCategory(id){
  http.delete(`${config.apiEndpoint}category/${id}/`)
  .then(res=> {console.log(res)})
  .catch(e=> console.log('err'))
  return redirect('/dashboard')
}
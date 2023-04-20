import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpServices'

export async function getExpense() {
  
  return await http.get(`${config.apiEndpoint}expense/`)
}

export async function donate({request}){
    const res= await request.formData()
    const id= res.get('id')
  const submission= {
    amount: res.get('amount'),
  }
  console.log(submission)
  http.post(`${config.apiEndpoint}donation/${id}/`, submission)
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
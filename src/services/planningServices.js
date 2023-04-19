import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpServices'

export async function getPlan() {
  
  return await http.get(`${config.apiEndpoint}plan/`)
}

export async function addPlan({request}){
  const res= await request.formData()
  const submission= {
    name: res.get('name'),
    amount: res.get('amount')
  }
  console.log(submission)
  http.post(`${config.apiEndpoint}plan/`, submission)
  .then(res=>{console.log(res)})
  .catch(e=> console.log('error submitting'))
  return redirect('/dashboard')
}

export async function editPlan(id, name){
  http.put(`${config.apiEndpoint}plan/${id}/`, {name})
  .then(res=> res)
  .catch(e=> console.log(e.message))
  return redirect('/dashboard')
}

export async function deletePlan(id){
  http.delete(`${config.apiEndpoint}plan/${id}/`)
  .then(res=> {console.log(res)})
  .catch(e=> console.log('err'))
  return redirect('/dashboard')
}
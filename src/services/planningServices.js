import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpServices'

export async function getPlan() {
  
  return await http.get(`${config.apiEndpoint}plan/`)
}

export async function addPlan({request}){
  const res= await request.formData()
  const submission= {
    category : res.get('name'),
    amount: res.get('amount')
  }
  console.log(submission)
  http.post(`${config.apiEndpoint}plan/`, submission)
  .then(res=>{console.log(res)})
  .catch(e=> console.log('error submitting'))
  return redirect('/dashboard')
}

export async function editPlan(cId, id, amount){
  const obj= {
    category : cId,
    amount : amount
  }
  console.log(obj)
  http.put(`${config.apiEndpoint}plan/${id}/`, {obj})
  .then(res=> console.log('edited'))
  .catch(e=> console.log(e.message))
  return redirect('/dashboard')
}

export async function deletePlan(id){
  http.delete(`${config.apiEndpoint}plan/${id}/`)
  .then(res=> {console.log(res)})
  .catch(e=> console.log('err'))
  return redirect('/dashboard')
}
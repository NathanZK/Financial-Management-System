import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpServices'

export async function getExpense() {
  
  return await http.get(`${config.apiEndpoint}expense/`)
}

export async function addPost({request}){
  const res= await request.formData()
  const submission= {
    amount: res.get('amount'),
    reason: res.get('reason')
  }
  console.log(submission)
  http.post(`${config.apiEndpoint}post/`, submission)
  .then(res=>{console.log(res)})
  .catch(e=> console.log('error submitting'))
  return redirect('/dashboard')
}

export async function addExpense({request}){
  const res= await request.formData()
  const submission= {
    category : res.get('name'),
    amount: res.get('amount')
  }
  console.log(submission)
  http.post(`${config.apiEndpoint}expense/`, submission)
  .then(res=>{console.log(res)})
  .catch(e=> console.log('error submitting'))
  return redirect('/dashboard')
}
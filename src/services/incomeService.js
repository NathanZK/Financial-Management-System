import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpServices'

export async function getIncome() {
  
  return await http.get(`${config.apiEndpoint}income/`)
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
export async function addIncome({request}){
  const res= await request.formData()
  const submission= {
    category: 1,
    amount: res.get('amount')
  }
  console.log(submission)
  http.post(`${config.apiEndpoint}income/`, submission)
  .then(res=>{console.log(res)})
  .catch(e=> console.log('error submitting'))
  return redirect('/dashboard')
}

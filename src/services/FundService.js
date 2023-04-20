import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpServices'

export async function getCategory() {
  
  return await http.get(`${config.apiEndpoint}category/`)
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

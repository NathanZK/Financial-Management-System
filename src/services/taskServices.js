export const taskLoader  = async () => {
    const res = await fetch('http://localhost:3000/tasks')
  
    return res.json()
  
  }
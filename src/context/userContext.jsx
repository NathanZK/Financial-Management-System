import React, { createContext, useReducer, useEffect, useState } from 'react';

export const UserContext = createContext();
export function userReducer(){
    return null
}

const UserContextProvider = (props) => {
  const [user, setUser] = useState(userReducer, '');
  useEffect( () => {
    const localData = localStorage.getItem('token');
    setUser(localData)
  })
  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
}
 
export default UserContextProvider;
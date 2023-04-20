import React, { createContext, useReducer, useEffect, useState } from 'react';

export const UserContext = createContext();
export function userReducer(){
  switch (action.type) {
    case 'ADD_USER':
      return action.token
    case 'REMOVE_USER':
      return ''
    default:
      return state;
  }
}

const UserContextProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, [], () => {
    return localStorage.getItem('token')
  });
  useEffect(() => {
    localStorage.setItem('token', user);
  }, [user]);
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}
 
export default UserContextProvider;
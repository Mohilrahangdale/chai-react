import { useState } from 'react'
import Login from './components/login'
import Profile from './components/profile'


import './App.css'
import UserContextProvider from './context/userContextProvider'


function App() {
 

  return (
    
     <UserContextProvider>
      <h1>react and chai</h1>
      <Login/>
      <Profile/>
     </UserContextProvider>
    
  )
}

export default App

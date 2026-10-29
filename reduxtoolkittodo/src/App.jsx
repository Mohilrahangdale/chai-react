import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'


function App() {
  
  return (
    <>
      <h1 className="bg-green-500 text-white p-4">Welcome to react redux toolkit</h1>
      <Addtodo />
      <Todos />
    </>
  )
}

export default App

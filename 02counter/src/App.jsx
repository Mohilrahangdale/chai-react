import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'







function App() {
  //let counter = 15;

  let [counter, mohilCounter] = useState(15)//const se value change nhi hoti n isiliye


  const addValue = () => {
    console.log('clicked',counter)
    
    if(counter <20){
      counter = counter + 1;
      mohilCounter(counter);//mohilCounter(counter + 1);
    }
  }
  const removeValue = () => {
    if(counter > 0){
      mohilCounter(counter - 1);
    }
  }

  return (
    <>
    <h1>chai and react</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App

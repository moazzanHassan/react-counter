import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let [counter,setcounter] = useState(8)

  // let counter = 5;
  const addValue = () =>{
  console.log("value added", counter)
  if(counter < 20){
    counter += 1;
  setcounter(counter)
  }else{
    alert("value is greater than 20")
  }
  
  }
  const removeValue = () =>{
    console.log("value added", counter)
    if(counter > 0){
      counter -= 1;
    setcounter(counter)
    }else{
      alert("value is zero")
    }
    
    }

  return (
    <>
      <h1>My name is Moazzan</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
      <footer><p>footer: {counter}</p></footer>
    </>
  )
}

export default App

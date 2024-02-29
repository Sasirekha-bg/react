import Keypad from "./Keypad";
import './App.css'
import { useState } from "react";
export default function App(){
  let [input,setInput] = useState('');
  function handleClick(value){
    setInput(input+value)
  }

  function calculate(){
    setInput(eval(input));
  }

  function handleClear(){
    setInput('');
  }

  function handleDelete(){
    let temp = input.slice(0,-1);
    setInput(temp)
  }

  return (
    <div className="container">
       <h3>Calculator Using React</h3>
       <input type="text" className="output" value={input}></input>
       <Keypad handleClick={handleClick} calculate={calculate} handleClear = {handleClear} handleDelete={handleDelete}/>
    </div>
  )
}
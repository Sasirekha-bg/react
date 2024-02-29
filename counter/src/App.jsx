import { useState } from "react"
import './App.css'
export default function App(){
  let [a,update] = useState(0);
  
  return (
    <div className="main">
      <h1>Counter</h1>
      <div className="btns">
      <button id="dec" disabled={a===0} onClick={()=>{
        if(a>0){
          update(a-1);
        }
      }}>-</button>
      <p id="count">{a}</p>
      <button id="inc" onClick={()=>{
        update(a+1)
      }}>+</button>
      </div>
    </div>
  );
}
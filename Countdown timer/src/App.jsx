import Display from "./Display";

import './App.css'
import { useEffect, useState } from "react";
export default function App() {

  let endTime = new Date(2024,2,2,23,59,59);
  let [currentTime,setCurrentTime] = useState(new Date().getTime())
  let gap = endTime - currentTime;
  let seconds = 1000;
  let minutes = seconds*60;
  let hours = minutes*60;
  let days = hours*24;
  

  let remainingDays = Math.floor(gap/days);
  let remainingHours = Math.floor((gap%days)/hours);
  let remainingMinutes = Math.floor((gap%hours)/minutes);
  let remainingSeconds = Math.floor((gap%minutes)/seconds);

  useEffect(()=>{
    setTimeout(()=>{setCurrentTime(new Date().getTime())},1000)
  },[currentTime])
  
  if(gap === 0){
    alert('Sorry! offer ended')
  }
  
  return (
    <div className="container">
      <h1 className="title">COUNTDOWN TIMER</h1>
      <Display days={remainingDays} hours={remainingHours} min={remainingMinutes} sec={remainingSeconds}/>
    </div>

  )
}

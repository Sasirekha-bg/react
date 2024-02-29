import  './App.css'


export default function App(){
  return (
    <div className="wrapper">
      <h1>Change background</h1>
      <input type="color" onChange={(e)=>{
        let color = e.target.value;
       document.body.style.background=color;
      }}></input>
    </div>
  );
}
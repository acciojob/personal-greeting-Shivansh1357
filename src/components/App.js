
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]=useState("");
  return (
    <div>
        <div>Enter your name:</div>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        {
          name&&<p>Hello {name}!</p>
        }
    </div>
  )
}

export default App

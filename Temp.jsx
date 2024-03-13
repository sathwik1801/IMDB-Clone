import React,{useState} from 'react'
import { useEffect } from 'react';
function Temp() {
    const[count,setCount]=useState(0);
    const[text,setText]=useState('');
    function handleClick(){
        setCount(count+1);
    }
    function handleChange(e){
        setText(e.target.value);
    }
    useEffect(()=>{
        console.log("Effect runs");
        document.title=(`button is clicked ${count} times`);
    },[count])

  return (
    <>
        <h1>Count is :{count}</h1>
        <input type="text" onChange={handleChange} value={text}></input>
        <button onClick={handleClick}>increment</button>
        <h1>{text}</h1>
        
        
    </>
  )
}

export default Temp

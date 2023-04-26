import { useState } from 'react';
import "./App.css";

function Counter(){
  let [Count,setCount] = useState(0);
  let [factor,setFactor] = useState(1);
  const handleIncrement = () =>{
    setCount(Count+factor);
  }
  const handleDecrement = () =>{
    setCount(Count-factor);
  }
  const handleReset = () =>{
    setCount(0);
  }
return (
  <>
    <div>
      <h1>COUNTER APP</h1>
      <h2>{Count}</h2>
      <button onClick={handleIncrement} className='button1'>Increment</button>
      <button onClick={handleDecrement} className='button2'>Decrement</button>
      <button onClick={handleReset} className='button3'>Reset</button>
    </div>
    
    <div>
      Tell Me Factor by which Increment and Decrement should happen <br/>
      <input type="number" 
      value={factor}
      onChange={(e)=>setFactor(parseInt(e.target.value))}/>
    </div>
    </>
  );

}
export default Counter;

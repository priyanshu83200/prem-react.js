
import './App.css';
import {useState} from 'react'
function App() 
{

  const [value,setvalue]= useState(10);
  const [color,setcolor]= useState('cold');

  function add()
  {
     const newval = value+1
     if(newval >=15)
     {
      setcolor('hot')
     }
     setvalue(newval)
  }
  function sub()
  {
     const newval = value-1
     if(newval <15)
     {
      setcolor('cold')
     }
     setvalue(newval)
  }
  return (
    <div className="App">
     <h1>TEMP</h1>
       
        <div className='head'>
          <h2 className={`${color}`}><span>{value}</span></h2>
        </div>
        <div className='idb'>
          <button onClick={add}>+</button>
          <button onClick={sub}>-</button>
        </div>
        
         
    </div>
  );
}

export default App;

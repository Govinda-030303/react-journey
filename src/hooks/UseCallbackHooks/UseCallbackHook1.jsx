import React,{useCallback, useState} from 'react'
import Header from './Header';

function UseCallbackHooks1() {

  const [counter,setCounter]=useState(0)

  // const newFun=()=>{}
    // const newFun=useCallback(()=>{},[]);
    const newFun=useCallback((counter)=>{},[counter]);

  return (
    <div>
      <Header newFun={newFun}/>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(c=>c+1)}>chick me</button>
    </div>
  )
}

export default UseCallbackHooks1
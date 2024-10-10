import React, { useState } from 'react'

function UseStateHook() {
    const [name,setName]=useState("");

    const handleClick=()=>{
      setName("govinda")
    }
    console.log("render")
    return (
      <div>
        <h1>name is :{name}</h1>
        <button onClick={handleClick}>submit</button>
      </div>
    )
}

export default UseStateHook
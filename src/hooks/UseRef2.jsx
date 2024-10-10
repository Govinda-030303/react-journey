import React from 'react'

function UseRef2() {
    const inputElement=useRef();

    const handleClick=()=>{
      console.log(inputElement.current)
      inputElement.current.style.background="blue"
    }
    return(
      <div>
        <input type="text" ref={inputElement}/>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
}

export default UseRef2
import React from 'react'

export default function UseRef1() {
    const [value,setValue]=useState(0)
    // const [count,setCount]=useState(0)
    const count=useRef(0);
    console.log(count);
  
    // useEffect(()=>setCount(c=>c+1))
    useEffect(()=>{
      count.current=count.current+1
    })
    return (
      <div>
        <button onClick={()=>setValue(v=>v-1)}>-1</button>
        <h1>{value}</h1>
        <button onClick={()=>setValue(v=>v+1)}>+1</button>
        <h2>Render count: {count.current}</h2>
      </div>
    )
}

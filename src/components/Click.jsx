import React from 'react'
import { useState } from 'react'
import bob from "../../bob.png"

function Counter() {
  const[count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1000);

  }
    // const creepyase = () => {
    // setCount(count - 1);
    // }
  return (
    <div>
      <h2 className='flex justify-center items-center text-white'><img src="gr.png" alt="" /> {count}</h2>
      <button onClick={increase}><img src={bob} alt="" /></button>
      {/* <button onClick={creepyase}>no click me</button> */}
    </div>
  )
  
}

export default Counter; 
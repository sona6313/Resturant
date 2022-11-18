import React, { useState } from 'react'

export default function Counter() {

    const [count, Setcount] = useState(1)
    function Increment (){
     Setcount(count+ 1)
    }
    function decrement (){
        Setcount(count - 1)
       }
  return (
    <div>
        <button onClick={Increment}>Increment</button>
        <h1>{count}</h1>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

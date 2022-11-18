import React, { useState } from 'react'

export default function Lumin() {
   const [name,setName] = useState("sona")
   const [age,setAge] = useState(67)

   function changeName(){
    setName("afsal")
    setAge(88)
  }
   
  return (
    <div>
      lumin.js {name} {age}
         
        <button onClick={changeName}> ChangeName </button>
        {/* <button onClick={changeAge}> ChangeName </button> */}
    </div>
  )
}

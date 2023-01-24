import React, { useState } from 'react'
import ChildComp from './child-comp'

const ParentComp = () => {
    const [counter, setcounter] = useState(0)
    const handleCounter=(val)=>{
        setcounter(prev=>prev+ val)
    }
  return (
    <div>Counter: {counter}
    <ChildComp handleCounter={handleCounter}/>
    </div>
  )
}

export default ParentComp
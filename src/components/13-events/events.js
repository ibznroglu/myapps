import React from 'react'

const Events = () => {
  const sayHello1 = ()=>{
    alert("Hello")
  }
  const sayHello2 = (name)=>{
    alert(`Hello ${name}`)
  }
  return (
    <div>
      <div onClick={sayHello1} >Say Hello</div>
      <div onClick={()=> sayHello2("Ali")} >Say Hello</div>
    </div>
  )
}

export default Events
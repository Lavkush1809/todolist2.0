import React, { useRef, useState } from 'react'
import './App.css'

export default function Inbox(props) {
  const[newtask,setNewtask]=useState(false)
  const titleRef=useRef()
  const calenderref=useRef()
  const newtaskhandler=()=>{
    setNewtask(true)
  }
  const addhandle=(e)=>{
    e.preventDefault()
    if(titleRef.current.value===""){
      window.alert("Please do add some task")
      return;
    }

    const newObj={
      number: props.list.length+1,
      title: titleRef.current.value,
      date:new Date(calenderref.current.value)
    }
    props.append(newObj)
    setNewtask(false)
  }
  const cancelhandle=()=>{
    setNewtask(false)
  }
  return (
    <div>
     <h1>Inbox</h1>
     {!newtask && (
      <button className='new' onClick={newtaskhandler}>Add New</button>
     )}
     {newtask &&(
      <form className='newTask-box'>
        <input type="text" ref={titleRef}/>
        <div className='button'>
          <button className='new'onClick={addhandle}>Add Task</button>
          <button className='new'onClick={cancelhandle}>Remove</button>
          <input type="date" ref={calenderref} defaultValue="2023-02-04"/>
        </div>
      </form>
     )}
     <br></br>
     <div>
      <br></br>
    
      {props.list.map((list)=>{
        return(
          <div className='box' key={list.number}>
           {list.title} {list.date.toLocaleDateString()}
          </div>
        )
      })
      
      }
     </div>
    </div>
  )
}

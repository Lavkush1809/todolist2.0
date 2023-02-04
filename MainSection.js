import React, { useState } from 'react'
import Inbox from './Inbox'
import Next7days from './Next7days'
import Today from './Today'
import './App.css'

const list=[
    {number:1, title:"Lets complete this",date:new Date("01/25/2023")},
    {number:2, title:"coding class from 4-6 pm",date:new Date("01/28/2023")},
    {number :3, title :"Dsa class from 7-9 pm", date: new Date("02/04/2023")}
]

export default function MainSection(props) {
  const [filteredList,setFilteredList]=useState(list)
  const addTolist=(obj)=>{
    list.push(obj)
    setFilteredList(list)
  }
  return (
    <div className='Main-Section'>
      {props.active==="INBOX"&&(
      <Inbox list={filteredList} append={addTolist}/>
      )}
      {props.active==="TODAY"&& <Today list={filteredList}/>}
      {props.active==="NEXT"&& <Next7days list={filteredList}/>}
    </div>

  )
}

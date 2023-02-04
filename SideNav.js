import React from 'react'
import './App.css'

export default function SideNav(props) {
  return (
   <ul className="side-nav">
    <li onClick={()=>{props.change("INBOX")}}>
        <div>INBOX</div>
    </li>
    <li onClick={()=>{props.change("TODAY")}}>
        <div>TODAY</div>
    </li>
    <li onClick={()=>{props.change("NEXT")}}>
        <div>NEXT7DAYS</div>
    </li>
   </ul>

  )
}

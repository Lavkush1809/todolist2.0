import React from 'react'
import Listrender from './Listrender'
import './App.css'

export default function Today(props) {
    const date= new Date()
    const filteredList=props.list.filter((task)=>{
        if(date.getFullYear()!== task.date.getFullYear()){
            return false;
        }
        if(date.getMonth() !== task.date.getMonth()){
            return false;
        }
        if(date.getDay()!==task.date.getDay()){
            return false;
        }
        return true;
    })
  return (
    <div>
    <Listrender list={filteredList}/>

    </div>
  )
}

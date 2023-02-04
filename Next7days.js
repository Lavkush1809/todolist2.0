import React from 'react'
import Listrender from './Listrender'
import './App.css'

export default function Next7days(props) {
    const date=new Date()
    const filteredList=props.list.filter((task)=>{
        const difftime=task.date - date
        const diffdays=Math.ceil((difftime)/(1000*60*60*24))
        if( diffdays>0 && diffdays <8){
            return true
        }
        return false
    })
  return (
    <div>
    <Listrender list={filteredList}/>
    </div>
  )
}

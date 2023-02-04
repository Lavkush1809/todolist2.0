import React from 'react'
import './App.css'

export default function Listrender(props) {
  return (
    <>
    {props.list.map((list)=>{
        return(
            <div className='box' key={list.number}>
                <div className='task'>
               {list.title}{list.date.toLocaleDateString()}
                </div>

            </div>
        )
    })}
    </>
  )
}

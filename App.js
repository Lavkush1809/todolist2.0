import { useState } from 'react';
import './App.css'
import MainSection from './MainSection';
import SideNav from './SideNav';

function App(){
  const[active,setActive]=useState("INBOX")
  return(
    <div id ="main">
      <h1>Todo List App</h1>
     <header>
      <div className='row'>
       <div className='col-md-10'>
        <SideNav change={setActive}/>
        </div> 
        <div className='col-md-10'>
          <MainSection active ={active}/>
        </div>
      </div>
      </header> 

    </div>
  )
}


export default App;
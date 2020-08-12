import React,{useState,useEffect} from 'react';
import  Dashboard  from '../Dashboard/Dashboard.js'
import '../App.css';
import Username from './Username.js';



function CheckUser() {
    const [username,setUsername] = useState("")
  const handleUsernameSubmit = (username) => {
    setUsername(username)
  }
  
  
 
  return (
    <div>
        {!username && 
        <Username handleUsernameSubmit = {handleUsernameSubmit}></Username>}
        {username &&
        <Dashboard username = {username}></Dashboard>}
      
    </div>
  );
}

export default CheckUser;

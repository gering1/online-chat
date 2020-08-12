import React, {useState, useEffect,useRef} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import MessageTimes from './MessageTimes.js'
import TextField from '@material-ui/core/TextField'
import MessageBox from './MessageBox.js'
import Typography from '@material-ui/core/Typography'
import {makeStyles } from '@material-ui/core/styles';
import ActiveUsers from './ActiveUsers.js'
import MenuItem from '@material-ui/core/MenuItem';
import ChatWindow from './ChatWindow.js'
import MenuList from '@material-ui/core/MenuList';  
import io from 'socket.io-client'
import RoomList from './RoomList.js'
const useStyles = makeStyles(theme => ({
    root: {
       display:"flex",
       flexDirection:"row",
        height: "100%"
    },

  

    chatcontainer: {
        display:"flex",
        flexDirection: "column",
        width: "900px",
        
      
    },
 
}))
function Dashboard(props) {
    const classes = useStyles()
    const [message,handleMessageChange] = useState(null)
    const [activeUsers,setActiveUsers] = useState([])
    const [room,handleRoom] = useState("Room1")
    const [messageList, handleMessageListChange] = useState([])
   // const socketadd = 'http://127.0.0.1:5000/'
    const socket = io('http://ec2-3-134-99-220.us-east-2.compute.amazonaws.com:5000')

    //const socket = io(socketadd,{reconnection : false})
    const handleRoomChange = (new_room) => {
        let username = props.username
        let leaving_room = room
        let joining_room = new_room
        if(leaving_room !== joining_room) {
            console.log('DIFFERENT')
            console.log(joining_room,leaving_room,new_room)
            //leave leaving room join joining room
            handleRoom(new_room)
            //clear chat when switching rooms
            document.getElementById('chatwindow').innerHTML = ""
            //change room
            //socket.emit('change_room',{username:username,leaving_room:leaving_room,joining_room:joining_room})
            socket.emit('leave',{username:username,room:leaving_room})
            socket.off('message')
            socket.on('message', data =>  {
                let message = data.message
                let username = data.username
                //let m_room = data.room
                console.log("recieved message: " , message)
                handleMessageListChange(messageList => [...messageList,{username, message}])
            })
            
            socket.emit('join',{username:username,room:joining_room})
        }
    }
/*
    const handleRoomChange = (new_room) => {
        
        

        let username = props.username
        let leaving_room = room
        let joining_room = new_room
        if(leaving_room !== joining_room) {
            console.log('DIFFERENT')
            
            //leave leaving room join joining room
            handleRoom(new_room)
            //clear chat when switching rooms
            //document.getElementById('chatwindow').innerHTML = ""
            //change room
            socket.emit('change_room',{username:username,leaving_room:leaving_room,joining_room:joining_room})
            //socket.emit('leave',{username:username,room:leaving_room})
            //socket.emit('join',{username:username,room:joining_room})
            console.log(joining_room)
        }
       
    }
    */
     useEffect(() => {
        window.addEventListener("beforeunload", (ev) => 
        {  
            ev.preventDefault();
            return socket.emit('unregister',username)
        });
        let username = props.username
        //join room 1 on mount
        socket.on('register', data => {
            console.log('test')
            let users = Object.keys(data)
            console.log(users)
            setActiveUsers(users)
        })


        socket.on('join',data => {
            console.log(data)
        })
        socket.on('joinz',msg => {
            console.log("WOWOWO")
            console.log(msg)
        })
        socket.on('load_users',data => {
            let users = Object.keys(data)
            setActiveUsers(users)
        })
        socket.on('message', data =>  {
            console.log()
            let message = data.message
            let username = data.username
            let m_room = data.room
            console.log(message,m_room)
            handleMessageListChange(messageList => [...messageList,{username, message}])
        })
        socket.emit('join',{username:username,room:room})
        socket.emit('load_rooms')
        socket.emit('register',username)

        
       
        
    },[])
  

    return (
        <>
        <Paper style = {{width: "100%", height:"30px"}}></Paper>
        <div className = {classes.root}>
        
       
        <RoomList room = {room} socket = {socket} handleRoomChange = {handleRoomChange}></RoomList>
     
            <div className = {classes.chatcontainer}>
        
                <ChatWindow messageList = {messageList}></ChatWindow>
                
                <MessageBox  socket={socket} username = {props.username} room = {room}></MessageBox>
            
                
            </div>

        <ActiveUsers key = "test"activeUsers = {activeUsers} ></ActiveUsers>
        

      
        </div>
  
        </>
)
}
export default Dashboard
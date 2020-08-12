import React, {useState, useEffect, useRef} from 'react'
import {makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

import theme from '@material-ui/styles/'
const useStyles = makeStyles(theme => ({
  
    
    outer: {
       
        padding: 0,
        width: "100%",
        
    },
    inner: {
        
           
    },
    inputBox: {
        //make sure padding doesnt affect width
        mozBoxSizing: "border-box",
        webkitBoxSizing: "border-box",
        boxSizing: "border-box",
        padding: "12px",
        paddingBottom: "15px",
        height: "47px",
        backgroundColor: "#2B2B2B",
        borderRadius: "5px  ",
        borderColor : "#202020",
       
      
    },
}))
export default function MessageBox(props) {
    const classes = useStyles()
    const [message,handleMessageChange] = useState("")
    const messageRef = useRef()
 

    useEffect(() => {
        //const listener = event => {
        //    if (event.code === "Enter" || event.code === "NumpadEnter") {
        //        handleMessageSubmit(message)
                //handleMessageChange("")
        //    }
        //};
        //document.addEventListener("keydown", listener);
        //return () => {
            //document.removeEventListener("keydown", listener);
        //};
    }, []);
    function handleMessageSubmit () {
        console.log(message)
        props.socket.emit('message',{username:props.username, message:message,room:props.room})
        handleMessageChange("")
    }
    function handleChange (e) {
        handleMessageChange(e.target.value)
        if (e.key === 'Enter') {
            handleMessageSubmit()
        }
    }

    return (
        <div className = {classes.outer}>
            <div className = {classes.inner}>
                <TextField
                InputProps={{ disableUnderline: true }} 
                    className = {classes.inputBox}
                    placeholder = "Type message..."
                    value = {message}
                    onChange = {e => {handleChange(e)}}
                    onKeyDown = {e => handleChange(e)}
                    disableUnderline = "true"
                    style = {{width: "100%"}}
                    borderColor = "red"
                    variant = "standard">Enter Message</TextField>
            </div>
        </div>
    )
}

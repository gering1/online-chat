import React, {useEffect,useRef} from 'react'
import {makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom'
import MessageTimes from './MessageTimes.js'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Dashboard from './Dashboard.js';

const useStyles = makeStyles(theme => ({
    profile_chip: {
        padding:"5px",
        margin: theme.spacing(.5, 0),
        backgroundColor:"#2B2B2B"
    },
    
    chat_window: {
        overflow: "auto",
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        height: "530.5px",
        display: "flex",
        alignItems:"flex-start",
        flexDirection:"column",
        overflowX:"hidden",
        
      
    },
    message: {
        padding: "8px",   
        display: "flex",
        alignItems:"flex-start",
        flexDirection: "column",
      },
}))
function ChatWindow(props) {
    window.HTMLElement.prototype.scrollIntoView = function() {};

    const scrollToBottom = () => {
      return  console.log('hi')
      }
    useEffect(() => {
        scrollToBottom()
        
    }, []);
    const classes = useStyles()
    const messagesEnd = useRef(null);
    return (
<>
        <Paper style = {{ marginTop :"0px",borderRadius: "0px"}} id = "chatwindow" className = {classes.chat_window}>
            
        {
            props.messageList.map(messageinfo => (
                <>
                <div className = {classes.message}>
                <Chip  className = {classes.profile_chip} style = {{color:"white"    }} label ={messageinfo.username} ></Chip> <div className = {classes.message_content}>{messageinfo.message} <MessageTimes></MessageTimes></div>
                </div>
                </>
                
        ))
        }
      
        </Paper>
        
        </>
    
    )
}

export default ChatWindow
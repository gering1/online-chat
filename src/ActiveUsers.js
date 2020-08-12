import React, {useState, useEffect,useRef} from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import MenuList from '@material-ui/core/MenuList';  
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import MenuItem from '@material-ui/core/MenuItem';
import MessageIcon from '@material-ui/icons/Message';
import PrivateChat from './PrivateChat.js'

const useStyles = makeStyles(theme => ({
    activeuserscontainer: {
        display: "flex",
        flexDirection: "column",
        flexGrow:"1",
       
        
     
        
    },
    inner: {
        display:"flex",
        flexDirection: "column",
        height: "500px",
     
        overflow: "auto"
        
    },
    userSelect: {
        display: "flex",
        flexDirection: "row"
    }
}))
export default function ActiveUsers(props) {
    const classes = useStyles()
    const [DMFlag, setDMFlag] = useState(false)
    return (
        <div className = {classes.activeuserscontainer}>
        <div className = {classes.inner}>
    
        <Paper style = {{marginTop: ".8px"}} elevation = {3}>
        <Typography   >Active Users</Typography>
        <List style = {{}}>
        {   
            props.activeUsers.map(user => (
                [
                <div className = {classes.userSelect}><><ListItem id = {user} style = {{color: "rgba(255, 255, 255, 0.80)"}}>{user}</ListItem></></div>
                ]
            ))
        }
        </List>
        
        </Paper>
        </div>
        </div>



    )
}
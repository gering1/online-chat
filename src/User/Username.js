import React, {useRef,useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import { FormControl } from '@material-ui/core';

import {makeStyles } from '@material-ui/core/styles';
import io from 'socket.io-client'
import { findByLabelText } from '@testing-library/react'

const useStyles = makeStyles(theme => ({
   
    container:  {
    width: "100%",
    display: "flex",
    margin: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    height: "100%",
    width: "700px",
    justifyContent:"center",    
    alignItems: "center",
    marginTop: "70px",
   
    },
    userForm: {
        display: "flex",
        height:"350px",
        flexDirection: "column",
        margin: "auto",
        width: "30%",
        alignContent: "center",
        justifyContent:"center",
        borderRadius: "12px",
        
       

    }
}))


export default function Username(props) {
    const userRef = useRef()
    const classes = useStyles()
    const [username,handleUsernameChange] = useState("")
 
       
    useEffect(() => {
        userRef.current.focus()
    })
    const handleUsernameSubmit = () => {
        props.handleUsernameSubmit(username)
    }
    function handleChange (e) {
        handleUsernameChange(e.target.value)
        if (e.key === 'Enter') {
            handleUsernameSubmit()
        }
    }
    return ( 
        <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center">
            <Paper  className = {classes.container} elevation = {4}>
                <form className = {classes.userForm}>
                    <TextField
                    inputRef = {userRef}
                    placeholder = "Enter username"
                    style = {{marginBottom: "10px"}}
                    onChange = {e => handleUsernameChange(e.target.value)}
                    ></TextField>
 
                    <Button variant = "contained"
                    onKeyDown = {e => handleChange(e)}
                    color = "secondary"
                    style = {{}}
                    onClick = {e => handleUsernameSubmit(e.target.value)}
                    >Join</Button>
                </form>
               
            </Paper>
            </Grid>
           
        )}
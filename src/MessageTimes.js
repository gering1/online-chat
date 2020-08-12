
import React from 'react';
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    time_text: {
        display: "inline-block",
        fontSize: "10px",
        color: "rgba(255, 255, 255, 0.30)",
    }

}))


export default function MessageTimes() {
    const classes = useStyles()

    var date = new Date();
    const generateTime = () => {
        
        let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        let AM_PM = date.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let time = hours + ":" + minutes + ":" + AM_PM;
        return time
    }
    
    return(
        <Typography className = {classes.time_text}>{generateTime()}</Typography>
    )
}


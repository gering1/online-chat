import React, {useState} from 'react' 
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles(theme => ({
    modal_container: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "300px",
        height: "300px"
    }
        
    
}))
export default function PrivateChat(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [selectedUser,setSelectedUser] = useState("")
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

   
    const body = (
       <Paper className = {classes.modal_container}>
       <TextField
       placeholder= "Type messagess"
       
       onChange = {e => {setSelectedUser(e.target.value)}}
       ></TextField>
       <Button
        
        
        ></Button>
       </Paper>
      );
    return (
        <>
        <MessageIcon onClick = {handleOpen}></MessageIcon>
        
        <Modal
        open = {open}
        onClose = {handleClose}
        >{body}</Modal>
        
        </>
    )
}
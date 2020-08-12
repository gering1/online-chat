import React, {useState} from 'react' 
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

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
export default function RoomAdd(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [addedRoom, setAddedRoom] = useState("")
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const createRoomAndClose = () => {
        props.addRoom(addedRoom)
        setAddedRoom("")
        setOpen(false)
    }
    const body = (
       <Paper className = {classes.modal_container}>
       <TextField
       placeholder= "Enter new room name"
       value = {addedRoom}
       onChange = {e => {setAddedRoom(e.target.value)}}
       ></TextField>
       <Button
        onClick = {() => createRoomAndClose()}
        
        >Add Room</Button>
       </Paper>
      );
    return (
        <>
        <AddIcon onClick = {handleOpen}></AddIcon>
        <Modal
        open = {open}
        onClose = {handleClose}
        >{body}</Modal>
        
        </>
    )
}
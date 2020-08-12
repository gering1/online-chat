import React,{useReducer,useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import AddIcon from '@material-ui/icons/Add';
import RoomAdd from './RoomAdd.js'
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles(theme => ({
    roomAndAddContainer: {
        display: "flex",
        flexDirection: "column",
        flexGrow: "1"
    },
    titlecontainer: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    roomListItem: {
        '&:select.selected': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
    activeStyle: {
        backgroundColor: theme.palette.secondary.dark,
    },
    roomcontainer: {
        
        display:"flex",
        flexDirection: "column",
        
        height: "500px",
        overflow: "auto"
        },
       
}))

function reducer(state,action) {
    switch(action.type) {
        case 'add':
            
    }
}
export default function RoomList(props) {

    const [room, dispatch] = useReducer(reducer,"")
    const [rooms,setRooms] = useState([])
    const addRoom = (room) => {
        props.socket.emit('create_room',room)
    }
    const classes = useStyles()
    
    useEffect(() => {
        props.socket.on('load_rooms',loads => {
            console.log(loads)
            setRooms(loads)
        })
        props.socket.on('created_room',data => {
            console.log(data)
            setRooms(rooms => [...rooms,data])
            
        })
        /*
        props.socket.on('created_room',l => {
            console.log('created')
            setRooms(rooms => [...rooms,l])
        })
        */
    })
    return (
        
        <>
        
        <div className = {classes.roomAndAddContainer}>
        <div className = {classes.roomcontainer}>
        <Paper style = {{marginTop: ".8px"}} elevation = {2}>
            <div className = {classes.titlecontainer}>
            <Typography style = {{flexGrow: "1"}}>Rooms</Typography>
            <RoomAdd addRoom = {addRoom}></RoomAdd>
            </div>
            <MenuList value = {props.room}  >
            <MenuItem  onClick = {e => props.handleRoomChange(e.target.id)} id = "Room1">Room1</MenuItem>
        {
            rooms.map(room => (
                [
                <MenuItem style = {room === props.room ? {backgroundColor:'#790e3c'}: {}} selected = {room === props.room} className = {classes.roomListItem}  onClick = {e => props.handleRoomChange(e.target.id)} id = {room}>{room}</MenuItem>
                ]
            ))
        }
        </MenuList>
      
        </Paper>
       
    </div>
    
    </div>
    </>
    )
}
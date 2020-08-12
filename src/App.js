import React from 'react';
import  Dashboard  from './Dashboard.js'
import './App.css';
import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import {ThemeProvider,createMuiTheme} from  '@material-ui/core/styles'
import CheckUser from './CheckUser.js'
import io from 'socket.io-client'


function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f3e5f5',
      },
      secondary: {
        main: '#ad1457',
      },
      background: {
        paper: "#303030",
        
      },
      typography: {
        fontFamily: "Nunito"
      },
      type: "dark"

    }
    
  })
  return (
    <ThemeProvider theme = {theme}>
    <Paper style = {{height:"100vh"}}>
    <div className="App">
     
      <CheckUser />

    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;

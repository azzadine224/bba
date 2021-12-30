import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    pbg: {
        backgroundColor: '#011b16',
    },
    Toolbar:{
        display: 'felx',
        justifyContent: 'center'
    },
}));

const Footer = () => {
    const classes = useStyles()
    return ( 
        <div>
    <Box>
      <AppBar position="static" className={classes.pbg}>
        <Toolbar className={classes.Toolbar}>
          <Typography variant="subtitle" component="div" sx={{ textAlign:'center' }}>
           Desgind By Azaddine Gabani.© 2021 - 2022 All rights reserved
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
     );
}
 
export default Footer;
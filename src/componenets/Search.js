import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    pbg: {
        color:'black',
        backgroundColor: 'white',
        margin: 'auto',
        marginTop: 30,
        marginBottom: 30,
        padding: 5,
        borderRadius: 5,
    },
}));

const Search = ({settermsearch}) => {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState('')
  settermsearch(searchTerm) 
  return (
      <div>
        <TextField
          value={searchTerm}
          onChange= {(e) => setSearchTerm(e.target.value)}
          fullWidth 
          label="Search Characters"
          variant="filled"
          className={classes.pbg}
        />
      </div>
  );
}

export default Search;
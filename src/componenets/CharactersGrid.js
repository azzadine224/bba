import React, { useState } from "react";
import CharactersItem from "./CharactersItem";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
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

const CharacterGrid = ({ items,termsearch}) => {
    const classes = useStyles()
    const [pageNumber, setPageNumber] = useState(1)
    const itemsPerPage = 12
    const pageVisited = pageNumber * itemsPerPage - 12
    const pageCount = Math.ceil(items.length / itemsPerPage)
    const changePage = (event, value) => {
        setPageNumber(value)
       
    }
    return (
        <div className="link">
            <Stack spacing={2}>
           <Pagination count={pageCount} page={pageNumber} onChange={changePage} color="secondary" className={classes.pbg} />
           </Stack> 
        <Grid container spacing={3}>
           {items.filter((item) =>{
        if (termsearch === ''){
            return items
        } else if (item.name.toLowerCase().includes(termsearch.toLowerCase())) {
            return item
        }
    }).map((item) => (
        <Grid item key={item.char_id} xs={12} sm={6} md={3}>
         <Link to={`/items/${item.name}`} style={{ textDecoration: 'none' }}>
        <CharactersItem item={item}></CharactersItem>
        </Link>
        </Grid>
    )).slice(pageVisited, pageVisited + itemsPerPage)} 
       </Grid>
           <Stack spacing={2}>
           <Pagination count={pageCount} page={pageNumber} onChange={changePage} color="secondary" className={classes.pbg} />
           </Stack> 
    </div>   
    ) 
}
export default CharacterGrid;


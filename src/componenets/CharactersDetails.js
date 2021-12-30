import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import useFetch from "../useFetch";

const useStyle = makeStyles( () =>{
  return{
    heroCol : {
      background : 'black',
      color : 'white',
      fontSize : 24,
    },
    otherCols : {
      fontSize : 18,
    },
    image : {
      maxWidth: 500,
      maxHeight: 600, 
    },
   
}
})

const CharactersDetails = () => {
   const {name} = useParams()
   const {items,quotes, deaths} = useFetch(name.replace(/ /g,"+"))
   const classes = useStyle()
  const actor = Object(items[0])
   const words = quotes.map(word =>(word.quote))
   const kills = deaths.filter(death => death.responsible === name)
    return (
       <div >
         <Container >
           <div className="charImg">
             <img src={actor.img} alt="" />
           </div>
      <TableContainer component={Paper} xs={12} sm={6} md={3}>
      <Table>
        <TableHead>
          <TableRow key={'Character'}>
            <TableCell align="center" className={classes.heroCol}>
              <Typography variant="h5" color={'white'}>Character Iformation</Typography>
              </TableCell>   
          </TableRow>
        </TableHead>
        <TableBody className={classes.otherCols}>
          <TableRow key={actor.name}><TableCell>Name : {actor.name}</TableCell></TableRow>
          <TableRow key={actor.birthday}><TableCell>Birth Day : {actor.birthday}</TableCell></TableRow>
          <TableRow key={actor.occupation}><TableCell>Job : {actor.occupation}</TableCell></TableRow>
          <TableRow key={actor.portrayed}> <TableCell>Actor Name : {actor.portrayed}</TableCell></TableRow>
          <TableRow key={actor.status}><TableCell>Status : {actor.status}</TableCell></TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      <TableContainer component={Paper} xs={12} sm={6} md={3}>
      <Table >
        <TableHead>
          <TableRow key='Character Qoutes'>
            <TableCell align="center" className={classes.heroCol}>
            <Typography variant="h5" color={'white'}>Character Qoutes</Typography>
            </TableCell>   
          </TableRow>
        </TableHead>
        <TableBody  className={classes.otherCols}>
          {words.map(qoute => (
             <TableRow key={qoute}><TableCell align="center">" {qoute} "</TableCell></TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <TableContainer component={Paper} xs={12} sm={6} md={3}>
      <Table xs={12} sm={6} md={3}>
        <TableHead>
          <TableRow key={'vhdkkfd'}>
            <TableCell align="center" className={classes.heroCol}>
            <Typography variant="h5" color={'white'}>Victims</Typography>
            </TableCell>   
            <TableCell align="center" className={classes.heroCol}>
            <Typography variant="h5" color={'white'}>Episode</Typography>
            </TableCell>   
            <TableCell align="center" className={classes.heroCol}>
            <Typography variant="h5" color={'white'}>Season</Typography>
            </TableCell>   
          </TableRow>
        </TableHead>
        <TableBody className={classes.otherCols}>
          {kills.map(kill => (
             <TableRow key={kill.death}>
               <TableCell align="center">{kill.death}</TableCell>
               <TableCell align="center">{kill.episode}</TableCell>
               <TableCell align="center">{kill.season}</TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
       </div>
     );
}
 
export default CharactersDetails;
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles( () =>{
  return{
    card : {
      '&:hover': {
        background : 'black',
        color : 'white',
        opacity: 0.5,
        zIndex: 2,
        textUndderLine: 'none'
      }
    },
}
})

const CharactersItem = ({item}) => {
  const classes = useStyle()
    return ( 
     <Card>
      <CardActionArea >
        <CardMedia
          component="img"
          height="500"
          image={item.img}
          className={classes.card}
        />
        <CardContent className={classes.card}>
          <Typography variant="h6" align='center' >
          {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 );
}
 
export default CharactersItem;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    mixWidth: '100%',
  },
});

// this function will take arguments (date, time, status, clientinfo="Blank", description="blank") from the parent component

export default function Tile(props) {
  const classes = useStyles();
  
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.slt? props.slt.name:"lol"}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.slt? props.slt.Time.toJSON() :null}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Status: {props.slt.uid}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" >
          Client Information
        </Button>

        <Button size="medium" color="primary" >
          description
        </Button>

        <Button size="medium" color="primary" disabled >
          Cancel
        </Button>
        
      </CardActions>
    </Card>
  );
}

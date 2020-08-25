import React from "react";
import "./roundcard.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function RoundCard(props) {
  const classes = useStyles();

  return (
    // <Card >
    //   <CardActionArea className="yo">
    //     <CardMedia
    //       // className={classes.media}
    //       className="media"
    //       image={props.image}
    //       title={props.title}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {props.title}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions></CardActions>
    // </Card>

    <div className="dashboardcard">
      <img className="media" src={props.image} />
      <p>{props.title}</p>
    </div>
  );
}

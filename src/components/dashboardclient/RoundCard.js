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
    <div className="roundcardfile">
      <img className="media" src={props.image} />
      <p>{props.title}</p>
    </div>
  );
}

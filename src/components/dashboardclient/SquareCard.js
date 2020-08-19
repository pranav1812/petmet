import React from "react";
import "./squarecard.css";

const SquareCard = (props) => {
  return (
    <div className="squarecard">
      <img className="image" src={props.picture} />
      <p className="productdetails">
        <div className="productname">{props.name} </div>
        <br />
        This is super comfy great tshirt for summers <br />
        {props.price}
      </p>
    </div>
  );
};

export default SquareCard;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import "./squarecard.css";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

// export default function SquareCard(props) {
//   const classes = useStyles();

//   return (
//     <Card className="squarecard" className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           // className={classes.media}
//           className="image"
//           image={props.picture}
//           title={props.name}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             <div className="productname">{props.name}</div>
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <button>LearnMore</button>
//         <button>Add to Cart</button>
//       </CardActions>
//     </Card>
//   );
// }

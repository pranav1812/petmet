import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./buttons.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<FavoriteIcon />}
      >
        ADD TO WISHLIST
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
      >
        ADD TO CART
      </Button>
      <br />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        className="buy"
      >
        BUY NOW!!!
      </Button>
    </div>
  );
}

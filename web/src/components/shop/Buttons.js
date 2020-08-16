import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./buttons.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {},
  })
);

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className="buttons">
      <Button
        variant="contained"
        color="secondary"
        className="wishlist"
        startIcon={<FavoriteIcon />}
      >
        ADD TO WISHLIST
      </Button>
      <br />
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="secondary"
        className="cart"
        startIcon={<AddShoppingCartIcon />}
      >
        ADD TO CART
      </Button>
      <br />
    </div>
  );
}

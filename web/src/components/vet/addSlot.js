import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <div>
        <form className={classes.container} noValidate>
        <TextField
            id="datetime-local"
            label="Add slot"
            type="datetime-local"
            defaultValue={new Date()}
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
            />
        </form>
        <h1>Current Slots</h1>

    </div>
    
  );
}

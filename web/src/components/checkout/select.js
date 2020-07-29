import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const currencies = [
  {
    value: 'USD',
    label: 'VET',
  },
  {
    value: 'EUR',
    label: 'Client',
  },
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




export default function Select() {

  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select your Role
      </Typography>


      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="filled-select-currency-native"
          select
          label="Role"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your role"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>   
    </form>
      </Grid>
      </Grid>
    </React.Fragment>
  );
}
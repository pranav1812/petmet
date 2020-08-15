import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

export default function VetForm() {
  return (
    <React.Fragment>

<CssBaseline />
      
      <Typography variant="h6" gutterBottom>
        VET FORM
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="phone"
            fullWidth
            autoComplete="phone"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Achievements"
            name="Achievements"
            label="Achievements"
            fullWidth
            autoComplete="Achievements"
          />
        </Grid>
        <TextField
            required
            id="Qualification"
            name="Qualification"
            label="Qualification"
            fullWidth
            autoComplete="Qualification"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="experience"
            name="experience"
            label="experience in years"
            fullWidth
            autoComplete="years"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Address"
            name="Address"
            label="Address"
            fullWidth
            autoComplete="Address"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>

        <Grid item xs={12} sm={6}>
        <Button variant="contained" color="primary">
  FINISH
</Button>
         </Grid>
    
      </Grid>
      </React.Fragment>
  );
}
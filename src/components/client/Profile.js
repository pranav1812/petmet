import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ls from 'local-storage'

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Update your Profile
      </Typography>
     
        <Grid item xs={12}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Full name"
            fullWidth
            autoComplete="given-name"
            onBlur={e=>{ls.set('name', e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mail"
            name="mail"
            label="E-mail"
            fullWidth
            autoComplete="email"
            onBlur={e=>{ls.set('mail', e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="number"
            onBlur={e=>{ls.set('phone', e.target.value)}}
          />
        </Grid>
            <Grid>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address"
            required
            onBlur={e=>{ls.set('address', e.target.value)}}
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
            onBlur={e=>{ls.set('city', e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State" fullWidth
          onBlur={e=>{ls.set('state', e.target.value)}}
          />
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Pin code"
            fullWidth
            autoComplete="shipping postal-code"
            onBlur={e=>{ls.set('pin', e.target.value)}}
          />
        </Grid>
        </Grid>
        
    </React.Fragment>
  );
}
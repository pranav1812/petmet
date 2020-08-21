import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {db, auth} from '../../firebase'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: '100%',
        height: '500px'
      },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      width: '100%',
      height: '100%'
    },
    image: {
      width: "25%",
      height: "80%",
    },
    img: {
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '100%',
    },
  }));
  
  export default function Profile() {
    const classes = useStyles();
    const [state, setState]= useState({})

    useEffect(()=>{
      // doc id-> uid of user
        db.collection('vet').doc('Wsqzi5DoefSSpKvTKELy').get()
            .then((doc)=>{
                setState(doc.data())
                
            }).catch(err=> {
            console.error(err)
            })
        },[])
        console.log(state)
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://api.adorable.io/avatars/285/abott@adorable.png" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    {state.Name}                   
                  </Typography>
                </Grid>
              </Grid>
              
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
  
  




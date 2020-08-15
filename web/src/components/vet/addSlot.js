import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tile from './Tile'
import {db, auth} from '../../firebase'


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

export default function AddSlot(props) {
  const classes = useStyles();
  
  const [state, setState]= useState({
    slots: []
  })
  const [newSlot, setNewSlot]= useState(null)
  const [sentSlot, setSentSlot]= useState(null)

  useEffect(() => {
    db.collection('vet').doc('Wsqzi5DoefSSpKvTKELy').collection('freeSlots').get()
    .then(docs=>{
      console.log(typeof(state.slots))
      var temp=[]
      docs.forEach(doc=>{      
        temp.push(doc.data())
      })
      setState({
        ...state,
        slots: temp
        
      })

    }).catch(err=> {
      console.error(err)
    })
  },[sentSlot])

  const addSlot=(e)=>{
    setNewSlot(e.target.value)
  }
  const sendSlot=()=>{
    db.collection('vet').doc('Wsqzi5DoefSSpKvTKELy').collection('freeSlots').add({
      Type: "any",
      Time: newSlot      
    })
    setSentSlot(newSlot)
  }

  
  // console.log(state.slots.length)
  return (
    <div>
      
        <form className={classes.container} noValidate>

        <TextField
           id="datetime-local"
           label="Next appointment"
           type="datetime-local"
           defaultValue="2017-05-24T10:30"
           className={classes.textField}
           onBlur={addSlot}
           InputLabelProps={{
             shrink: true,
           }}
            />
            <Button size="medium" color="primary" onClick={sendSlot}>
              Confirm
            </Button>
        </form>
        <h1>Current Slots</h1>
        {
          state.slots.map((slot)=>           
             <Tile slt={slot} />
          )
        }
                   
    </div>    
  );
}

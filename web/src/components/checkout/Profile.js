import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Select from './select';
import Checkout from './Checkout';
import VetForm from './VetForm'
import { BrowserRouter, Route, Link } from "react-router-dom";
 
class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            screen: 'Select' //App,Select
        }
    }

    navigate=()=>{
        this.setState({
            screen:'Checkout'
        })
    }

    transfer=()=>{
        this.setState({
            screen:'VET'
        })
    }

render(){
    return(
    <div>
        
     <Route exact path ='/' component ={Select} />
     <Route exact path='/Checkout' component = {Checkout} />
     <Route exact path='/VetForm' component={VetForm} />
   </div>
    )
}

}



export default Profile
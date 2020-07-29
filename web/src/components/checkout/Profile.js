import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Select from './select';
import Checkout from './Checkout';

class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            screen: Select //App,Select
        }
    }

    navigate(){
        this.setState({
            screen:'Checkout'
        })
    }

render(){
    return(
    <div>
        {
    this.state.screen === 'Select' && (
                 <div>
                <Select onNavigate = {this.navigate}/>
             </div>
     ) 
     }
     {
         this.state.screen === 'Checkout' && (
             <div>
                 <Checkout/>
                 </div>
         )
     }
   </div>
    )
}

}



export default Profile
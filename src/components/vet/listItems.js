import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';

import PeopleIcon from '@material-ui/icons/People';
import {Route, Switch, Link, useParams} from 'react-router-dom'


import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddAlarmIcon from '@material-ui/icons/AddAlarm'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const mainListItems = (
  <div>
    <Link to={'/Profile/'}>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    </Link>

    <Link to={'/AddSlot/'}>
       <ListItem button>
      <ListItemIcon>
        <AddAlarmIcon />
      </ListItemIcon>
      <ListItemText primary="Add Slot" />
    </ListItem>
    </Link>

    <Link to={'/Appointments/'}>
    <ListItem button>
      <ListItemIcon>
        <AccessAlarmIcon />
      </ListItemIcon>
      <ListItemText primary="Appointments" />
    </ListItem>
    </Link>

    <Link to={'/Requests/'}>
    <ListItem button>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Requests" />
    </ListItem>
    </Link>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItem>
    
  </div>
);
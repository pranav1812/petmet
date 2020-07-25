import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';

import PeopleIcon from '@material-ui/icons/People';


import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddAlarmIcon from '@material-ui/icons/AddAlarm'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddAlarmIcon />
      </ListItemIcon>
      <ListItemText primary="Add Slot" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccessAlarmIcon />
      </ListItemIcon>
      <ListItemText primary="Appointments" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Requests" />
    </ListItem>
    
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
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Update Profile" />
    </ListItem>
  </div>
);
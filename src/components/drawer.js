import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


export const AppDrawer = (props) => {
    return (
        <Drawer
            open={props.open}
            docked={false}
            onRequestChange={open => props.onToggle(open)}
        >
            <MenuItem>Main</MenuItem>
            <MenuItem>Contacts</MenuItem>
            <MenuItem>About us</MenuItem>
        </Drawer>
    );
};
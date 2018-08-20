import * as React from 'react';
import AppBar from 'material-ui/AppBar';


export const AppHeader = (props) => {
    return(
        <AppBar position="static" title="React page with UI" style={{background: '#3F51B5'}} onLeftIconButtonClick = { () => props.onLeftIconClick()}
        />);
};


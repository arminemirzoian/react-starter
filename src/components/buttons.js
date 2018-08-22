/**
 * Created by MKphoto on 8/22/2018.
 */
import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    marginRight: 20
};
export const AppButtons = (props) => {
    return(
        <div style={{marginTop: 40}}>
            <RaisedButton
            label="Add an ingredient"
            primary={true}
            style={style}
            onTouchTap = {() => console.log("Click")}
            />

            <RaisedButton
                label="Remove an ingredient"
                secondary={true}
                style={style}
                disabled={props.itemsChecked.length ===0}
                onTouchTap = {() => props.onDelete()}
                />
        </div>
    );
};



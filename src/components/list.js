import React from 'react';
import { List, ListItem }from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';

export const AppList = (props) => {
    return(
        <List> {
            props.items.map((item, index) => {
                return (
                    <div key={index} style={{width: 350}}>
                        <ListItem
                        primaryText={item.name}
                        secondaryText={item.description}
                        leftCheckbox={<Checkbox
                            checked={item.checked}
                           onCheck={(event, isInputChecked) => props.onCheck(isInputChecked, index)}
                        />}
                        rightAvatar={<Avatar />}
                    />
                       ]
                        <Divider/>
                    </div>
                );
            })
        }
        </List>

    );
};


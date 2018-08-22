import React, { Component } from 'react';
import { AppHeader } from './header';
import { AppDrawer } from './drawer';
import { AppButtons } from './buttons';
import { AppList } from './list';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
            itemsList: [
                {name: 'ingredient 1', description: 'description of the ingredient 1', checked: true},
                {name: 'ingredient 2', description: 'description of the ingredient 2', checked: false},
                {name: 'ingredient 3', description: 'description of the ingredient 3', checked: false},
                {name: 'ingredient 4', description: 'description of the ingredient 4', checked: false},
            ]
        };
    }

    render() {
        return (
            <div>
                <AppHeader onLeftIconClick={ () => this.setState({isDrawerOpen: true})}/>
                <AppDrawer open={this.state.isDrawerOpen} onToggle={(isDrawerOpen) => this.setState({isDrawerOpen})}
                />

                <AppList
                    items={this.state.itemsList}
                    onCheck={(checked, idx) => {
                        let {itemsList} = this.state;
                        itemsList[idx].checked = checked;
                        this.setState({itemsList});
                    }}/>
                <div className="container1">
                    <AppButtons
                       itemsChecked={this.state.itemsList.map(i => i.checked).filter(i => i)}
                        onDelete = {() => {
                        let itemsList = this.state.itemsList.filter(i => !i.checked);
                        this.setState ({itemsList});
                    }}
                        />
                </div>
            </div>
        );
    }
}
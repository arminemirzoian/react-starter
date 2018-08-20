import React, { Component } from 'react';
import { AppHeader } from './header';
import { AppDrawer } from './drawer';
export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isDrawerOpen: false
        };
    }
    render() {
        return (
            <div>
                <AppHeader onLeftIconClick = { () => this.setState({isDrawerOpen: true})}/>
                <AppDrawer open={this.state.isDrawerOpen} onToggle={(isDrawerOpen) => this.setState({isDrawerOpen})}
                />
            </div>
        );
    }
}
import React from 'react';
import NavLink from './NavLink';
import { IndexLink } from 'react-router';
import styles from './Navigation.scss';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return <div>
            <AppBar
                title="React Webpack Starter"                
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementRight={<Logged />}
                />
            <Drawer
                docked={false}
                width={300}
                open={this.state.open}
                onRequestChange={(open) => this.setState({ open })}
                >
                <MenuItem><NavLink to="/" onTouchTap={this.handleClose}>Start</NavLink></MenuItem>
                <MenuItem><NavLink to="/counter" onTouchTap={this.handleClose}>Counter</NavLink></MenuItem>
                <MenuItem><NavLink to="/about" onTouchTap={this.handleClose}>About</NavLink></MenuItem>
                <MenuItem><NavLink to="/search" onTouchTap={this.handleClose}>Search</NavLink></MenuItem>
                <MenuItem><NavLink to="/repos" onTouchTap={this.handleClose}>Repos</NavLink></MenuItem>
                <MenuItem><NavLink to="/reactive" onTouchTap={this.handleClose}>Reactive</NavLink></MenuItem>
            </Drawer>
        </div>
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);
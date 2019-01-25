import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
//import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Routes from './_env';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import TemporaryLeftBar from './components/TemporaryLeftBar';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} >
          sample.inc
        </div>
        <Divider />
        <MenuList>
          {Routes.map((prop, key) => {
            return (
              <Link to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                <MenuItem>
                  <ListItemText primary={prop.title} />
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </div>
    );

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          {/* 画面上部のAppBar */}
          <AppBar 
            position="fixed"
            className={classes.appBar}
            color="#fafafa"
            style={{boxShadow: "none"}}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {/* 画面左横のDrawer */}
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. 
                モバイルのように画面が小さい場合の一時的に表示されるDrawer
            */}
            <TemporaryLeftBar
              direction={theme.direction}
              mobileOpen={this.state.mobileOpen}
              handle={this.handleDrawerToggle}
              drawerPaper={classes.drawerPaper}
              drawer={drawer}
            />
            {/* <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden> */}
            {/* 
                普段のPCのブラウザでみている場合のDrawer
            */}
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content} style={{backgroundColor: "white"}}>
            <div className={classes.toolbar} />
            <Route exact path="/" />
            {Routes.map((prop, key) => {
              return (
                <Route path={prop.path} component={prop.component} />
              );
            })}
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);

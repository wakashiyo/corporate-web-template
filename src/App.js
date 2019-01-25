import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Routes from './_env';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import TemporaryLeftBar from './components/TemporaryLeftBar';
import LeftBar from './components/LeftBar';
import TopBar from './components/TopBar';
import LeftBarList from './components/LeftBarList';

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

    // 左メニューのリスト
    const drawer = (
      <LeftBarList
        toolbar={classes.toolbar}
        titleName={'sample.inc'}
        routes={Routes}
      />
    );

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          {/* 画面上部のAppBar */}
          <TopBar
            appBar={classes.appBar}
            menuButton={classes.menuButton}
            handle={this.handleDrawerToggle}
          />
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
            {/* 
                普段のPCのブラウザでみている場合のDrawer
            */}
            <LeftBar
              drawerPaper={classes.drawerPaper}
              drawer={drawer}
            />
          </nav>
          {/* コンテンツ */}
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

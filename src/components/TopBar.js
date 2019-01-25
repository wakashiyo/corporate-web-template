import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';

class TopBar extends React.Component {
  render () {
    return (
      <AppBar 
        position="fixed"
        className={this.props.appBar}
        color="#fafafa"
        style={{boxShadow: "none"}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.handle}
            className={this.props.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
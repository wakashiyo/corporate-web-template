import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

class LeftBar extends React.Component {
  render () {
    return (
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: this.props.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {this.props.drawer}
        </Drawer>
      </Hidden>
    );
  }
}

export default LeftBar;
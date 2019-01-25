import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

class TemporaryLeftBar extends React.Component {
  render () {
    return (
      <Hidden smUp implementation="css">
        <Drawer
          container={this.props.container}
          varient="temporary"
          anchor={this.props.direction === 'rtl' ? 'right' : 'left'}
          open={this.props.mobileOpen}
          onClose={this.props.handle}
          classes={{
            paper: this.props.drawerPaper,
          }}
          >
          { this.props.drawer }
        </Drawer>
      </Hidden>
    );
  }
}

export default TemporaryLeftBar;
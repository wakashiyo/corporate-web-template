import React from 'react';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

class LeftBarList extends React.Component {
  render () {
    return (
      <div>
        <div className={this.props.toolbar} >
          { this.props.titleName }
        </div>
        <Divider />
        <MenuList>
          {this.props.routes.map((prop, key) => {
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
  }
}

export default LeftBarList;
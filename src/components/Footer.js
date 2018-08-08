import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import Icon from '@material-ui/core/Icon';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    textAlign: 'center',
  },
};

class LabelBottomNavigation extends Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Jacobsniels10@gmail.com" value="Jacobsniels10@gmail.com" icon={<MailIcon />} />
        <BottomNavigationAction label="http://Jacoux.com" value= '<a href="http://Jacoux.com" </a> 'icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Hasselt" value="Hasselt" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);

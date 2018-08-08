import React, { Component } from 'react';
import {
  Typography,
  withStyles
} from '@material-ui/core';
const styles = {
  root: {
    textAlign: 'center',
  },
};
class Home extends Component {
  render() {
      return <h1>
          <Typography variant="display1">Home:
           </Typography>
      </h1>;
    }
  }
export default withStyles(styles)(Home);

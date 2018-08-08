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
class Categories extends Component {
    render() {
        return <h1>
            <Typography variant="display1">Categories:
             </Typography>
        </h1>;
      }
    }
export default withStyles(styles)(Categories);
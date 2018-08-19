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
        return (
            <Typography variant="display1">Categories
             </Typography>

            
        );
      }
    }
export default withStyles(styles)(Categories);
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';
import './App.css';
import AppHeader from './components/AppHeader';
import Banner from './components/Banner';

import Home from './pages/Home';
import PostsManager from './pages/PostsManager';
import Categories from './components/Categories';
import BottomNavigation from './components/Footer';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <Route exact path="/" component={Banner} />

    <main className={classes.main}>
    <Route exact path="/" component={Home} />    
      <SecureRoute exact path="/posts" component={PostsManager} />
      <Route path="/implicit/callback" component={ImplicitCallback} />
      <Route path="/categories" component={Categories} />
    </main>
    <BottomNavigation />

  </Fragment>
);

export default withStyles(styles)(App);


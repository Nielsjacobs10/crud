import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import { withRouter, Link } from 'react-router-dom';
import {
  withStyles,
  Typography,
  Paper,
  GridListTileBar,
  GridListTile,
  GridList,
  IconButton,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { orderBy } from 'lodash';
import { compose } from 'recompose';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 650,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


const API = process.env.REACT_APP_API || 'http://localhost:3001';

class TravelCards extends Component {
  state = {
    loading: true,
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  async fetch(method, endpoint, body) {
    try {
      const response = await fetch(`${API}${endpoint}`, {
        method,
        body: body && JSON.stringify(body),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
          authorization: `Bearer ${await this.props.auth.getAccessToken()}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getPosts() {
    this.setState({ loading: false, posts: await this.fetch('get', '/posts') });
  }

  savePost = async (post) => {
    if (post.id) {
      await this.fetch('put', `/posts/${post.id}`, post);
    } else {
      await this.fetch('post', '/posts', post);
    }

    this.props.history.goBack();
    this.getPosts();
  }

  // async deletePost(post) {
  //   if (window.confirm(`Are you sure you want to delete "${post.title}"`)) {
  //     await this.fetch('delete', `/posts/${post.id}`);
  //     this.getPosts();
  //   }
  // }

  // renderPostEditor = ({ match: { params: { id } } }) => {
  //   if (this.state.loading) return null;
  //   const post = find(this.state.posts, { id: Number(id) });

  //   if (!post && id !== 'new') return <Redirect to="/posts" />;

  //   return <PostEditor post={post} onSave={this.savePost} />;
  // };

  render() {
    const { classes } = this.props;

    return (
<Fragment>
          <Typography variant="display2">Reizen</Typography>
        {/* {this.state.posts.length > 0 ? ( */}
          <Paper elevation={1} className={classes.posts}>
            <GridList cols={3} cellHeight={350} className={classes.gridList}>
              {orderBy(this.state.posts, ['updatedAt', 'title'], ['desc', 'asc']).map(post => (
                <GridListTile key={post.id}
                button component={Link} to={`/details/${post.id}`}>
                <img src={post.img} />
                 <GridListTileBar
              title={post.title}
              subtitle={post.updatedAt && `Updated ${moment(post.updatedAt).fromNow()}`}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
                  {/* <ListItemText
                    primary={post.title}
                    secondary={post.updatedAt && `Updated ${moment(post.updatedAt).fromNow()}`}
                  />
                   */}
                </GridListTile>
              ))}
            </GridList>
          </Paper>
        {/* ) : (
          !this.state.loading && <Typography variant="subheading">No Travels to display</Typography>
        )} */}

        {/* <Route exact path="/posts/:id" render={this.renderPostDetail} /> */}
      </Fragment>
    );
  }
}

export default compose(
  withAuth,
  withRouter,
  withStyles(styles),
)(TravelCards);

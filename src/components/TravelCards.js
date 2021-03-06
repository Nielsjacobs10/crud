import React, { Component, Fragment } from 'react';
// import { withAuth } from '@okta/okta-react';
import { withRouter, Link } from 'react-router-dom';
import {
  withStyles,
  // Typography,
  Paper,
  GridListTileBar,
  GridListTile,
  GridList,
  IconButton,
} from '@material-ui/core';
// import Details from '../pages/PostsViewer'
import InfoIcon from '@material-ui/icons/Info';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { find, orderBy } from 'lodash';
import { compose } from 'recompose';
import PostDetail from '../pages/detail';
// import PostEditor from '../components/PostEditor';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
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
          // authorization: `Bearer ${await this.props.auth.getAccessToken()}`,
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

  // savePost = async (post) => {
  //   if (post.id) {
  //     await this.fetch('put', `/posts/${post.id}`, post);
  //   } else {
  //     await this.fetch('post', '/posts', post);
  //   }

  //   this.props.history.goBack();
  //   this.getPosts();
  // }

   renderPostDetail = ({ match: { params: { id } } }) => {
    if (this.state.loading) return null;
    const post = find(this.state.posts, { id: Number(id) });

    return <PostDetail post={post} />;
  };

  render() {
    const { classes } = this.props;

    return (
<Fragment>
<div className="container-title">
          <h1 className="title">Reizen </h1>         
          </div>
        {/* {this.state.posts.length > 0 ? ( */}
          <Paper elevation={1} className={classes.posts}>
            <GridList cols={3} cellHeight={350} className={classes.gridList}>
              {orderBy(this.state.posts, ['updatedAt', 'title'], ['desc', 'asc']).map(post => (
                <GridListTile key={post.id} 
                button component={Link}  to={`/details/posts/${post.id}`}>
                <img src={post.img} alt={post.title} />
                 <GridListTileBar
              title={post.title}
              subtitle={post.updatedAt && `Updated ${moment(post.updatedAt).fromNow()}`}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
  
                </GridListTile>
              ))}
            </GridList>
          </Paper>

      </Fragment>
    );
  }
}

export default compose(
  
  withRouter,
  withStyles(styles),
)(TravelCards);

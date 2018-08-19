// import React, { Component, Fragment } from 'react';
// import { withAuth } from '@okta/okta-react';
// import { withRouter, Route, Redirect, Link } from 'react-router-dom';
// import {
//   withStyles,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Paper,
//   GridListTileBar,
//   GridListTile,
//   GridList,
//   IconButton,
// } from '@material-ui/core';
// import InfoIcon from '@material-ui/icons/Info';

// import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
// import moment from 'moment';
// import { find, orderBy } from 'lodash';
// import { compose } from 'recompose';
// import PostEditor from '../components/PostEditor';

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     height: 450,
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// });



// const API = process.env.REACT_APP_API || 'http://localhost:3001';

// class PostViewer extends Component {
//   constructor(props) {
//     super(props);

//   this.state = {
//     loading: true,
//     posts: [],
//   };

// }

//   async fetch(method, endpoint, body) {
//     try {
//       const response = await fetch(`${API}${endpoint}`, {
//         method,
//         body: body && JSON.stringify(body),
//         headers: {
//           'content-type': 'application/json',
//           accept: 'application/json',
//           // authorization: `Bearer ${await this.props.auth.getAccessToken()}`,
//         },
//       });
//       return await response.json();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   componentDidMount() {
//     this.getPosts();
//     const { match: { params } } = this.props;

//   }
//   // this.props.match.params.id
//   async getPosts() {
//     this.setState({ loading: false, posts: await this.fetch('get', '/posts/') });
//   }

//   // savePost = async (post) => {
//   //   if (post.id) {
//   //     await this.fetch('put', `/posts/${post.id}`, post);
//   //   } else {
//   //     await this.fetch('post', '/posts', post);
//   //   }

//   //   this.props.history.goBack();
//   //   this.getPosts();
//   // }
 


//   // renderPostEditor = ({ match: { params: { id } } }) => {
//   //   if (this.state.loading) return null;
//   //   const post = find(this.state.posts, { id: Number(id) });

//   //   if (!post && id !== 'new') return <Redirect to="/posts" />;

//   //   return <PostEditor post={post} onSave={this.savePost} />;
//   // };

//   render =() => {
//     const { classes } = this.props;
  
//     return(
//       <Fragment>
// <div className="container-title">
//           <h1 className="title">Reizen </h1>         
//           </div> 
//           {orderBy(this.state.posts, ['updatedAt', 'title'], ['desc', 'asc']).map(post => (
//           <Paper key={post.id} elevation={1} className={classes.posts}>
//             <GridList cols={1} cellHeight={350} className={classes.gridList}>
//                 <GridListTile>
//                 <img src={post.img} alt={post.title} />
//                  <GridListTileBar
//               title={post.title}
//               subtitle={post.updatedAt && `Updated ${moment(post.updatedAt).fromNow()}`}
//               actionIcon={
//                 <IconButton className={classes.icon}>
//                   <InfoIcon />
//                 </IconButton>
//               }
//             />
  
//                 </GridListTile>
             
//             </GridList>
//           </Paper>
//   ))}

//       </Fragment>
//     );
//   }
// }

// export default compose(
//   withAuth,
//   withRouter,
//   withStyles(styles),
// )(PostViewer);

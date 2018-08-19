// import React, { Component } from 'react';

// class Country extends Component {
//     constructor() {
//         super() ;
//         this.state = {
//             posts: [],
//         };
//     }
//     componentDidMount() {
//         fetch ('http://localhost:3001')
//         .then(results => {
//             return results.json();
//         }).then(data => {
//             let posts = data.results.map((land) => {
//                 return(
//                     <div key={land.results}>
//                     {land.results}
//                     </div>
//                 )
//             })
//             this.setState({posts: posts});
//    console.log("state", this.state.posts);
//         })
//     }

//     render() {
//         return (
//             <div className="land">
//             {this.state.posts}
//             </div>
//         );
//     }
// }
// export default Country
// import React, { Component } from 'react';
// import firebase from '../../utils/firebase';
// import { fetchProjects } from '../../actions/index';
// import { fetchUser } from '../../actions/firebase_actions';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Link } from 'react-router';
// import Loading from '../helpers/loading';
// import _ from 'lodash';
//
// class Projects extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentWillMount() {
//     this.props.fetchUser().then(data => {
//       this.setState( {currentUser: data.payload} )
//       this.props.fetchProjects(this.props.currentUser.uid)
//     })
//   }
//
//   renderProjects() {
//     return _.map(this.props.projects, function(project) {
//       return (
//         <li className='list-group-item' key={project.title}>
//           <strong>{project.title}</strong>
//         </li>
//       )
//     })
//   }
//
//   render() {
//     if (!this.props.currentUser) {
//       return <Loading/>
//     }
//
//     if (!this.props.projects) {
//       return (
//         <div>
//           <h3>Projects
//             <Link to="/new_project" className="btn btn-default pull-right">New Project</Link>
//           </h3>
//           <div>
//             You do not currently have any projects.
//           </div>
//         </div>
//       )
//     }
//
//     return (
//       <div>
//         <h3>Projects
//           <Link to="/new_project" className="btn btn-default pull-right">New Project</Link>
//         </h3>
//         <ul className='list-group'>
//           {this.renderProjects()}
//         </ul>
//       </div>
//     )
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchProjects, fetchUser }, dispatch);
// }
//
// function mapStateToProps(state) {
//   return {
//     projects: state.projects.all,
//     currentUser: state.currentUser
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Projects);

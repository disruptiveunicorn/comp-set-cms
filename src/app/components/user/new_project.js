// import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
// import { createProject } from '../../actions/index';
// import { fetchUser } from '../../actions/firebase_actions';
// import { reduxForm } from 'redux-form';
//
// class NewProject extends Component {
//   static contextTypes = {
//     router: PropTypes.object
//   }
//
//   componentWillMount() {
//     this.props.fetchUser().then(data => {
//       this.setState( {currentUser: data.payload} )
//     })
//   }
//
//   onSubmit(props) {
//     console.log(props);
//     //this.props.currentUser.uid, "Office Building 6", "New York"
//     // Second and third arguments are mock data to be hooked up with Redux Form
//     this.props.createProject(props).then(() => {
//       this.context.router.push('/projects')
//     })
//   }
//
//   render() {
//     const { fields: { title, location, description }, handleSubmit } = this.props;
//
//     return (
//       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//         <h3>Create a New Project</h3>
//         <div className={`form-group ${title.touched && title.invalid ? 'has danger' : ''}`}>
//           <label>Title</label>
//           <input type="text" className="form-control" {...title} />
//           <div className="text-help">
//             {title.touched ? title.error: ''}
//           </div>
//         </div>
//
//         <div className={`form-group ${location.touched && location.invalid ? 'has-danger': ''}`}>
//           <label>Location</label>
//           <input type="text" className="form-control" {...location}/>
//           <div className="text-help">
//             { categories.touched ? categories.error : ''}
//           </div>
//         </div>
//         <div>
//           <label>Description</label>
//           <textarea className="form-control" />
//           <div className="text-help">
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//         <Link to="/projects" className="btn btn-danger pull-right">Cancel</Link>
//       </form>
//     )
//   }
// }
//
// function validate(value) {
//   const error = {};
//   if(!value.title) {
//     error.title = "Enter a title"
//   }
//   if(!value.location) {
//     error.location = "Enter a location"
//   }
//   if(!value.description) {
//     error.description = "Enter a description"
//   }
//   return error;
// }
//
//
// // export default connect(mapStateToProps, mapDispatchToProps)(NewProject);
//
// export default reduxForm({
//   form: 'NewProject',
//   fields: ['title', 'location', 'description'],
//   validate
// }, null, { createProject, fetchUser })(NewProject);

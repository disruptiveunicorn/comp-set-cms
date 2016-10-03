import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { createProject } from '../../actions/index';
import { fetchUser } from '../../actions/firebase_actions';
import { reduxForm } from 'redux-form';

class NewProject extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchUser().then(data => {
      this.setState( {currentUser: data.payload} )
    })
  }

  onSubmit(props) {
    const uid = this.props.currentUser.uid;
    const title = this.props.fields.title.value;
    const location = this.props.fields.location.value;
    const description = this.props.fields.description.value;

    this.props.createProject(uid, title, location, description).then(() => {
      this.context.router.push('/projects')
    })
  }

  render() {
    const { fields: { title, location, description }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Project</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${location.touched && location.invalid ? 'has-danger' : ''}`}>
          <label>Location</label>
          <input type="text" className="form-control" {...location} />
          <div className="text-help">
            {location.touched ? location.error : ''}
          </div>
        </div>
        <div>
          <label>Description</label>
          <textarea className="form-control" {...description} />
          <div className="text-help">
            {description.touched ? description.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/projects" className="btn btn-danger pull-right">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a username";
  }
  if (!values.description) {
    errors.description = "Enter description";
  }
  if (!values.location) {
    errors.location = "Enter location";
  }

  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createProject, fetchUser }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(NewProject);

export default reduxForm({
  form: 'NewProject',
  fields: ['title', 'location', 'description'],
  validate
}, mapStateToProps, mapDispatchToProps)(NewProject);

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
    // Second and third arguments are mock data to be hooked up with Redux Form
    this.props.createProject(this.props.currentUser.uid, "Office Building 6", "New York").then(() => {
      this.context.router.push('/projects')
    })
  }

  render() {
    const { fields: { title, location, description }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Project</h3>
        <div>
          <label>Title</label>
          <input type="text" className="form-control" />
          <div className="text-help">
          </div>
        </div>
        <div>
          <label>Location</label>
          <input type="text" className="form-control" />
          <div className="text-help">
          </div>
        </div>
        <div>
          <label>Description</label>
          <textarea className="form-control" />
          <div className="text-help">
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/projects" className="btn btn-danger pull-right">Cancel</Link>
      </form>
    )
  }
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
  fields: ['title', 'location', 'description']
}, mapStateToProps, mapDispatchToProps)(NewProject);

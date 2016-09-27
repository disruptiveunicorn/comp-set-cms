import React, { Component } from 'react';
import firebase from '../../utils/firebase';
import { fetchProjects } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Loading from '../helpers/loading';
import { fetchUser } from '../../actions/firebase_actions';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUser();
  }

  componentWillMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return this.props.projects.map((project) => {
      return (
        <li className='list-group-item' key={project.id}>
          <strong>{project.name}</strong>
        </li>
      )
    })
  }

  render() {
    if (!this.props.currentUser) {
      return <Loading/>
    }

    if (!this.props.projects) {
      return (
        <div>
          <h3>Projects
            <Link to="/new_project" className="btn btn-default pull-right">New Project</Link>
          </h3>
          <div>
            You do not currently have any projects.
          </div>
        </div>
      )
    }

    return (
      <div>
        <h3>Projects
          <Link to="/new_project" className="btn btn-default pull-right">New Project</Link>
        </h3>
        <ul className='list-group'>
          {this.renderProjects()}
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProjects, fetchUser }, dispatch);
}

function mapStateToProps(state) {
  return {
    projects: state.projects.all,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

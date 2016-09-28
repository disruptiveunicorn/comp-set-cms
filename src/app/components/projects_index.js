import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects, createProject } from '../actions/index';
import { Link } from 'react-router';

class ProjectsIndex extends Component {
  // will activate when component is about to be rendered
  componentWillMount(){
    // data fetching

    this.props.fetchProjects();
    console.log('projects index fetch', this.props.fetchProjects());
  }

  renderProjects() {

      return (
        <li className="list-group-item" key={this.props.project.id}>
          <Link to={`projects/${project.id}`}>
            <span className="pull-xs-right">{project.title}</span>
            <strong>{project.title}</strong>
          </Link>
        </li>
      );
    };

  render() {
    console.log('projects index redner', this.props);
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/projects/new" className="btn btn-primary">
            Add a Project
          </Link>
        </div>
        <h3>Projects</h3>
        <ul className="list-group">
          <li>{console.log('the props rea', this.props)}</li>
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { projects: state.projects}
}

export default connect( mapStateToProps , { fetchProjects })(ProjectsIndex);

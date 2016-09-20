import React, { Component } from 'react';
import { fetchProjects } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Projects extends Component {
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
    return (
      <div>
        <h3>Projects</h3>
        <ul className='list-group'>
          {this.renderProjects()}
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProjects }, dispatch);
}

function mapStateToProps(state) {
  return {
    projects: state.projects.all
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

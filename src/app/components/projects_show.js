import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchProjects, deleteProjects } from '../actions/index';
import { Link } from 'react-router';

class ProjectsShow extends Component {

  static contextTypes = {
    // gives access to router
    router: PropTypes.object
  };
  componentWillMount() {
    console.log('this.props.projects is ', this.props.projects)
    this.props.fetchProjects(this.props.projects);
  }

  onDeleteClick(){
    this.props.deletePost(this.props.projects)
      .then( () => {
        this.context.router.push('/projects');
      });

  }

  render() {

      const { project } = this.props;
      if (!project) {
        return <div>Loading...</div>;
      }

      return (
        <div>
          <Link to="/">Back to Index</Link>
          <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}
            >
            Delete Post
          </button>
          <h3>{project.title}</h3>
          <h6>name: {project.name}</h6>
          <p>{project.street}</p>
        </div>

      )
  }
}

function mapStateToProps(state) {
  return { projects: state.projects };
}

export default connect(mapStateToProps, {fetchProjects, deleteProjects})(ProjectsShow);

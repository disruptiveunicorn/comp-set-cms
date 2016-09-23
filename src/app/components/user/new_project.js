import React, { Component } from 'react';
import { Link } from 'react-router';

class NewProject extends Component {
  render() {
    return (
      <form>
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

export default NewProject;

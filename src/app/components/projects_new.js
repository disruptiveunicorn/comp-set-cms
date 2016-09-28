import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { createProject } from '../actions/index';
import { Link } from 'react-router';


class ProjectsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  handleInputChange(event){
    this.setState({ projects: event.target.value });
  }
  onSubmit(event) {

    this.props.createProject(event)
      .then( () => {
        this.context.router.push("/projects")
      })
  }
  render() {

    const { fields: {title, street, city, state, zip, notes } , handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Add a Property</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
            <input type="text" className="form-control" {...title} />
            <div className="text-help">
            {title.touched ? title.error : '' }
          </div>
    </div>

    <div className={`form-group ${street.touched && street.invalid ? 'has-danger' : ''}`}>
      <label>Street</label>
        <input type="text" className="form-control" {...street} />
        <div className="text-help">
        {street.touched ? street.error : '' }
      </div>
    </div>

    <div className={`form-group ${city.touched && city.invalid ? 'has-danger' : ''}`}>
      <label>City</label>
        <input type="text" className="form-control" {...city} />
        <div className="text-help">
        {city.touched ? city.error : '' }
      </div>
    </div>

    <div className={`form-group ${state.touched && state.invalid ? 'has-danger' : ''}`}>
      <label>State</label>
        <input type="text" className="form-control" {...state} />
        <div className="text-help">
        {state.touched ? state.error : '' }
      </div>
    </div>

    <div className={`form-group ${zip.touched && zip.invalid ? 'has-danger' : ''}`}>
      <label>Zip</label>
        <input type="text" className="form-control" {...zip} />
        <div className="text-help">
        {zip.touched ? zip.error : '' }
      </div>
    </div>


    <div className={`form-group ${notes.touched && notes.invalid ? 'has-danger' : ''}`}>
      <label>Notes</label>
      <textarea className="form-control" {...notes}/>
      <div className="text-help">
        {notes.touched ? notes.error : '' }
      </div>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
    <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}
function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a title';
  }
  if(!values.street) {
    errors.street = 'Enter a street'
  }
  if(!values.city) {
    errors.city = 'Enter a city'
  }
  if(!values.state) {
    errors.state = 'Enter a state';
  }
  if(!values.zip) {
    errors.zip = 'Enter zip code'
  }
  if(!values.notes) {
    errors.notes = 'Enter some notes'
  }
  return errors;
}

export default reduxForm({
  form: 'ProjectsForm',
  fields: ['title', 'street', 'city','state', 'zip', 'notes'],
  validate
},null, { createProject })(ProjectsNew);

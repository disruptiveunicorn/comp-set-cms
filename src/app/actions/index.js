import firebase from 'firebase';
import { FETCH_PROJECTS } from './types';


const database = app.database();
const projects = database.ref('projects');

// const INITIAL_PROJECTS = [{ id: 1, name: 'Tower' }, 
//                           { id: 2, name: 'Apartment' },
//                           { id: 3, name: 'Office' }];

// export function fetchProjects() {
//   return {
//     type: FETCH_PROJECTS,
//     payload: INITIAL_PROJECTS
//   };
// }

export function fetchProjects() {
  return dispatch => {
    projects.on('value', snapshot => {
      dispatch({
        type: FETCH_PROJECTS,
        payload: snapshot.val()
      })
    })
  }
}

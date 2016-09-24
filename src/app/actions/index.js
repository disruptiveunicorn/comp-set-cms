import firebase from 'firebase';
import { FETCH_PROJECTS } from './types';
import { CREATE_PROJECT } from './types';
import { ADD_USER_TO_DATABASE } from './types';
import { firebaseDb } from '../utils/firebase'

const projects = firebaseDb.ref('projects');
const users = firebaseDb.ref('users');

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

export function createProject() {
  return dispatch => {
    projects.on('value', snapshot => {
      dispatch({
        type: CREATE_PROJECT,
        payload: snapshot.val()
      })
    })
  }
}

export function addUserToDatabase(userUID, email) {
  return dispatch => firebaseDb.ref('users/' + userUID).set( {"email": email} );
}

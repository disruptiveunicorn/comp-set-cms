import firebase from 'firebase';
import { FETCH_PROJECTS } from './types';
import { CREATE_PROJECT } from './types';
import { ADD_USER_TO_DATABASE } from './types';
import { firebaseDb } from '../utils/firebase'

const users = firebaseDb.ref('users');

export function fetchProjects() {
  let projects = firebaseDb.ref().child('projects');
  return dispatch => {
    projects.on('value', snapshot => {
      dispatch({
        type: FETCH_PROJECTS,
        payload: snapshot.val()
      })
    })
  }
}

export function createProject(p) {
  let project = firebaseDb.ref().child('projects');
  return dispatch => project.push(p);
}

export function deleteProject(key) {
  return dispatch => Posts.child(key).remove();
}

export function addUserToDatabase(userUID, email) {
  return dispatch => firebaseDb.ref('users/' + userUID).set( {"email": email} );
}

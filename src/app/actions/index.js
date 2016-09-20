export const FETCH_PROJECTS = 'FETCH_PROJECTS';
// import firebase from 'firebase';
// import FIREBASE_CONFIG from '../config'

// console.log(FIREBASE_CONFIG)
// const FBApp = firebase.initializeApp(FIREBASE_CONFIG)
// console.log(FBApp)
// const Projects = FBAPP.database().ref('projects')
// console.log(Projects)

const INITIAL_PROJECTS = [{ id: 1, name: 'Tower' }, 
                          { id: 2, name: 'Apartment' },
                          { id: 3, name: 'Office' }];

export function fetchProjects() {
  return {
    type: FETCH_PROJECTS,
    payload: INITIAL_PROJECTS
  };
}

// export function fetchProjects() {
//   return dispatch => {
//     Projects.on('value', snapshot => {
//       dispatch({
//         type: FETCH_PROJECTS,
//         payload: snapshot.val()
//       })
//     })
//   }
// }

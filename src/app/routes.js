import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import HomeIndex from './components/index_home';
import UserLogin from './components/user/login';
import UserLogout from './components/user/logout';
import UserRegister from './components/user/register';
import UserProfile from './components/user/profile';
import ResetPassword from './components/user/reset_password';
import Projects from './components/user/projects';
import NewProject from './components/user/new_project';

import {firebaseAuth} from './utils/firebase';

const requireLogin = (nextState, replace, next)=> {
  if(!firebaseAuth.currentUser){
    replace('/');
  }
  next();

}
const redirectIfLoggedIn = (nextState, replace, next)=> {
  if(firebaseAuth.currentUser){
    replace('/projects');
  }
  next();
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeIndex} onEnter={redirectIfLoggedIn} />
    <Route path="login" component={UserLogin} />
    <Route path="logout" component={UserLogout} />
    <Route path="register" component={UserRegister} />
    <Route path="reset" component={ResetPassword} />
    <Route path="profile" component={UserProfile} onEnter={requireLogin}/>
    <Route path="projects" component={Projects} onEnter={requireLogin}/>
    <Route path="new_project" component={NewProject} onEnter={requireLogin}/>
  </Route>
);

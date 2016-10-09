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
import MapView from './components/user/map_view';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeIndex} />
    <Route path="/login" component={UserLogin} />
    <Route path="/logout" component={UserLogout} />
    <Route path="/register" component={UserRegister} />
    <Route path="/reset" component={ResetPassword} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/projects" component={Projects} />
    <Route path="/new_project" component={NewProject} />
    <Route path="/map_view" component={MapView} />
  </Route>
);

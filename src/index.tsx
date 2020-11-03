import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { AuthContainer } from './ui/auth/AuthContainer';
import { AuthCallbackContainer } from './ui/auth/AuthCallbackContainer';
import { MusicContainer } from './ui/music/MusicContainer';

document.addEventListener('DOMContentLoaded', () => {
  console.log("checking render")
  ReactDom.render(
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={AuthContainer} />
        <Route path='/callback/' component={AuthCallbackContainer}/>
        <Route path='/search' component={MusicContainer} />
      </Switch>
    </Router>,
    document.getElementById('root')
  );
});
import React, {FC} from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import TopPage from './components/TopPage';
import SearchMusic from './components/SearchMusic';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={TopPage} exact />
        <Route path='/search' component={SearchMusic} />
      </Switch>
    </Router>
  )
}

export default App;
import React, {FC} from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import TopPage from './components/TopPage';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={TopPage} exact />
      </Switch>
    </Router>
  )
}

export default App;
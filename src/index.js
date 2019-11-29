import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import getAuthToken from './authentication';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

const store = configureStore()

//将来的には、react-routerを利用してclient-idを持ってない人用のアクセスを用意する
const accessToken = getAuthToken()
console.log(accessToken)

ReactDom.render(
  <Provider store = {store}>
    <BrowserRouter>
      <div>
        <Route exact path='/'>
          <Redirect to={'/app'} />
        </Route>
        <Route exact path='/app'>
          <App token={accessToken}/>
        </Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

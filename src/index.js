import React from 'react';
import ReactDom from 'react-dom';
import * as serviceWorker from './serviceWorker';
import getAuthToken from './authentication';

//将来的には、react-routerを利用してclient-idを持ってない人用のアクセスを用意する
const accessToken = getAuthToken()

ReactDom.render(
  <div>
    Hello
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

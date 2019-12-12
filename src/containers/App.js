import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as spotifyActions from '../actions'; //actions

import SearchMusic from '../components/SearchMusic';

class App extends Component {
  
  render() {
    const { dispatch } = this.props
    const boundActionsCreators = bindActionCreators(spotifyActions, dispatch)
    return (
      <SearchMusic
        item = {this.props.item}
        spotify = {this.props.spotify}
        token = {this.props.token}
        fetchData = {boundActionsCreators.fetchData}
        saveToken = {boundActionsCreators.saveToken}
        boundActionsCreators = {boundActionsCreators}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  let { item, spotify, token } = state
  token = ownProps.token
  return {
    item, spotify, token
  }
}
export default connect(mapStateToProps)(App);


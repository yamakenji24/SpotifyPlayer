import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import authentication from '../authentication';

import * as spotifyActions from '../actions'; //actions

import SearchMusic from '../components/search-music';

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { dispatch } = this.props
    const boundActionsCreators = bindActionCreators(spotifyActions, dispatch)
    console.log(this.props)
    return (
      <SearchMusic
        item = {this.props.item}
        page = {this.props.page}
        spotify = {this.props.spotify}
        token={this.props.token}
        fetchData = {boundActionsCreators.fetchData}
        saveToken = {boundActionsCreators.saveToken}
        boundActionsCreators = {boundActionsCreators}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  let { item, page, spotify, token } = state
  token = ownProps.token
  const {
    isFetching,
    items: itemData
  } = spotify[item] || {
    isFetching: true,
    items:[]
  }
  
  return {
	page, item, spotify, token, isFetching, itemData
  }
}
export default connect(mapStateToProps)(App);


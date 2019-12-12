import {combineReducers} from 'redux'
import * as types from '../constants/actions';

function item (state = '', action) {
  switch(action.type) {
  case types.SEARCH_ITEM:
    return action.item
  default:
    return state
  }
}

// saving token parsed by the url
function token (state = '', action) {
  switch(action.type) {
  case types.SAVE_TOKEN:
    return action.token
  default:
    return state
  }
}

function spotify (state = {}, action) {
  switch(action.type) {
  case types.REQUEST_ITEM:
  case types.RECEIVE_ITEM:
    return {
      ...state,
      items: action.itemData
      //itemData(state[action.item],action)
    }
  default:
    return state
  }
}

const rootReducer = combineReducers({
  item,
  spotify,
  token
})

export default rootReducer

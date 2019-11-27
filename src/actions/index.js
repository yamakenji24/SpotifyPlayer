import * as types from '../constants/actions';

export function selectPage(page) {
  return {
    type: types.SELECT_PAGE,
    page
  }
}

export function searchItem(item) {
  return {
    type: types.SEARCH_ITEM,
    item
  }
}

export function requestItem(item) {
  return {
    type: types.REQUEST_ITEM,
    item
  }
}

export function receiveItem (item, json) {
  return {
    type: types.RECEIVE_ITEM,
    item,
    itemData: json
  }
}

export function saveToken(token) {
  return {
    type: types.SAVE_TOKEN,
    token
  }
}

export function fetchData(searchedItem, token) {
  return {
    type: types.FETCH_DATA,
    searchedItem,
    token
  }
}

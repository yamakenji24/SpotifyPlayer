import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as constants from '../constants/component'

//tabs
import SearchBar from './tabs/SearchBar';
import TabList from './tabs/tab-list';
import TabListItem from './tabs/tab-list-item';

export default class SearchMusic extends Component {
  PropTypes: {
    item: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    spotify: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired,
    saveToken: PropTypes.func.isRequired,
    boundActionsCreators: PropTypes.object.isRequired
  }
  
  constructor(props) {
    super(props)
    this.state = {
      album: [ {id: '', albumname: '', artistname: ''}],
      showPanel: constants.ARTIST_PANEL
    }
    this.props.saveToken(this.props.token)
  }

  componentDidMount() {
    console.log("calling didmount")
    if(this.props.item === '') return
    this.props.fetchData(this.props.item, this.props.token)
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props)
    if (this.props.item !== prevProps.item) {
      this.props.fetchData(this.props.item, this.props.token)
      console.log(this.props)
    }
  }

  onClick(panelName) {
    this.setState({showPanel: panelName})
  }

  getPanel() {
    
  }

  handleSearchBarChange(nextItem) {
    console.log(this.props)
	this.props.boundActionsCreators.searchItem(nextItem)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <SearchBar
          onChange={this.handleSearchBarChange.bind(this)}
          item={this.props.item}
        />
        <TabList>
          <TabListItem dist={constants.ARTIST_PANEL} label="Artists" onClick={this.onClick.bind(this)} />
          <TabListItem dist={constants.ALBUM_PANEL} label="Album" onClick={this.onClick.bind(this)} />
          <TabListItem dist={constants.TRACK_PANEL} label="Track" onClick={this.onClick.bind(this)} />
        </TabList>
      </div>
    )
  }
}


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as constants from '../constants/component'

//tabs
import SearchBar from './tabs/SearchBar';
import TabList from './tabs/tab-list';
import TabListItem from './tabs/tab-list-item';
import TabContent from './tabs/tab-content';
import Artist from './tabs/Artist';
import Album from './tabs/Album';
import Track from './tabs/Track';
import '../styles/searchmusic.css';

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
    if(this.props.item === '') return
    this.props.fetchData(this.props.item, this.props.token)
  }

  componentDidUpdate(prevProps) {
    if ((this.props.item !== prevProps.item) && (this.props.item !== '')) {
      this.props.fetchData(this.props.item, this.props.token)
    }
  }

  onClick(panelName) {
    this.setState({showPanel: panelName})
  }

  getPanel() {
    if (this.props.spotify.items === undefined || this.props.spotify.items.length === 0) {
      return ;
    } else {
      switch(this.state.showPanel) {
      case constants.ARTIST_PANEL:
        return (
          <Artist artists={this.props.spotify.items.artists} />
        );
      case constants.ALBUM_PANEL:
        return (
          <Album albums={this.props.spotify.items.albums}/>
        );
        
      case constants.TRACK_PANEL:
        return (
          <Track tracks={this.props.spotify.items.tracks}/>
        );
      default:
        return null;
        
      }
    }
  }

  handleSearchBarChange(nextItem) {
	this.props.boundActionsCreators.searchItem(nextItem)
  }

  render() {
    const panel = this.getPanel()
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
        <TabContent>
          {panel}
        </TabContent>
      </div>
    )
  }
}


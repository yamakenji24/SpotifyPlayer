import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import artistImg from '../../images/artist-music.jpg';
import '../../styles/album.css';

export default class Album extends Component {
  PropTypes: {
    albums: PropTypes.array.isRequired
  }

  showAlbum() {
    return _.map(this.props.albums, (value, key, object) => (
      <div key={value.id} className='album'>
        <img
		   alt={value.name}
		   src={value.image === undefined ? artistImg : value.image.url}>
		 </img>
		<h5>{value.name}</h5>
		<p>By {value.artist}</p>
      </div>
    ))
  }

  render() {
    const album = this.showAlbum();
    return(
      <div className='albums-wrapper'>
        {album}
      </div>
    )
  }
}

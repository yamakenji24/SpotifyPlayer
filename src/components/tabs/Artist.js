import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import artistImg from '../../images/artist-music.jpg';
import '../../styles/artist.css';

export default class Artist extends Component {
  PropTypes: {
    artists: PropTypes.array.isRequired
  }
  
  showArtist() {
    return _.map(this.props.artists, (value, key, object) => (
	  <div key={value.id} className='artist'>
		<img 
		  alt={value.name}
		  src={value.image === undefined ? artistImg : value.image.url}>
		</img>
		<p>{value.name}</p>
	  </div>
	))
  }
  
  render() {
    const artist = this.showArtist();
    return (
      <div className='artists-wrapper'>
        {artist}
      </div>
    )
  }
}

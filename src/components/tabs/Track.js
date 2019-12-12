import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import '../../styles/track.css';

// audio
import Sound from 'react-sound';
import AudioController from '../audio/AudioController';

export default class Track extends Component {
  PropTypes: {
    tracks: PropTypes.array.isRequired
  }
  
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      url: ''
    }
  }

  playBack() {
    if(this.state.isPlaying) {
      console.log(this.state)
      return (
        <Sound url={this.state.url} playStatus={Sound.status.PLAYING}/>
      )
    } else {
      return null;
    }
  }

  onClick(preview_url) {
    this.setState({
      isPlaying: !this.state.isPlaying,
      url: preview_url
    })
  }
    
  showTrack() {
    return _.map(this.props.tracks, (value, index, object) => (
      <div key={value.id} className='track'>
		<div className='counter'>
		  <p>{++index}.</p>
		</div>
		<div className='track-artists'>
          <h5>{value.name}</h5>
          <AudioController playUrl={value.playUrl} label="再生" onClick={this.onClick.bind(this)}/>
          { <li key={index}>{value.artists}</li> }
        </div>
	  </div>
    ))
  }

  render() {
    const track = this.showTrack();
    const player = this.playBack();
    return (
      <div className='tracks-wrapper'>
        {track}
        {player}
      </div>
    )
  }
}

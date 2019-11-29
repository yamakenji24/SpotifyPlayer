import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AudioController extends Component {
  PropTypes: {
    playUrl: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }
  
  onClick() {
    this.props.onClick(this.props.playUrl);
  }

  render() {
    return (
      <li style={{textDecoration: 'underline overline', color: '#fff'}}>
        <a onClick={this.onClick.bind(this)}>{this.props.label}</a>
      </li>
    )
  }
}

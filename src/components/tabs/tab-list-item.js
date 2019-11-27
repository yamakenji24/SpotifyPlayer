import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TabListItem extends Component {
  PropTypes: {
    dist: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick() {
    this.props.onClick(this.props.dist);
  }

  render() {
    return (
      <li role="presentation">
        <a onClick={this.onClick.bind(this)} data-toggle="tab">{this.props.label}</a>
      </li>
    )
  }
}

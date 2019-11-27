import React, {Component} from 'react';
import '../../styles/navbar.css';

export default class TabList extends Component {
  render() {
    return (
      <ul className="navbar-wrapper" role="tablist">
        {this.props.children}
      </ul>
    )
  }
}

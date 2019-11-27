import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../styles/searchBar.css'

class SearchBar extends Component {

  
  render() {
    let input = this.props.item
    return (
      <div className='searchBar-wrapper'>
        <p>Search for an Artists, Song or Album</p>
        <form onChange = {e => {
          e.preventDefault()
          this.props.onChange(input.value)
        }}>
          <input
            autoFocus
            defaultValue={this.props.item}
            placeholder="start typing..."
            ref={node => {
              input = node
            }}
          />
        </form>
      </div>
    )
  }
}

SearchBar = connect()(SearchBar)
export default SearchBar

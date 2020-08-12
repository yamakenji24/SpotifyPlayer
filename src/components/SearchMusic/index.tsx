import React, {FC, useState, useEffect} from 'react';
import Artists from './Artists';
import {useSearch} from './useSearch';

const SearchMusic: FC = () => {
  const [fetchData, {artists, albums}] = useSearch()

  const handleonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetchData(e.target.value)
  }

  return (
    <div>
      <h1>Search Page</h1>
      <input 
        autoFocus
        placeholder="start typing..."
        onChange={handleonChange}
      />

      <Artists artists={artists} />
    </div>
  )
}

export default SearchMusic;
import React, {FC, useState, useCallback} from 'react';
import Artists from './Artists';
import Albums from './Albums';
import Tracks from './Tracks';
import {useSearch} from './useSearch';

const ARTIST_PANEL = 'ARTIST_PANEL';
const ALBUM_PANEL = 'ALBUM_PANEL';
const TRACK_PANEL = 'TRACK_PANEL';

const SearchMusic: FC = () => {
  const [fetchData, {artists, albums, tracks}] = useSearch()
  const [panel, setPanel] = useState(ARTIST_PANEL)

  const handleonChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => { 
    fetchData(e.target.value)
  }, [])

  const handleOnClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setPanel(e.currentTarget.name)
  }, [])

  const switchPanel = () => {
    switch(panel) {
      case ARTIST_PANEL:
        return <Artists artists={artists}/>
      case ALBUM_PANEL:
        return <Albums albums={albums} />
      case TRACK_PANEL:
        return <Tracks tracks={tracks} />
      default:
        return null
    }
  }

  return (
    <div>
      <h1>Search Page</h1>
      <input 
        autoFocus
        placeholder="start typing..."
        onChange={handleonChange}
      />

      <div className="panel_button">
        <button name={ARTIST_PANEL} onClick={handleOnClick}>Artists</button>
        <button name={ALBUM_PANEL} onClick={handleOnClick}>Albums</button>
        <button name={TRACK_PANEL} onClick={handleOnClick}>Tracks</button> 
      </div>    

      <div className="panel_display">
        {switchPanel()}
      </div>
    </div>
  )
}

export default SearchMusic;
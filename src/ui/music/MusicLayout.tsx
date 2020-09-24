import * as React from 'react';
import { useState, useCallback } from 'react';
import { Artists } from './components/Artists';
import { Albums } from './components/Albums';
import { Tracks } from './components/Tracks';
import { useSearch} from './hooks/useSearch';
import './musicLayout.css';

type ProgressPanel = 'ARTIST_PANEL' | 'ALBUM_PANEL' | 'TRACK_PANEL' | 'UNSELECTED';

const ARTIST_PANEL = 'ARTIST_PANEL';
const ALBUM_PANEL = 'ALBUM_PANEL';
const TRACK_PANEL = 'TRACK_PANEL';

const castToProgressPanel = (panel: string): ProgressPanel => {
  switch(panel) {
    case ARTIST_PANEL:
      return ARTIST_PANEL
    case ALBUM_PANEL:
      return ALBUM_PANEL
    case TRACK_PANEL:
      return TRACK_PANEL
    default:
      return 'UNSELECTED'
  }
}

export const MusicLayout = ():JSX.Element => {
  const [panel, setPanel] = useState<ProgressPanel>(ARTIST_PANEL)
  const [fetchData, {artists, albums, tracks}] = useSearch()

  const handleOnClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setPanel(castToProgressPanel(e.currentTarget.name))
  }, [])

  const handleonChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => { 
    fetchData(e.target.value)
  }, [])

  const switchPanel = () => {
    switch(panel) {
      case ARTIST_PANEL:
        return <Artists artists={artists}/>
      case ALBUM_PANEL:
        return <Albums albums={albums}/>
      case TRACK_PANEL:
        return <Tracks tracks={tracks}/>
      default:
        return null
    }
  }

  return (
    <>
      <div className='searchBar-wrapper'>
        <p>Search for an Artists, Song or Album</p>
        <input 
         autoFocus
         placeholder="start typing..."
         onChange={handleonChange}
        />
      </div>


      <div className="navbar-wrapper">
        <button name={ARTIST_PANEL} onClick={handleOnClick}>Artists</button>
        <button name={ALBUM_PANEL} onClick={handleOnClick}>Albums</button>
        <button name={TRACK_PANEL} onClick={handleOnClick}>Tracks</button> 
      </div>    

      <div className="panel_display">
        {switchPanel()}
      </div>

    </>
  )
}
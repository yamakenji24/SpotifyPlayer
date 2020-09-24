import * as React from 'react';
import { trackType } from '../../../types/trackType';
import './track.css';

interface Props {
  tracks: trackType[];
}

export const Tracks = ({tracks}: Props): JSX.Element => {
  return (
    <>
      {
        tracks[0].id !== '' ? tracks.map((track, idx) => 
          <div key={track.id}>
            <p>{idx + 1}</p>
            <h4>{track.name}</h4>
          </div>  
        )
        : <><p>Now Loading Tracks...</p></>
      }
    </>
  )
}
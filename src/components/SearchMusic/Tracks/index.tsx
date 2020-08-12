import React, {FC} from 'react';
import {trackType} from './trackType';

type Props = {
  tracks: trackType[]
}

const Tracks :FC<Props> = ({tracks}) => {
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

export default Tracks;
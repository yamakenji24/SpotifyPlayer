import * as React from 'react';
import { artistType } from '../../../types/artistType';
import './artist.css';

interface Props {
  artists: artistType[];
}

export const Artists = ({artists}: Props): JSX.Element => {
  return (
    <> 
      {
        artists[0].id !== '' ? artists.map(artist =>
          <div key={artist.id} className="artist">
            <img 
              alt={artist.name}
              src={artist.image === undefined ? undefined : artist.image.url}
            />
            <p>{artist.name}</p>
          </div>
        )
        : <><p>Now Loading Artist...</p></>
      }
    </>
  )
}
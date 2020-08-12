import React, {FC} from 'react';
import {artistType} from './artistType';

type Props = {
  artists: artistType[]
}

const Artists: FC<Props> = ({artists}) => {
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

export default Artists;
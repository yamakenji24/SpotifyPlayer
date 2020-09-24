import * as React from 'react';
import { albumType } from '../../../types/albumType';
import './album.css';

interface Props {
  albums: albumType[];
}

export const Albums = ({albums}: Props): JSX.Element => {
  return (
    <>
      {
        albums[0].id !== '' ? albums.map(album =>
          <div key={album.id} className="album">
            <img 
              alt={album.name}
              src={album.image === undefined ? undefined : album.image.url}
            />
            <h3>{album.name}</h3>
            <p>By {album.artist}</p>
          </div>
        )
        : <><p>Now Loading Album....</p></>
      }
    </>
  )
}
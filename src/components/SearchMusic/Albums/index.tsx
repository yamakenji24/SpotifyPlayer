import React, {FC} from 'react';
import {albumType} from './albumType';

type Props = {
  albums: albumType[]
}

const Albums: FC<Props> = ({albums}) => {
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

export default Albums;
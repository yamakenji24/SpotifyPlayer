import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {albumType, albumsJsonType} from './albumType';

export const useSearchAlbum = (token:string|null, searchInput:string):{albums: albumType[]} => {
  const [albums, setAlbums] = useState<albumType[]>([{
    id:'',
    name:'',
    artist:'',
    image: {
      height: 0,
      url: '',
      width: 0
    }
  }])

  const fetchAlbum = async ():Promise<albumType[]> => {
    return await axios.get<albumsJsonType>(`https://api.spotify.com/v1/search?q=${searchInput}&type=album`, {
      headers: {'Authorization' : 'Bearer ' + token}
    })
    .then(response => response.data)
    .then(res => res.albums.items.map(item => ({
      id: item.id,
      name: item.name,
      artist: item.artists[0].name,
      image: item.images[1]
    })))
  }
  useEffect(() => {
    if (searchInput !== '') {
      fetchAlbum().then(data => setAlbums(data))
    }
  }, [searchInput])

  return {albums}
}
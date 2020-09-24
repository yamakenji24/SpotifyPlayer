import {useState, useEffect} from 'react';
import axios from 'axios';
import {albumType, albumsJsonType} from '../../../types/albumType';

export const useSearchAlbum = (token:string, searchInput:string): {albums: Array<albumType>} => {
  const [albums, setAlbums] = useState<Array<albumType>>([{
    id:'',
    name:'',
    artist:'',
    image: {
      height: 0,
      url: '',
      width: 0
    }
  }])

  const fetchAlbum = async (): Promise<Array<albumType>> => {
    return await axios.get<albumsJsonType>(`https://api.spotify.com/v1/search?q=${searchInput}&type=album`, {
      headers: {'Authorization' : 'Bearer ' + token}
    })
    .then(response => response.data)
    .then(res => {
      const data = res.albums.items.map(item => ({
        id: item.id,
        name: item.name,
        artist: item.artists[0].name,
        image: item.images[1]
      }))

      return Promise.resolve(data)
    })
    .catch(err => Promise.reject(new Error(err)))
  }
  useEffect(() => {
    const fetching = async () => {
      if (searchInput !== '') {
        const result = await fetchAlbum()
        setAlbums(result)
      }
    }

    fetching()
  }, [searchInput])

  return {albums}
}
import {useState, useEffect} from 'react';
import axios from 'axios';
import {artistType, artistsJsonType} from '../../../types/artistType';


export const useSearchArtist = (token:string, searchInput:string):{artists: Array<artistType>} => {
  const [artists, setArtists] = useState<Array<artistType>>([{
    id: '',
    name: '',
    image: {
      height: 0,
      url: '',
      width: 0
    }
  }])

  const fetchArtist = async (): Promise<Array<artistType>> => {
    return await axios.get<artistsJsonType>(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, {
      headers: {'Authorization' : 'Bearer ' + token}
    })
    .then(response => response.data)
    .then(res => {
      const data = res.artists.items.map(item => ({
        id: item.id,
        name: item.name,
        image: item.images[1]
      }))

      return Promise.resolve(data)
    })
    .catch(err => Promise.reject(new Error(err)))
  }

  useEffect(() => {
    const fetching = async () => {
      if (searchInput !== '') {
        const result = await fetchArtist()
        setArtists(result)
      }
    }

    fetching()
  }, [searchInput])

  return {artists}
}
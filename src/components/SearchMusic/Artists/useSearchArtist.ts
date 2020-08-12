import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {artistType, artistsJsonType} from './artistType';


export const useSearchArtist = (token:string|null, searchInput:string):{artists: artistType[]} => {
  const [artists, setArtists] = useState([{
    id: '',
    name: '',
    image: {
      height: 0,
      url: '',
      width: 0
    }
  }])

  const fetchArtist = async ():Promise<artistType[]> => {
    return await axios.get<artistsJsonType>(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, {
      headers: {'Authorization' : 'Bearer ' + token}
    })
    .then(response => response.data)
    .then(res => res.artists.items.map(item => ({
      id: item.id,
      name: item.name,
      image: item.images[1]
    })))
  }

  useEffect(() => {
    if (searchInput !== '') {
      fetchArtist().then(data => setArtists(data))
    }
  }, [searchInput])

  return {artists}
}
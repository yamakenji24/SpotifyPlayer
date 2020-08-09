import React, {FC, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

interface artistType {
  id: string,
  name: string,
  image: {
    height:number,
    url: string,
    width: number
  }
}
interface artistsItems {
  external_urls: {}
  followers: {
    href: string,
    total: number
  }
  genres: string[],
  href: string,
  id: string,
  images: {
      height: number,
      url: string,
      width: number
  }[],
  name: string,
  popularity: number,
  type: string,
  uri: string
}
interface artistsJsonType {
  artists: {
    href: string,
    items: artistsItems[],
    limit: number,
    next: string,
    offset: number,
    previous: string | null,
    total: number
  }
}

const useSearchArtist = ():[React.Dispatch<React.SetStateAction<string>>, {artists: artistType[]}] => {
  const [searchInput, setSearchInput] = useState('')
  const history = useHistory();
  const [token, setToken] = useState<string | null>('')
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

  const getToken = async () => {
    const checkToken = sessionStorage.getItem('accessToken')
    if(!checkToken || checkToken === 'undefined') {
      sessionStorage.removeItem('accessToken')
      history.push('/')
    }
    await setToken(checkToken)
  }
  useEffect(() => {
    if (searchInput !== '') {
      fetchArtist().then(data => setArtists(data))
    }
  }, [searchInput])

  useEffect(() => {
    getToken()
  })

  return [setSearchInput, {artists}]
}

const SearchMusic: FC = () => {
  const [fetchData, {artists}] = useSearchArtist();

  const handleonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetchData(e.target.value)
  }

  return (
    <div>
      <h1>Search Page</h1>
      <input 
        autoFocus
        placeholder="start typing..."
        onChange={handleonChange}
      />

      {
        artists[0].id !== '' ? artists.map(
          artist =>
            <div key={artist.id} className='artist'>
              <img 
                alt={artist.name}
                src={artist.image === undefined ? undefined : artist.image.url}
              />
              <p>{artist.name}</p>
            </div>
        )
        : <><p>Now Loading</p></>
      }
    </div>
  )
}

export default SearchMusic;
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSearchArtist} from './Artists/useSearchArtist';
import {useSearchAlbum} from './Albums/useSearchAlbum';

import {artistType} from './Artists/artistType';
import {albumType} from './Albums/albumType';

export const useSearch = (): [
  React.Dispatch<React.SetStateAction<string>>,
  {
    artists: artistType[],
    albums: albumType[],
  }
] => {
  const [searchInput, setSearchInput] = useState('')
  const history = useHistory();
  const [token, setToken] = useState<string | null>('')
  const {artists} = useSearchArtist(token, searchInput)
  const {albums} = useSearchAlbum(token, searchInput)

  const getToken = async () => {
    const checkToken = sessionStorage.getItem('accessToken')
    if(!checkToken) {
      sessionStorage.removeItem('accessToken')
      history.push('/')
    }
    await setToken(checkToken)
  }

  useEffect(() => {
    getToken()
  })

  return [setSearchInput, {artists, albums}]
}
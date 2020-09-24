import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSearchArtist} from './useSearchArtist';
import {useSearchAlbum} from './useSearchAlbum';
import {useSearchTrack} from './useSearchTrack';

import {artistType} from '../../../types/artistType'
import {albumType} from './../../../types/albumType';
import {trackType} from '../../../types/trackType';

export const useSearch = (): [
  React.Dispatch<React.SetStateAction<string>>,
  {
    artists: artistType[],
    albums: albumType[],
    tracks: trackType[],
  }
] => {
  const [searchInput, setSearchInput] = useState('')
  const history = useHistory();
  const [token, setToken] = useState<string>('')
  const {artists} = useSearchArtist(token, searchInput)
  const {albums} = useSearchAlbum(token, searchInput)
  const {tracks} = useSearchTrack(token, searchInput)

  const getToken = async () => {
    const checkToken = sessionStorage.getItem('accessToken')!
    if(!checkToken) {
      sessionStorage.removeItem('accessToken')
      history.push('/')
    }
    await setToken(checkToken)
  }

  useEffect(() => {
    getToken()
  }, [])

  return [setSearchInput, {artists, albums, tracks}]
}
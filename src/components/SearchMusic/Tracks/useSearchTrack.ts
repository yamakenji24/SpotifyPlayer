import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {trackType, tracksJsonType} from './trackType';

export const useSearchTrack = (token:string|null, searchInput:string):{tracks: trackType[]} => {
  const [tracks, setTracks] = useState<trackType[]>([{
    id: '',
    name: '',
    artists: '',
    playUrl: '',
  }])

  const fetchTrack = async () => {
    return await axios.get<tracksJsonType>(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, {
      headers: {'Authorization' : 'Bearer ' + token}
    })
    .then(response => response.data)
    .then(res => res.tracks.items.map(item => ({
      id: item.id,
      name: item.name,
      artists: item.artists[0].name,
      playUrl: item.preview_url,
    })))
  }

  useEffect(() => {
    if (searchInput !== '') {
      fetchTrack().then(data => setTracks(data))
    }
  }, [searchInput])

  return {tracks}
}
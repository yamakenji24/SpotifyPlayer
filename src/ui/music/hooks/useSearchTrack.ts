import {useState, useEffect} from 'react';
import axios from 'axios';
import {trackType, tracksJsonType} from '../../../types/trackType';

export const useSearchTrack = (token:string, searchInput:string):{tracks: Array<trackType>} => {
  const [tracks, setTracks] = useState<Array<trackType>>([{
    id: '',
    name: '',
    artists: '',
    playUrl: '',
  }])

  const fetchTrack = async (): Promise<Array<trackType>> => {
    return await axios.get<tracksJsonType>(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, {
      headers: {'Authorization' : 'Bearer ' + token}
    })
    .then(response => response.data)
    .then<Array<trackType>>(res => {
      const data = res.tracks.items.map(item => ({
        id: item.id,
        name: item.name,
        artists: item.artists[0].name,
        playUrl: item.preview_url,
      }));

      return Promise.resolve(data)
    })
    .catch(err => Promise.reject(new Error(err)))
  }

  useEffect(() => {
    const fetching = async () => {
      if (searchInput !== '') {
        const result = await fetchTrack()
        setTracks(result)
      }
    }

    fetching()
  }, [searchInput])

  return {tracks}
}
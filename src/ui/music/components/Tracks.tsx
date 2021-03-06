import * as React from 'react';
import { trackType } from '../../../types/trackType';
import { useAudio } from '../hooks/useAudio';
import './track.css';

interface Props {
  tracks: trackType[];
}

const AudioPlayer = (playUrl: string) => {
  const [playing, audio] = useAudio(playUrl);

  const handleOnClick = () => {
    playing ? audio.pause() : audio.play()
  }

  return (
    <>
      <button onClick={handleOnClick}>
        {playing ? "Pause" : "Play"}
      </button>
    </>
  );
};

export const Tracks = ({tracks}: Props): JSX.Element => {
  return (
    <>
      {
        tracks[0].id !== '' ? tracks.map((track, idx) => 
          <div key={track.id}>
            <p>{idx + 1}</p>
            <h4>{track.name}</h4>
            {track.playUrl ? AudioPlayer(track.playUrl): <p>no MP3 URL</p>}
          </div>  
        )
        : <><p>Now Loading Tracks...</p>
        </>
      }
    </>
  )
}
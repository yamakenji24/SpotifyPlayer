import { useState, useEffect } from 'react';

export const useAudio = (url: string): [boolean, HTMLAudioElement] => {

  const [audio] = useState(new Audio(url));
  const [, _forceUpdate] = useState(false);
  const forceUpdate = () => _forceUpdate(prevState => !prevState);

  
  useEffect(() => {
    audio.addEventListener("play", forceUpdate);
    audio.addEventListener("pause", forceUpdate);
    audio.addEventListener("ended", forceUpdate);

    return () => {
      audio.removeEventListener("play", forceUpdate);
      audio.removeEventListener("pause", forceUpdate);
      audio.removeEventListener("ended", forceUpdate);
    };
  }, []);

  return [!audio.paused, audio];
};
import { useState } from "react";
import * as Speech from "expo-speech";

export default function useReader(text) {
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);

  const handlePlay = () => {
    if (!playing && !paused) {
      Speech.speak(text, {
        onDone: () => {
          setPlaying(false);
        },
        onStart: () => setPlaying(true),
        onStopped: () => {
          setPlaying(false);
          setPaused(false);
        },
      });
    } else if (!playing && paused) {
      setPlaying(true);
      setPaused(false);
      Speech.resume();
    }
  };

  const handlePause = () => {
    if (playing) {
      setPaused(true);
      setPlaying(false);
      Speech.pause();
    }
  };

  const handleReplay = () => {
    if (paused || playing) {
      Speech.stop();
    }
  };

  const handleFinish = () => {
    Speech.stop();
  };

  return {
    handleFinish,
    handlePause,
    handlePlay,
    handleReplay,
    paused,
    playing,
  };
}

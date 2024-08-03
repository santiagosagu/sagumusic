/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import FastRewindOutlinedIcon from "@mui/icons-material/FastRewindOutlined";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import FastForwardOutlinedIcon from "@mui/icons-material/FastForwardOutlined";
import { Avatar, Slider } from "@mui/material";

interface Song {
  title: string;
  artist: string;
  image: string;
  src: string;
}

const playlist: Song[] = [
  {
    title: "Seven Days in Sunny June",
    artist: "Jamiroquai",
    image:
      "https://lh3.googleusercontent.com/Syc0T0hpUCioc8Ky5irJxhnSLOavM4gnWjVkVCeW8IUlB2v8i-xJEkyUcmumDoojHjIV_e0vtjmdnQY=w226-h226-l90-rj",
    src: "/mp3/Jamiroquai - Seven Days In Sunny June.mp3",
  },
  {
    title: "Rock You",
    artist: "Dirty Loops",
    image:
      "https://lh3.googleusercontent.com/vNn-QZo7_Abjev7HoNIpW1ej0pw1H9EpyVXzplSaoEIrW0zf3F593Z8a7mGweyX9DCIg6voZwM-5ZjL0=w226-h226-l90-rj",
    src: "/mp3/Dirty Loops - Rock You.mp3",
  },
  {
    title: "Belmont",
    artist: "Snarky Puppy",
    image:
      "https://lh3.googleusercontent.com/ed_noo_MHvi2xOglhE42kRnGb3hhaVUpTeE7IGxT982h4DLiArw9XjbppZEqvzawCjoKVADJIYoE0zTiIA=w226-h226-l90-rj",
    src: "/mp3/Snarky Puppy - Belmont (Empire Central).mp3",
  },
];

const MusicPlayerBotton: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong: Song = playlist[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current && duration > 0) {
        const currentTime = audioRef.current.currentTime;
        setProgress((currentTime / duration) * 100);
      }
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [duration]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      const audioDuration = audioRef.current.duration;
      setDuration(audioDuration);
    }
  };

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const newProgress = Array.isArray(newValue) ? newValue[0] : newValue;
    setProgress(newProgress);
    console.log(newProgress, "progress");
  };

  const handleChangeCommitted = (
    _event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    if (audioRef.current && duration > 0) {
      console.log("estoy aqui");

      const newProgress = Array.isArray(newValue) ? newValue[0] : newValue;
      const newTime = (newProgress / 100) * duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div style={styles.player}>
      <audio
        ref={audioRef}
        src={currentSong.src}
        onLoadedMetadata={handleLoadedMetadata}
        // onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextSong}
      />

      <div style={styles.controlsContainer}>
        <div style={styles.controls}>
          <button onClick={handlePrevSong}>
            <FastRewindOutlinedIcon fontSize="large" className="text-white" />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? (
              <PauseIcon fontSize="large" className="text-white" />
            ) : (
              <PlayArrowOutlinedIcon fontSize="large" className="text-white" />
            )}
          </button>
          <button onClick={handleNextSong}>
            <FastForwardOutlinedIcon fontSize="large" className="text-white" />
          </button>
        </div>

        <Slider
          value={progress}
          onChange={handleChange}
          onChangeCommitted={handleChangeCommitted}
          aria-labelledby="continuous-slider"
          style={styles.slider}
          sx={{
            color: "#ffff",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&::before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px rgb(255 255 255 / 16%)`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />

        <div style={styles.time}>
          <span>
            {formatTime(audioRef.current?.currentTime || 0)} /{" "}
            {formatTime(duration)}
          </span>
        </div>
      </div>

      <div style={styles.details}>
        <Avatar src={currentSong.image} />
        <h3 className="ml-2">{currentSong.title}</h3>
        <p>/</p>
        <p>{currentSong.artist}</p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  player: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#1d2124",
  },
  controlsContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  controls: {
    display: "flex",
    gap: "10px",
  },
  progress: {
    flexGrow: 1,
    margin: "0",
  },
  time: {
    minWidth: "80px",
    textAlign: "right",
    color: "white",
  },
  details: {
    display: "flex",
    textAlign: "center",
    color: "white",
    alignItems: "center",
  },
};

export default MusicPlayerBotton;

import React, { useState, useRef, useEffect } from "react";
import FastRewindOutlinedIcon from "@mui/icons-material/FastRewindOutlined";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import FastForwardOutlinedIcon from "@mui/icons-material/FastForwardOutlined";

const MusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

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

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong: Song = playlist[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

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
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime =
        (parseFloat(event.target.value) / 100) * audioRef.current.duration;
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
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNextSong}
      />

      <div style={styles.details}>
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
      </div>

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

      <div style={styles.time}>
        <span className="mr-1">
          {formatTime(audioRef.current?.currentTime || 0)}
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          style={styles.progress}
        />
        <span className="ml-2">{formatTime(duration)}</span>
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
    // maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    // border: "1px solid #ccc",
    // borderRadius: "8px",
    backgroundColor: "#1d2124",
    color: "white",
  },
  details: {
    textAlign: "center",
    marginBottom: "20px",
  },
  controls: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: "10px",
  },
  progress: {
    width: "100%",
  },
  time: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
};

export default MusicPlayer;

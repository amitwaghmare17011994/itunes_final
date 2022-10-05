import React, { useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import SongCard from "@components/SongCard";
import FullScreenDialog from "@components/FullScreenDialog";
import NotFound from "../../Components/NotFound";
import { useEffect } from "react";

const Body = (props) => {
  const { songs = null } = props;
  const [selectedSongToOpen, setSelectedSongToOpen] = useState(null);
  const [selectedSongToPlay, setSelectedSongToPlay] = useState(null);
  const [playingSongInstance, setplayingSongInstance] = useState(null);
  const [songPosition, setSongPosition] = useState(0);
  const [minMax, setMinMax] = useState({ min: 0, max: 100 });

  const [realTime, setRealTime] = useState(false);
  const countRef = useRef(songPosition);
  countRef.current = songPosition;
  let interval;

  useEffect(() => {
    if (playingSongInstance && !playingSongInstance?.paused) {
      interval = setInterval(() => {
        setSongPosition((currCount) => playingSongInstance.currentTime);
        if (playingSongInstance.direction === songPosition) {
          pauseSong();
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [playingSongInstance, playingSongInstance?.paused, songPosition]);

  const onSongSelected = (song) => {
    setSongPosition(0);
    setSelectedSongToOpen(song);
    onSongPlayHandler(song, !!song);
  };

  const onSongPlayHandler = (songItem, isPlay) => {
    if (playingSongInstance) {
      playingSongInstance.pause();
      playingSongInstance.remove();
    }
    if (isPlay) {
      const audio = new Audio(songItem.previewUrl);
      audio.load();
      audio.play();
      setTimeout(() => {
        setMinMax({ min: 0, max: audio.duration });
        setplayingSongInstance(audio);
        setSelectedSongToPlay(songItem);
      }, 1000);
    } else {
      pauseSong();
    }
  };

  const pauseSong = () => {
    if (playingSongInstance) {
      playingSongInstance.pause();
      playingSongInstance.remove();
    }
  };

  const onSongPositionChangeHandler = (value) => {
    playingSongInstance.currentTime = value;
    setSongPosition(value);
  };
  return (
    <div style={{ marginTop: 80 }}>
      {!!songs?.length ? (
        <Grid container direction="row" justify="center">
          {songs?.map((songItem) => (
            <Grid
              key={songItem.trackId}
              onClick={() => {
                onSongSelected(songItem);
              }}
              item
              xs={12}
              md={2}
              style={{ margin: 20 }}
            >
              <SongCard
                isPlaying={
                  selectedSongToPlay?.previewUrl === songItem?.previewUrl
                }
                onSongPlay={onSongPlayHandler}
                song={songItem}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <NotFound showLoader={songs===null}/>
        
      )}
      {selectedSongToOpen && (
        <FullScreenDialog
          open={selectedSongToOpen}
          song={selectedSongToOpen}
          onClose={() => {
            onSongSelected(null);
            playingSongInstance.pause();
            playingSongInstance.remove();
            setplayingSongInstance(null);
            setSelectedSongToPlay(null);
          }}
          onSongPlay={onSongPlayHandler}
          onSongPositionChange={onSongPositionChangeHandler}
          songPosition={songPosition}
          minMax={minMax}
        />
      )}
    </div>
  );
};

export default Body;

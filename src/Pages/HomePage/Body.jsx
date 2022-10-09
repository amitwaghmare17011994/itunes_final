import React, { useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import SongCard from "@components/SongCard";
import FullScreenDialog from "@components/FullScreenDialog";
import NotFound from "../../Components/NotFound";
import { useEffect } from "react";
import { useStyles } from "./styles";

const Body = (props) => {
  const { songs = null } = props;
  const [selectedSongToOpen, setSelectedSongToOpen] = useState(null);
  const [selectedSongToPlay, setSelectedSongToPlay] = useState(null);
  const [playingSongInstance, setplayingSongInstance] = useState(null);
  const [songPosition, setSongPosition] = useState(0);
  const [minMax, setMinMax] = useState({ min: 0, max: 100 });

  const [realTime, setRealTime] = useState(false);
  const countRef = useRef(songPosition);
  const classes = useStyles();
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
    if (playingSongInstance) {
      playingSongInstance.pause();
      setplayingSongInstance(null);
    }

    if (selectedSongToPlay) {
      setSelectedSongToPlay(null);
    }
    // setSelectedSongToOpen(song);
    setTimeout(() => {
      setSongPosition(0);
      setSelectedSongToOpen(song);
      onSongPlayHandler(song, !!song, true);
    }, 300);
  };

  const onSongPlayHandler = (songItem, isPlay, makeReturn = false) => {
    if (isPlay) {
      const audio = new Audio(songItem.previewUrl);
      if (makeReturn) {
        audio.play();
        setTimeout(() => {
          setMinMax({ min: 0, max: audio.duration });
          setplayingSongInstance(audio);
          setSelectedSongToPlay(songItem);
        }, 1000);
        return;
      }
      if (!playingSongInstance) {
        audio.play();
      } else {
        playingSongInstance.play();
        setSongPosition(playingSongInstance.currentTime);
        return;
      }

      setTimeout(() => {
        setMinMax({ min: 0, max: audio.duration });
        setplayingSongInstance(audio);
        setSelectedSongToPlay(songItem);
      }, 1000);
    } else {
      pauseSong();
    }
  };

  const onSingleCardPlay = (songItem, isPlay) => {
    if (isPlay) {
      if (playingSongInstance) {
        playingSongInstance.pause();
      }
      const audio = new Audio(songItem.previewUrl);
      audio.play();
      setplayingSongInstance(audio);
      setSelectedSongToPlay(songItem);
    } else {
      setSelectedSongToPlay(null);
      pauseSong();
    }
  };

  const pauseSong = () => {
    if (playingSongInstance) {
      playingSongInstance.pause();
    }
  };

  const onSongPositionChangeHandler = (value) => {
    if (!isNaN(value)) {
      playingSongInstance.currentTime = value;
      setSongPosition(value);
    }
  };
  return (
    <div className={classes.container}>
      {!!songs?.length ? (
        <Grid container direction="row" justify="center" alignItems="stretch">
          {songs?.map((songItem) => (
            <Grid
              key={songItem.trackId}
              onClick={() => {
                onSongSelected(songItem);
              }}
              item
              xs={10}
              md={12}
              lg={3}
              style={{ margin: 20 }}
            >
              <SongCard
                isPlaying={
                  selectedSongToPlay?.previewUrl === songItem?.previewUrl
                }
                onSongPlay={onSingleCardPlay}
                song={songItem}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <NotFound showLoader={songs === null} />
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
      {/* )} */}
    </div>
  );
};

export default Body;

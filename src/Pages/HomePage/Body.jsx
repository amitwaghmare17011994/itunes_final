import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SongCard from "@components/SongCard";
import FullScreenDialog from "@components/FullScreenDialog";
import NotFound from "../../Components/NotFound";

const Body = (props) => {
  const { songs = null } = props;
  const [selectedSongToOpen, setSelectedSongToOpen] = useState(null);
  const [selectedSongToPlay, setSelectedSongToPlay] = useState(null);
  const [playingSongInstance, setplayingSongInstance] = useState(null);
  const [songPosition, setSongPosition] = useState(0);
  const [minMax, setMinMax] = useState({ min: 0, max: 100 });

  const onSongSelected = (song) => {
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

      setplayingSongInstance(audio);
      setSelectedSongToPlay(songItem);
    } else {
      pauseSong();
    }
  };

  const pauseSong = () => {
    if (playingSongInstance) {
      playingSongInstance.pause();
      playingSongInstance.remove();
      //   setplayingSongInstance(null);
      //   setSelectedSongToPlay(null);
    }
  };

  const onSongPositionChangeHandler = (value) => {
    playingSongInstance.currentTime =
      playingSongInstance.duration * (value / 100);
    console.log(playingSongInstance.currentTime);
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
        <NotFound />
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

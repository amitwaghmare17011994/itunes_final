import { Slider, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { PauseCircleFilled } from "@material-ui/icons";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import { useStyles } from "./styles";

function Controls(props) {
  const {
    onSongPositionChange,
    onClickPlay,
    minMax,
    songPosition,
    isPlay,
    song,
    hideInfo = false,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.controlPanel}>
      {!hideInfo && (
        <div className={classes.songDesc}>
          <h2>{song?.collectionName}</h2>
          <span>{song?.shortDescription?.trim()}</span>
          <div style={{ display: "flex", marginTop: 10 }}>
            <img className={classes.imgcls} src={song.artworkUrl60} />
            <img className={classes.imgcls} src={song.artworkUrl100} />
            <img className={classes.imgcls} src={song.artworkUrl30} />
          </div>
        </div>
      )}
      <div className={classes.controls}>
        <div style={{ display: "flex" }}>
          <IconButton aria-label="play/pause" onClick={onClickPlay}>
            {isPlay ? (
              <PauseCircleFilled className={classes.playIcon} />
            ) : (
              <PlayArrowIcon className={classes.playIcon} />
            )}
          </IconButton>

          <div className={classes.songDetails}>
            <Typography variant="h6">{song?.trackCensoredName}</Typography>
            <Typography variant="h6">{song?.artistName}</Typography>
          </div>
        </div>
        <Slider
          size="small"
          aria-label="Small"
          color="white"
          className={classes.slider}
          min={minMax.min}
          max={minMax.max}
          value={songPosition}
          onChange={(e, newValue) => {
            onSongPositionChange(newValue);
          }}
        />
      </div>
    </div>
  );
}

export default Controls;

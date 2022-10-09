import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useTheme } from "@material-ui/core";
import { useStyles } from "./styles";
import { PauseCircleFilled } from "@material-ui/icons";

export default function SongCard(props) {
  const { song, onSongPlay, isPlaying } = props;
  const [isPlay, setIsPlay] = useState(false);
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    setIsPlay(isPlaying);
  }, [isPlaying]);

  const onClickPlay = (e) => {
    e.stopPropagation();
    onSongPlay(song, !isPlay);
    setIsPlay(!isPlay);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardMedia
          className={classes.cover}
          image={song.artworkUrl100}
           title="Live from space album cover"
        />
        {/* <img
                src={song.artworkUrl100}
                style={{width:'100%',height:'90%'}}
                /> */}
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h6">
            {song.collectionName}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {song.artistName}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon className={classes.playIcon} />
            ) : (
              <SkipPreviousIcon className={classes.playIcon} />
            )}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={onClickPlay}>
            {isPlay ? (
              <PauseCircleFilled className={classes.playIcon} />
            ) : (
              <PlayArrowIcon className={classes.playIcon} />
            )}
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon className={classes.playIcon} />
            ) : (
              <SkipNextIcon className={classes.playIcon} />
            )}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

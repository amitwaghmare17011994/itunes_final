import { Hidden } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import { useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import React, { useEffect, useState } from "react";
import Controls from "./Controls";
import { useStyles } from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down"   ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const {
    open,
    song = {},
    onClose,
    onSongPlay,
    songPosition,
    onSongPositionChange,
    minMax,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isPlay, setIsPlay] = useState(true);
  const classes = useStyles();
  const theme = useTheme();

  // useEffect(() => {
  //   setIsOpen(open);
  // }, [open]);
  
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (songPosition && songPosition === minMax.max) {
      setIsPlay(false);
      onSongPositionChange(0);
    }
  }, [songPosition, minMax]);
  const onClickPlay = () => {
    onSongPlay(song, !isPlay);
    setIsPlay(!isPlay);
  };

  return (
    <>
      <Dialog
        className={classes.modalRoot}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar color={"secondary"} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              {song?.collectionName}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.detailCont}>
          <div className={classes.flex}>
            <img className={classes.songImg} src={song?.artworkUrl100} />
            <Hidden lgUp>
              <Controls
                onSongPositionChange={onSongPositionChange}
                onClickPlay={onClickPlay}
                isPlay={isPlay}
                song={song}
                songPosition={songPosition}
                minMax={minMax}
                hideInfo={true}
              />
            </Hidden>
          </div>

          <Hidden xsDown mdDown>
            <Controls
              onSongPositionChange={onSongPositionChange}
              onClickPlay={onClickPlay}
              isPlay={isPlay}
              song={song}
              songPosition={songPosition}
              minMax={minMax}
            />
          </Hidden>
        </div>
      </Dialog>
    </>
  );
}

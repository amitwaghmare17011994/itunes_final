import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { PauseCircleFilled } from '@material-ui/icons';
import { useStyles } from './styles'
import { Paper } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const { open, song = {}, onClose, onSongPlay } = props;
    const [isPlay, setIsPlay] = useState(true)
    const classes = useStyles();
    const theme = useTheme()
    const handleClose = () => {
        onClose()
    }

    const onClickPlay = () => {
        onSongPlay(song, !isPlay)
        setIsPlay(!isPlay)
    }

    return (
        <div>
            <Dialog className={classes.modalRoot} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar color={'secondary'} className={classes.appBar}>
                    <Toolbar>

                        <Typography variant="h6" className={classes.title}>
                            {song?.collectionName}
                        </Typography>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.detailCont}>
                    <img className={classes.songImg} src={song.artworkUrl100} />
                    <div className={classes.controlPanel}>
                        <div className={classes.songDesc} >
                            <h2>
                                {song?.collectionName}
                            </h2>
                            <span>
                                {song?.shortDescription?.trim()}
                            </span>
                            <div style={{ display: 'flex', marginTop: 10 }}>
                                <img className={classes.imgcls} src={song.artworkUrl60} />
                                <img className={classes.imgcls} src={song.artworkUrl100} />
                                <img className={classes.imgcls} src={song.artworkUrl30} />
                            </div>
                        </div>
                        <div className={classes.controls}>
                            <IconButton aria-label="play/pause" onClick={onClickPlay}>
                                {
                                    isPlay ? <PauseCircleFilled className={classes.playIcon} />
                                        :
                                        <PlayArrowIcon className={classes.playIcon} />
                                }
                            </IconButton>
                            <div className={classes.songDetails}>
                                <span>
                                    {song?.trackCensoredName}
                                </span>
                                <span>
                                    {song?.artistName}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </Dialog>
        </div>
    );
}

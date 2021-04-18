import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import SongCard from '@components/SongCard'
import FullScreenDialog from '../../Components/FullScreenDialog'

const Body = (props) => {
    const { songs = [] } = props
    const [selectedSongToOpen, setSelectedSongToOpen] = useState(null)
    const [selectedSongToPlay, setSelectedSongToPlay] = useState(null)
    const [playingSongInstance, setplayingSongInstance] = useState(null)

    const onSongSelected = (song) => {
        setSelectedSongToOpen(song)
        onSongPlayHandler(song, !!song)
    }

    const onSongPlayHandler = (songItem, isPlay) => {
        if (playingSongInstance) {
            playingSongInstance.pause()
            playingSongInstance.remove()
        }
        if (isPlay) {
            const audio = new Audio(songItem.previewUrl);
            audio.play()
            setplayingSongInstance(audio)
            setSelectedSongToPlay(songItem)
        }
        else {
            pauseSong()
        }
    }

    const pauseSong = () => {
        if (playingSongInstance) {
            playingSongInstance.pause()
            playingSongInstance.remove()
            setplayingSongInstance(null)
            setSelectedSongToPlay(null)
        }
    }


    return (
        <div style={{ marginTop: 80 }}>
            <Grid
                container
                direction="row"
                justify="center"
            >
                {songs?.length ?
                    songs.map((songItem) => !!songItem.collectionName &&
                        <Grid onClick={() => {
                            onSongSelected(songItem)
                        }
                        } item xs={12} md={2} style={{ margin: 20 }} key={songItem?.previewUrl} >
                            <SongCard isPlaying={selectedSongToPlay?.previewUrl === songItem?.previewUrl} onSongPlay={onSongPlayHandler} song={songItem} />
                        </Grid>
                    )
                    : 'Not Found'
                }
            </Grid>
            {selectedSongToOpen && <FullScreenDialog
                open={selectedSongToOpen}
                song={selectedSongToOpen}
                onClose={() => onSongSelected(null)}
                onSongPlay={onSongPlayHandler}
            />}
        </div>
    )
}

export default Body

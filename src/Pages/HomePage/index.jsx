
import React, { useEffect, useState } from 'react';
import { getSongs } from '@api/songsApi'
import AppLayoutHeader from '@components/AppLayoutHeader'
import { songsState, songsFilterSelector } from '@atoms/songAtom'
import { useRecoilState, useRecoilValue } from 'recoil';
import Body from './Body';
import { CircularProgress } from '@material-ui/core';
const dummyFavSong = 'kk'
const HomePage = () => {
  const [songs, setSongs] = useRecoilState(songsState);
  const [currentOffset, setCurrentOffset] = useState(0)
  const [showBottomLoader, setShowBottomLoader] = useState(false)
  const songFilter = useRecoilValue(songsFilterSelector)


  useEffect(() => {
    (async () => {
      const songsRespnse = await getSongs(songFilter || dummyFavSong)
      document.getElementById('main').scrollTo(0,0);
      setSongs(songsRespnse)
    }
    )()
  }, [songFilter])

  const onScrollHandler = async (e) => {
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop
    const clientHeight = e.target.clientHeight
    const condition1 = parseInt((parseInt(scrollHeight) - parseInt(scrollTop))) === parseInt(clientHeight)
    const condition2 = parseInt((parseInt(scrollHeight) - parseInt(scrollTop)) + 1) === parseInt(clientHeight)
    const condition3 = parseInt((parseInt(scrollHeight) - parseInt(scrollTop)) - 1) === parseInt(clientHeight)
    const isBottom = condition1 || condition2 || condition3
    if (isBottom) {
      setShowBottomLoader(true)
      const songsRespnse = await getSongs(songFilter || dummyFavSong, currentOffset + 1)
      setCurrentOffset(currentOffset + 1)
      setSongs([...songs, ...songsRespnse])
      setShowBottomLoader(false)
    }
  }

  return (
    <div>
      <AppLayoutHeader />
      <div id='main' onScroll={onScrollHandler} style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <Body songs={songs} />
        {showBottomLoader &&
          <center style={{ marginBottom: 20, height: 50 }}>
            <CircularProgress color="secondary" />
          </center>
        }
      </div>

    </div>
  );
}

export default HomePage
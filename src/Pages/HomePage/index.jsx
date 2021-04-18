
import React, { useEffect, useState } from 'react';
import { getSongs } from '@api/songsApi'
import AppLayoutHeader from '@components/AppLayoutHeader'
import { songsState, songsFilterSelector } from '@atoms/songAtom'
import { useRecoilState, useRecoilValue } from 'recoil';
import Body from './Body';
const dummyFavSong = 'do pal'
const HomePage = () => {
  const [songs, setSongs] = useRecoilState(songsState);
  const songFilter = useRecoilValue(songsFilterSelector)

  const [currentOffset, setCurrentOffset] = useState(0)

  useEffect(() => {
    (async () => {
      const songsRespnse = await getSongs(songFilter || dummyFavSong)
      setSongs(songsRespnse)
    }
    )()
  }, [])

  const onScrollHandler = async (e) => {
    console.warn('ska');
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop
    const clientHeight = e.target.clientHeight
    const condition1 = parseInt((parseInt(scrollHeight) - parseInt(scrollTop))) === parseInt(clientHeight)
    const condition2 = parseInt((parseInt(scrollHeight) - parseInt(scrollTop)) + 1) === parseInt(clientHeight)
    const condition3 = parseInt((parseInt(scrollHeight) - parseInt(scrollTop)) - 1) === parseInt(clientHeight)

    const isBottom = condition1 || condition2 || condition3
    console.warn({ isBottom });
    if (isBottom) {
      const songsRespnse = await getSongs(songFilter || dummyFavSong, currentOffset + 1)
      setCurrentOffset(currentOffset + 1)
      setSongs([...songs, ...songsRespnse])
    }
  }

  return (
    <div>
      <AppLayoutHeader />
      <div onScroll={onScrollHandler} style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <Body songs={songs} />
      </div>
    </div>
  );
}

export default HomePage
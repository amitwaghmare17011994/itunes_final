
import React, { useEffect } from 'react';
import { getSongs } from '@api/songsApi'
import AppLayoutHeader from '@components/AppLayoutHeader'
import { songsState } from '@atoms/songAtom'
import { useRecoilState } from 'recoil';
import Body from './Body';
const dummyFavSong = 'do pal'
const HomePage = () => {
  const [songs, setSongs] = useRecoilState(songsState);

  useEffect(() => {
    (async () => {
      const songsRespnse = await getSongs(dummyFavSong)
      setSongs(songsRespnse)
    }
    )()
  }, [])


  return (
    <div   >
      <AppLayoutHeader />
      <Body songs={songs} />
    </div>
  );
}

export default HomePage
import styled from "styled-components"
import ReactJkMusicPlayer, { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useApp } from "../../context"

const Main = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  min-height: 80px;
  background: #797979;
`

export default function Player () {

  const { mediaList }:any = useApp()

  return <div>
    <ReactJkMusicPlayer drag quietUpdate audioLists={mediaList} />
  </div>
}
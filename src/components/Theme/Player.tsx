import styled from "styled-components"
import { useRef } from "react"
import ReactJkMusicPlayer, { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useApp } from "../../context"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const RhapPlayer = styled(AudioPlayer)`
  &.rhap_container {
    background: radial-gradient(rgba(0,0,0,0), #000000);
  }
`

export default function Player () {

  const { mediaList }:any = useApp()
  const audioRef:any = useRef(null);

  return <div className="fixed bottom-0 left-0 right-0">
    {/* <ReactJkMusicPlayer drag audioLists={mediaList} preload={true} defaultVolume={50} /> */}
    <RhapPlayer
    autoPlay
    src="https://www.youtube.com/watch?v=1dlTWaiBZDw"
    preload="auto"
    />
  </div>
}
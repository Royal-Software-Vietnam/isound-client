import styled from "styled-components"
import { useRef } from "react"
import ReactJkMusicPlayer, { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { useApp } from "../../context"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { CaretRightOutlined, PauseOutlined, StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons"

const RhapPlayer = styled(AudioPlayer)`
  &.rhap_container {
    background: radial-gradient(rgba(0,0,0,0), #161616);
  }

  .rhap_button-clear {
    display: flex;
    align-items: center;
  }

  .large {
    font-size: 2.2rem;
  }

  .small {
    font-size: 1.4rem;
  }

  &.rhap_container svg {
    color: #ffffff;
    opacity: 0.7;
  }

  &.rhap_container svg:hover,
  &.rhap_container svg:focus {
    color: #E9003F;
  }

  .rhap_time {
    color: #ffffff;
    margin: 0 20px;
    font-size: 0.75rem;
  }

  .rhap_volume-indicator,
  .rhap_progress-indicator {
    background: #E9003F;
  }
`

export default function Player () {

  const { mediaList }:any = useApp()
  const audioRef:any = useRef(null);

  return <div className="fixed bottom-0 left-0 right-0">
    {/* <ReactJkMusicPlayer drag audioLists={mediaList} preload={true} defaultVolume={50} /> */}
    <RhapPlayer
      autoPlay
      src={mediaList}
      preload="auto"
      showSkipControls={true}
      showJumpControls={false}
      layout="horizontal-reverse"
      customIcons={{
        play: <CaretRightOutlined className="large"/>,
        previous: <StepBackwardOutlined  className="small"/>,
        next: <StepForwardOutlined className="small"/>,
        pause: <PauseOutlined className="large"/>
      }}
    />
  </div>
}
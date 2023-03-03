import styled from "styled-components"
import { useRef, useState } from "react"
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
  &.rhap_container svg:focus,
  &.rhap_loop--on .rhap_repeat-button svg,
  &.rhap_play-status--playing .rhap_play-pause-button svg {
    color: #E9003F;
    opacity: 1;
  }

  .rhap_time {
    color: #ffffff;
    margin: 0 20px;
    font-size: 0.75rem;
  }

  .rhap_volume-filled,
  .rhap_progress-filled {
    background: #E9003F;
  }

  .rhap_volume-bar,
  .rhap_progress-bar {
    background: #2B2B2B;
  }

  .rhap_volume-indicator,
  .rhap_progress-indicator {
    background: #E9003F;
    opacity: 1;
  }
`

export default function Player () {

  const { mediaList }:any = useApp()
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0)
  
  const handleEnded = () => {
    console.log('<END>')
    setCurrentTrackIndex(
      (currentTrack:number) => currentTrack < mediaList?.length - 1 ? currentTrack + 1 : 0
    )
  }

  const handleNext = () => {
    console.log('<NEXT>')
    setCurrentTrackIndex(
      (currentTrack:number) => currentTrack < mediaList?.length - 1 ? currentTrack + 1 : 0
    )
  }

  

  return <div className="fixed bottom-0 left-0 right-0">
    {/* <ReactJkMusicPlayer drag audioLists={mediaList} preload={true} defaultVolume={50} /> */}
    {mediaList.length > 0 && <RhapPlayer
      autoPlay
      src={mediaList[currentTrackIndex].src}
      preload="auto"
      onEnded={handleEnded}
      onClickNext={handleNext}
      // onPlay={e => console.log("onPlay")}
      showSkipControls={true}
      showJumpControls={false}
      layout="horizontal-reverse"
      customIcons={{
        play: <CaretRightOutlined className="large"/>,
        previous: <StepBackwardOutlined  className="small"/>,
        next: <StepForwardOutlined className="small"/>,
        pause: <PauseOutlined className="large"/>
      }}
      loop={false}
      muted={false}
      showFilledVolume={true}
      showFilledProgress={true}
    />}
  </div>
}
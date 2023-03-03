import styled from "styled-components"
import { useRef, useState } from "react"
import { useApp } from "../../context"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { CaretRightOutlined, PauseOutlined, StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons"

const RhapPlayer = styled(AudioPlayer)`
  &.rhap_container {
    background: radial-gradient(rgba(0,0,0,0.5), #111111);
  }

  .rhap_button-clear {
    display: flex;
    align-items: center;
  }

  .large {
    font-size: 1.8rem;
  }

  .small {
    font-size: 1.1rem;
  }

  &.rhap_container svg {
    color: #ffffff;
    opacity: 0.7;
  }

  .rhap_progress-section {
    flex: 6 1 auto;
  }

  .rhap_additional-controls {
    justify-content: space-between;
    margin-right: 10px;
  }

  &.rhap_container svg:hover,
  &.rhap_container svg:focus,
  &.rhap_loop--on .rhap_repeat-button svg,
  &.rhap_play-status--playing .rhap_play-pause-button svg {
    color: #E9003F;
    opacity: 1;
    transition: all 0.3s ease-in-out;
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

  .rhap_download-progress {
    background: #444444;
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
      autoPlay={true}
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
      customAdditionalControls = {
        [
          <div className="max-h-12 w-[25rem] flex items-center">
            <div className="w-[9rem] px-3">
              <img className="w-full rounded-lg" src={mediaList[currentTrackIndex].cover} />
            </div>
            <div className="flex flex-col justify-center">
              <p className="py-1">{mediaList[currentTrackIndex].name}</p>
              <span>{mediaList[currentTrackIndex].singer}</span>
            </div>
          </div>,
          RHAP_UI.LOOP
        ]
        
      }
    />}
  </div>
}
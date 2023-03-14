import styled from "styled-components";
import { useRef, useState } from "react";
import { useApp } from "../../context";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  CaretRightOutlined,
  PauseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";

const RhapPlayer = styled(AudioPlayer)`
  &.rhap_container {
    background: radial-gradient(rgba(0, 0, 0, 0.5), #111111);
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
    color: #e9003f;
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
    background: #e9003f;
  }

  .rhap_download-progress {
    background: #444444;
  }

  .rhap_volume-bar,
  .rhap_progress-bar {
    background: #2b2b2b;
  }

  .rhap_volume-indicator,
  .rhap_progress-indicator {
    background: #e9003f;
    opacity: 1;
  }
`;

export default function Player() {
  const { mediaList }: any = useApp();
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  const handledPrevious = () => {
    console.log("<PREVIOUS>");
    setCurrentTrackIndex((currentTrack: number) =>
      currentTrack > 0 ? currentTrack - 1 : mediaList?.length - 1
    );
  };

  const handleNext = () => {
    console.log("<NEXT>");
    setCurrentTrackIndex((currentTrack: number) =>
      currentTrack < mediaList?.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handledError = () => {
    console.log("<ERROR>");
    alert("Bài này không nghe được ở Việt Nam rồi ! Đợi update hoặc xài VPN đi hehe");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0">
      {mediaList.length > 0 && (
        <RhapPlayer
          autoPlay={true}
          src={mediaList[currentTrackIndex].src}
          preload="auto"
          onClickPrevious={handledPrevious}
          onClickNext={handleNext}
          onError={handledError}
          showSkipControls={true}
          showJumpControls={false}
          layout="horizontal-reverse"
          customIcons={{
            play: <CaretRightOutlined className="large" />,
            previous: <StepBackwardOutlined className="small" />,
            next: <StepForwardOutlined className="small" />,
            pause: <PauseOutlined className="large" />,
          }}
          loop={false}
          muted={false}
          showFilledVolume={true}
          showFilledProgress={true}
          customAdditionalControls={[
            <div className="max-h-12 w-[25rem] flex items-center">
              <div className="max-w-[8rem] px-3">
                <img
                  className="w-full h-12 rounded-lg object-cover"
                  src={mediaList[currentTrackIndex].cover}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[0.9rem] py-1">
                  {mediaList[currentTrackIndex].name}
                </p>
                <span className="text-[0.75rem]">
                  {mediaList[currentTrackIndex].singer}
                </span>
              </div>
            </div>,
            RHAP_UI.LOOP,
          ]}
        />
      )}
    </div>
  );
}

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useApp } from "../../context";
import { HeartFilled } from "@ant-design/icons";
import AddToUserPlaylist from "../../components/Utils/AddToUserPlaylist";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";

export default function ListPlayed({ data }: { data: any }) {
  const { mediaList, setMediaList, setLoading }: any = useApp();
  const [pause, setPause] = useState(true);

  const addToList = async (data: any) => {
    // setLoading(true)
    try {
      setPause(!pause);
      let res = await axios.get(
        `https://isound.cyclic.app/audio/stream?mediaId=${data?.id}`
      );
      console.log(res.data);
      setMediaList([
        ...mediaList,
        {
          name: data?.title,
          singer: data?.author?.name,
          cover: data?.bestThumbnail?.url,
          src: res.data,
        },
      ]);
    } catch (error) {
      console.log(error);
    } // finally { setLoading(false) }
  };

  return (
    <div className="lg:w-[50%] w-[100%] lg:mt-0 mt-6 bg-[#141414] text-white">
      <h2 className="text-[1.5rem] leading-6">Top Rate</h2>
      <p className="text-[1rem] leading-4 my-4">
        Only for you for better live music
      </p>
      <div className="lg:h-[100%] h-[20rem] overflow-auto overflow-x-hidden">
        {data &&
          data?.slice(0, 5).map((box: any, index: number) => (
            <div
              className="grid grid-cols-12 gap-2 items-center"
              key={box?.id}
              onClick={() => addToList(box)}
              style={{ cursor: "pointer" }}
            >
              <div className="col-span-1 flex justify-center">
                {pause ? <CaretRightOutlined /> : <PauseOutlined />}
              </div>
              <div className="col-span-2 p-1">
                <img
                  className="w-full rounded-lg"
                  src={box?.bestThumbnail?.url}
                />
              </div>
              <div className="col-span-6">
                <p className="text-[1rem]">{box?.author?.name}</p>
                <p className="text-[0.75rem] opacity-80">{box?.title}</p>
              </div>
              <div className="col-span-2 flex justify-center">
                <p className="text-[0.75rem]">{box?.duration}</p>
              </div>
              <div className="col-span-1 space-x-2 flex items-center">
                <AddToUserPlaylist />
                <HeartFilled />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

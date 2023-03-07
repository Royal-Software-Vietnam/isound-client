import React, { useEffect } from 'react'
import axios from "axios";
import { useApp } from "../../context";

function SearchAllData({data}:{data:any}) {
  const { mediaList, setMediaList }:any = useApp()

  console.log(data?.videos)

  const addToList = async (data:any) => {
    console.log(data?.videoId)
    try {
            let res = await axios.get(`https://isound.cyclic.app/audio/stream?mediaId=${data?.videoId}`)
            setMediaList([...mediaList, {
                name: data?.title,
                singer: data?.author?.name,
                cover: data?.image,
                src: res.data
            }])
        } catch (error) {
            console.log(error)
        }
  }

  return (
    <div className="h-[70vh] overflow-auto">
      {data?.videos && data?.videos.map((item:any, index:number) => (
        <div className="flex hover:cursor-pointer hover:opacity-80" key={item?.videoId} onClick={()=> addToList(item)}>
          <div className="w-[12rem] mb-8">
            <img className="w-full" src={item?.image} alt="" />
          </div>
          <div className="px-4">
            <p className="text-[1.2rem]">{item?.title}</p>
            <p className="text-[0.8rem]">{item?.author?.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchAllData
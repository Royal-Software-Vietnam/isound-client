import styled from "styled-components";
import axios from "axios";
import { useApp } from "../../context";

export default function ListSuggestion ({data}:{data:any}) {
    const { mediaList, setMediaList }:any = useApp()

    const addToList = async (data:any) => {
        // setLoading(true)
        try {
            let res = await axios.get(`https://isound.cyclic.app/audio/stream?mediaId=${data?.id}`)
            setMediaList([...mediaList, {
                name: data?.title,
                singer: data?.author?.name,
                cover: data?.bestThumbnail?.url,
                musicSrc: res.data
            }])
        } catch (error) {
            console.log(error)
        } // finally { setLoading(false) }
    }

    return <div className="w-[50%] h-[100%] bg-[#141414] text-white">
        <h2 className="text-[1.5rem] leading-6">Made For You</h2>
        <p className="text-[1rem] leading-4 my-4">The more you listen for better recommandation</p>
        <div className="h-[50%] grid lg:grid-cols-3 grid-cols-2 gap-3 mr-[8%]">
        {data && data?.slice(6, 12).map((box:any, index:number) => (
                <div key={box?.id} onClick={()=> addToList(box)} style={{cursor:'pointer'}}>
                    <img className="rounded-lg hover:cursor hover:opacity-80" src={box?.bestThumbnail?.url}/>
                </div>
            ))}
        </div>
    </div>
}
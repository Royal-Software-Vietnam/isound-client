import styled from "styled-components"
import { useLoaderData } from "react-router-dom"
import ListPlayed from "./ListPlayed"
import { useEffect, useState } from "react"
import ListSuggestion from "./ListSuggestion"
import Slider from "./Slider"
import { get_topRateData } from "../../services"

export default function Home () {

    let [data, setData] = useState()

    const getTopRateData = async () => {
        try {
            let { data:result } = await get_topRateData()
            setData(result)
        } catch(error) { console.log(error) }
    }

    useEffect(() => {
        getTopRateData()
    }, [])

    return <div className="h-[70%]">
        <div className="flex h-[50%] px-12 mt-4">
            <Slider />
        </div>
        <div className="flex h-[50%] p-12 mt-4">
            <ListSuggestion data= {data}/>
            <ListPlayed data = {data}/>
        </div>
    </div>
}
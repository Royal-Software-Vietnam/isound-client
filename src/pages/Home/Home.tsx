import styled from "styled-components"
import { useLoaderData } from "react-router-dom"
import ListPlayed from "./ListPlayed"
import { useEffect, useState } from "react"
import ListSuggestion from "./ListSuggestion"
import Slider from "./Slider"
import { get_topRateData } from "../../services"

const HomeLayout = styled.div`
    height: 70%;
`

const Row = styled.div`
    display: flex;
    height: 50%;
    padding: 0 55px;
    margin-top: 16px;
`
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

    return <HomeLayout>
        <Row>
            <Slider />
        </Row>
        <Row>
            <ListSuggestion data= {data}/>
            <ListPlayed data={data}/>
        </Row>
    </HomeLayout>
}
import styled from "styled-components"
import ListPlayed from "./ListPlayed"
import ListSuggestion from "./ListSuggestion"
import Slider from "./Slider"


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
    return <HomeLayout>
        <Row>
            <Slider />
        </Row>
        <Row>
            <ListSuggestion />
            <ListPlayed />
        </Row>
    </HomeLayout>
}
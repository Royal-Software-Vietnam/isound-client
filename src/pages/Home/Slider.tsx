import { Typography } from "antd";
import styled from "styled-components";
import TestSlide from "../../assets/login-bc.jpg"

const Container = styled.div`
    background: #141414;
    color: #ffffff;
    width: 100%;
    height: 100%;
`

const Heading = styled(Typography)`
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: #ffffff;
`

const Text = styled(Typography)`
    font-size: 1rem;
    line-height: 1rem;
    color: #ffffff;
    margin: 16px 0;
`
const ListSlide = styled.div`
    width: 100%;
    height: 72%;
    background: center center / cover no-repeat url(${TestSlide});
`

export default function Slider () {
    return <Container>
        <Heading>Trend Topic</Heading>
        <Text>Music Trend Today</Text>
        <ListSlide>
        </ListSlide> 
    </Container>
}
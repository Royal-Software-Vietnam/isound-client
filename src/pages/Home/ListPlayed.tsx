import { Typography } from "antd";
import styled from "styled-components";

const Container = styled.div`
    background: #141414;
    color: #ffffff;
    width: 60%;
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

const List = styled.div`
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
`
const Box = styled.div`
    width: 100%;
    height: 5rem;
    padding: 8px;

    .box-img {
        background: #e9003f;
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
    }
`

export default function ListPlayed () {
    return <Container>
        <Heading>Recently Played</Heading>
        <Text>Only for you for better live music</Text>
        <List>
            <Box><div className="box-img"></div></Box>
            <Box><div className="box-img"></div></Box>
            <Box><div className="box-img"></div></Box>
            <Box><div className="box-img"></div></Box>
        </List>
    </Container>
}
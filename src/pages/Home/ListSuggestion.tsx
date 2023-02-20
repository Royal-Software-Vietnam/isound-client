import { Typography } from "antd";
import styled from "styled-components";
import box1 from "../../assets/box-1.png";
import box2 from "../../assets/box-2.png";
import box3 from "../../assets/box-3.png";
import box4 from "../../assets/box-4.png";

const Container = styled.div`
    background: #141414;
    color: #ffffff;
    width: 40%;
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
    width: 13rem;
    height: 10rem;
    padding: 8px;

    .box-img {
        background-position: center;
        background-image:
            linear-gradient(
                to right, #e6101033, #e9003f33
            ),
            url(${box1});
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
    }

    .box-img:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

export default function ListSuggestion () {
    return <Container>
        <Heading>Made For You</Heading>
        <Text>The more you listen for better recommandation</Text>
        <List>
            <Box><div className="box-img"></div></Box>
            <Box><div className="box-img"></div></Box>
            <Box><div className="box-img"></div></Box>
            <Box><div className="box-img"></div></Box>
        </List>
    </Container>
}
import { Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons"
import styled from "styled-components";
import box1 from "../../assets/box-1.png";
import HeartIcon from "../../assets/likeheart.svg"


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
`
const Box = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background: #161616;
    filter: drop-shadow(-3px -3px 5px rgba(255,255,255,0.01 ));

    .anticon {
        font-size: 1.5rem;
        color: #cbcbcb;
        margin-right: 1.5rem;
    }

    .box-img {
        background-position: center;
        background-repeat: no-repeat;
        background-image:
            linear-gradient(
                to right, #e6101033, #e9003f33
            ),
            url(${box1});
        width: 10%;
        height: 100%;
        border-radius: 0.4rem;
        margin-right: 1.5rem;
    }

    .song-info {
        color: #cbcbcb;
        width: 65%;
        
        p {
            font-size: 1.1rem;
            font-weight: bold;
            opacity: 0.75;
        }

        span {
            font-size: 0.9rem;
        }
    }

    .time {
        color: #cbcbcb;
        margin-right: 2rem;
        font-size: 0.9rem;
    }

    .heart-icon {
        display: flex;

        img:hover {
            fill: #e9003f;
        }
    }
`

const boxes = [
    {author: "Moroon5", songname: "Memories", time: "3:45"},
    {author: "Jeremy Zucker", songname: "Comethru", time: "3:45"},
    {author: "Lauv", songname: "I'm So Tired", time: "3:45"},
    {author: "Andy Grammer", songname: "Don't Give Up On Me", time: "3:45"},
]

export default function ListPlayed () {
    return <Container>
        <Heading>Recently Played</Heading>
        <Text>Only for you for better live music</Text>
        <List>
            {boxes.map((box, index) => (
                <Box key={index}>
                    <CaretRightOutlined />
                    <div className="box-img"></div>
                    <div className="song-info">
                        <p>{box.author}</p>
                        <span>{box.songname}</span>
                    </div>
                    <div className="time">
                        <p>{box.time}</p>
                    </div>
                    <div className="heart-icon">
                        <img src={HeartIcon} alt="heart-icon" />
                    </div>
                </Box>
            ))}
        </List>
    </Container>
}
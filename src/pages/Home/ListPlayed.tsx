import { Typography } from "antd";
import styled from "styled-components";
import box1 from "../../assets/box-1.png";
import HeartIcon from "../../assets/likeheart.svg"
import PlayedBox from "./PlayedBox";
import axios from "axios";
import { useApp } from "../../context";

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

    .anticon:hover {
        cursor: pointer;
    }

    .box-img {

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


export default function ListPlayed ({data}:{data:any}) {

    const { mediaList, setMediaList }:any = useApp()

    console.log(data)

    const testAddToList = (testSrc:string) => {

        console.log(mediaList)

        // setMediaList((prevState:any) => [...prevState, {
        //     name: 'Despacito',
        //     singer: 'Luis Fonsi',
        //     cover:
        //         'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
        //     musicSrc:
        //         'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        // }])
    }

    return <Container>
        <Heading>Recently Played</Heading>
        <Text>Only for you for better live music</Text>
        <List>
            {data && data?.slice(0, 5).map((box:any, index:number) => (
                <Box key={box?.id}>
                    <PlayedBox />
                    <img className="box-img" src={box?.bestThumbnail?.url}/>
                    <div onClick={()=> setMediaList((prev:any)=> [...prev, {
                                ...{
                                    name: box?.title,
                                    singer: box?.author?.name,
                                    cover: box?.bestThumbnail?.url,
                                    musicSrc: async () => {
                                        let { data } = await axios.get(`http://localhost:8888/audio/stream?mediaId=${box?.id}`)
                                        return data
                                    }
                                  },
                    }])} className="song-info" style={{cursor:'pointer'}}>
                        <p>{box?.author?.name}</p>
                        <span>{box?.title}</span>
                    </div>
                    <div className="time">
                        <p>{box?.duration}</p>
                    </div>
                    <div className="heart-icon">
                        <img src={HeartIcon} alt="heart-icon" />
                    </div>
                </Box>
            ))}
        </List>
    </Container>
}
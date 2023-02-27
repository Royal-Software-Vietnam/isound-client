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

    const { mediaList, setMediaList, setLoading }:any = useApp()

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

    return <Container>
        <Heading>Top Rate
        </Heading>
        <Text>Only for you for better live music</Text>
        <List>
            {data && data?.slice(0, 5).map((box:any, index:number) => (
                <Box key={box?.id}>
                    <PlayedBox />
                    <img className="box-img" src={box?.bestThumbnail?.url}/>
                    <div onClick={()=>addToList(box)} className="song-info" style={{cursor:'pointer'}}>
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
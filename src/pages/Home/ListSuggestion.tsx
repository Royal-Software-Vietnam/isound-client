import { Typography } from "antd";
import styled from "styled-components";
import box1 from "../../assets/box-1.png";
import box2 from "../../assets/box-2.png";
import box3 from "../../assets/box-3.png";
import box4 from "../../assets/box-4.png";
import axios from "axios";
import { useApp } from "../../context";

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
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
    }

    .box-img:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

export default function ListSuggestion ({data}:{data:any}) {
    const { mediaList, setMediaList }:any = useApp()

    console.log(data)

    return <Container>
        <Heading>Made For You</Heading>
        <Text>The more you listen for better recommandation</Text>
        <List>
        {data && data?.slice(6, 10).map((box:any, index:number) => (
                <Box key={box?.id}>
                    <div onClick={()=> setMediaList((prev:any)=> [...prev, {
                                ...{
                                    name: box?.title,
                                    singer: box?.author?.name,
                                    cover: box?.bestThumbnail?.url,
                                    musicSrc: async () => {
                                        let { data } = await axios.get(`https://isound.cyclic.app/audio/stream?mediaId=${box?.id}`)
                                        return data
                                    }
                                  },
                    }])} className="song-info" style={{cursor:'pointer'}}>
                        <img className="box-img" src={box?.bestThumbnail?.url}/>
                    </div>
                </Box>
            ))}
        </List>
    </Container>
}
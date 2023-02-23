import { Typography } from "antd";
import styled from "styled-components";
import box1 from "../../assets/box-1.png";
import HeartIcon from "../../assets/likeheart.svg"
import PlayedBox from "./PlayedBox";
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
    {author: "Moroon5", songname: "Memories", time: "3:45", src:"http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"},
    {author: "Jeremy Zucker", songname: "Comethru", time: "3:45", src:"https://rr3---sn-42u-i5old.googlevideo.com/videoplayback?expire=1677055743&ei=n4L1Y8CvE5G78wS88or4CA&ip=3.85.24.56&id=o-AOWFvxUs2ONCPaKUb61cx4Ks1NmUEx3jCcHaJfKaXWAN&itag=251&source=youtube&requiressl=yes&vprv=1&mime=audio%2Fwebm&ns=jgHDAv_Fwh4FX979lAwBJ4QL&gir=yes&clen=3998207&dur=281.181&lmt=1632883641805800&keepalive=yes&fexp=24007246&c=WEB&txp=5432434&n=Q6uPnfkvXRYlJA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAJCXpaXKr9JXg4Xzu6H3zfqmCNAirMSluAVXh1AdfBznAiEA_g9y4uzwY2FGVBfrflkdSVoaqA2seOzQVaS0GORO3_g%3D&redirect_counter=1&rm=sn-p5qeel7z&req_id=d00342381ab3a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=0F&mip=118.70.233.192&mm=31&mn=sn-42u-i5old&ms=au&mt=1677035122&mv=m&mvi=3&pl=26&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJ5wLKrodW5FU1SIT3iD0HgB6d7K2mz34xX1mKQc72YtAiAvvhio-_3fdLzz3xZlde7ZxUPnC4RqGZJT-hVZ25h71g%3D%3D"},
]



export default function ListPlayed () {

    const { mediaList, setMediaList }:any = useApp()

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
            {boxes.map((box, index) => (
                <Box key={index} onClick={()=>testAddToList(box.src)}>
                    <PlayedBox />
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
import styled from "styled-components";
import TestSlide from "../../assets/login-bc.jpg"

const ListSlide = styled.div`
    width: 100%;
    height: 90%;
    background: center center / cover no-repeat url(${TestSlide});
`

export default function Slider () {
    return <div className="w-[100%] h-[100%] bg-[#141414] text-white">
        <h2 className="text-[1.5rem] leading-6">Trend Topic</h2>
        <p className="text-[1rem] leading-4 my-4">Music Trend Today</p>
        <ListSlide>
        </ListSlide> 
    </div>
}
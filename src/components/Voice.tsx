import styled from "styled-components"
import { AudioFilled } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
let Overlay = styled.div`
    position: fixed;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    background: rgba(1,1,1, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

let Main = styled.div`

`

export default function Voice ({ setVoiceSearch }:any) {
    let nav = useNavigate()
    const handleVoiceSearch = () => {
        setVoiceSearch(false)
        nav("/search")
    }
    return <Overlay>
        <Main>
            <AudioFilled style={{ fontSize: 88, color: 'red' }} onClick={handleVoiceSearch} />
            <p style={{letterSpacing: 1}}>Listening...</p> {/* Detect and change this text with matched voice */}
        </Main>
    </Overlay>
}
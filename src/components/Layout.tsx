import styled from "styled-components"
import Sidebar from "./SideBar"
import NavBar from "./NavBar"
import { useApp } from "../context"
import Voice from "./Voice"

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const RightSide = styled.div`
    width: calc(100% - 16.46%);
`

const Player = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    min-height: 80px;
    background: #797979;
`


interface iLayoutProps {
    children: React.ReactElement
}

export default function Layout({ children }: iLayoutProps) {

    const { voiceSearch, setVoiceSearch } = useApp()

    return <Main>
        {voiceSearch && <Voice setVoiceSearch={setVoiceSearch}/>}
        <Sidebar />
        <RightSide>
            <NavBar />
            {children}
        </RightSide>
        <Player />
    </Main>
}
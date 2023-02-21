import styled from "styled-components"
import Sidebar from "./SideBar"
import NavBar from "./NavBar"
import { useApp } from "../context"
import Voice from "./Voice"
import Player from "./Player"

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const RightSide = styled.div`
    width: calc(100% - 16.46%);
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
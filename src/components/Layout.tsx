import styled from "styled-components"
import { Player, NavBar, SideBar } from "./Theme"
import { useApp } from "../context"
import Voice from "./Voice"

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const RightSide = styled.div`
    width: calc(100% - 16%);
`

interface iLayoutProps {
    children: React.ReactElement
}

export default function Layout({ children }: iLayoutProps) {

    const { voiceSearch, setVoiceSearch } = useApp()

    return <Main>
        {voiceSearch && <Voice setVoiceSearch={setVoiceSearch}/>}
        <SideBar />
        <div className="lg:w-[84%] w-full">
            <NavBar />
            {children}
        </div>
        <Player />
    </Main>
}
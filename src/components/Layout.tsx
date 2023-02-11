import styled from "styled-components"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

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
    height: 10%;
    min-height: 80px;
    background: #797979;
`

interface iLayoutProps {
    children: React.ReactElement
}

export default function Layout({ children }: iLayoutProps) {
    return <Main>
        <Sidebar />
        <RightSide>
            <Navbar />
            {children}
        </RightSide>
        <Player />
    </Main>
}
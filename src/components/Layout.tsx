import styled from "styled-components"
import { Player, NavBar, SideBar } from "./Theme"
import { useApp } from "../context"
import Voice from "./Voice"

interface iLayoutProps {
    children: React.ReactElement
}

export default function Layout({ children }: iLayoutProps) {

    const { voiceSearch, setVoiceSearch } = useApp()

    return <div className="w-full h-full flex">
        {voiceSearch && <Voice setVoiceSearch={setVoiceSearch}/>}
        <SideBar />
        <div className="lg:w-[84%] w-full">
            <NavBar />
            {children}
        </div>
    </div>
}

import styled from "styled-components"
import { NavLink, useLocation } from "react-router-dom"
import { SearchOutlined, AudioOutlined } from "@ant-design/icons"
import UserModal from "./UserModal"
import { Input, message } from "antd"
import { useApp } from "../context"
import { useState, useEffect } from "react"
import useSpeechToText from 'react-hook-speech-to-text';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 10.56%;
    padding: 0 55px;
`

const Logo = styled.div`
    width: 212px;
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo-img {
        width: 3rem;
        height: 3rem;
        background: #ffffff;
        border-radius: 50%;
    }
    .label-fullname {
        font-size: 1.1rem;
        line-height: 1.1rem;
        text-align: left;
        color: #ffffff;
        margin-left: 16px
    }
`

const SearchInput = styled(Input)`
    height: 3.2rem;
    background: #141414;
    border-radius: 1.5rem;
    border: 1.8px solid #ffffff;
    width: 50%;
    margin-right: 5rem;
    display: flex;
    align-items: center;

    &.ant-input-affix-wrapper:hover {
        border-color: #ffffff;
    }

    .ant-input-prefix {
        color: #ffffff;
        font-size: 1.2rem;
        margin: 0 16px 0 8px;
    }

    .ant-input-suffix {
        color: #ffffff;
        font-size: 1.2rem;
        cursor: pointer;
        margin: 0 8px 0 8px;
    }
    
    .ant-input {
        background: #141414;
        color: #ffffff;
        font-size: 1rem !important;
    }

    .ant-input::placeholder {
        color: #ffffff;
        opacity: 0.75;
    }
`

const NavLists = styled.ul`
    display: flex;

    a {
        text-decoration: none;
    }

    li {
        font-size: 1.2rem;
        line-height: 1.2rem;
        color: #e3dede;
        list-style: none;
        text-align: left;
        letter-spacing: 3px;
        margin-left: 46px;
        position: relative;
    }

    li:hover {
        color: #e9003f;
    }

    li.active {
        color: #e9003f;
    }
      
    li::after {
        content: "";
        width: 20px;
        height: 2px;
        position: absolute;
        background: #141414;
        bottom: -4px;
        left: 0;
    }

    li.active::after {
        background: #e9003f;
    }
`

const links = [
    {name: "Home", path: "/"},
    {name: "Browse", path: "/browse"},
    {name: "Radio", path: "/radio"},
]



export default function NavBar() {
    const location = useLocation()
    const [messageApi, contextHolder] = message.useMessage()
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    })

    const { user } = useApp()

    if (error) { console.warn(`Web Speech API is not available in this browser`) }
    type MessageType = 'success' | 'info' | 'warning' | 'error';
    const openMessage = (type: MessageType, content: string) => {
        messageApi.open({
          type: type,
          content: content,
        });
      };
    
    useEffect(() => {
        /* @ts-ignore */
        console.log(results[results.length - 1]?.transcript)
        /* @ts-ignore */
        results?.length > 0 && openMessage('info', results[results.length - 1]?.transcript)
    }, [results])
    

    return <Container>
        {contextHolder}
        <SearchInput placeholder="Type song, arstist and playlist"
        suffix={<AudioOutlined onClick={isRecording ? stopSpeechToText : startSpeechToText} style={{color:isRecording?"red":"white"}}/>} 
        prefix={<SearchOutlined />} />
        <NavLists>
            {links.map((link,index) => (
                <NavLink
                    key={index}
                    to={link.path}
                    >
                    <li className={location.pathname === link.path ? 'active' : ""}>{link.name}</li>
                </NavLink>
            ))}
        </NavLists>
        <Logo>
            <div className="logo-img"></div>
            { user?.user_name && <p className="label-fullname">{user.user_name}</p> }
        </Logo>

        <UserModal/>

        
    </Container>
}
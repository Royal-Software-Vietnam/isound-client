import styled from "styled-components"
import { BrowserRouter, NavLink, useLocation, useNavigate, useRoutes, useSearchParams, useSubmit } from "react-router-dom"
import { useApp } from "../../context"
import { SearchOutlined } from "@ant-design/icons"
import UserModal from "../UserModal"
import { Button, Input } from "antd"
import { useState } from "react"

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
        transition: all 0.3s ease-in-out;
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
        bottom: -8px;
        left: 0;
    }

    li.active::after {
        background: #e9003f;
    }
`

const LogOut = styled(Button)`
  height: 2.2rem;

  &.ant-btn-primary {
    border: 2px solid #dadada;
    color: #dadada;
    background-color: rgba(0, 0, 0, 0);
    font-weight: 500;
  }

  &.ant-btn-primary:hover {
    color: #141414;
    background-color: #dadada;
  }
`

const links = [
    { name: "Home", path: "/" },
    { name: "Browse", path: "/user" },
    { name: "Radio", path: "/radio" },
]

export default function NavBar() {
    //Get location pathname
    const location = useLocation()

    //Call user's data from app
    const { user } = useApp()

    //Handle Log Out
    const handleLogout = () => {
        console.log("<<LOG OUT>>")
    }

    //Handle Search
    const navigate = useNavigate()
    const handleSearch = (e: React.SyntheticEvent) => {
        console.log("<<Test>>")
        e.preventDefault()

        const target = e.target as typeof e.target & {
            search: { value: string };
        };
        const key = target.search.value

        console.log(key)
        navigate(`/search?keyword=${key}`)
    }

    return <div className="container hidden lg:flex items-center px-12 h-[11%]">
        <form className="w-1/2 lg:mr-20 mr-8" onSubmit={handleSearch}>
            <SearchInput name="search" placeholder="Type song, arstist and playlist" prefix={<SearchOutlined />} />
        </form>
        <NavLists>
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    to={link.path}
                >
                    <li className={location.pathname === link.path ? 'active' : ""}>{link.name}</li>
                </NavLink>
            ))}
        </NavLists>

        { user
         ? <div className="flex items-center">
            <Logo className="mr-8">
                <div className="logo-img"></div>
                <p className="label-fullname">{ user.user_name }</p>
            </Logo>
            <LogOut type="primary" onClick={handleLogout}>Log out</LogOut>
         </div>
         
         : <div className="absolute right-20">
            <UserModal />
        </div> }
        
    </div>
}

function useFetch() {
    throw new Error("Function not implemented.")
}

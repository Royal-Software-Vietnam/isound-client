import styled from "styled-components"
import { NavLink, useLocation } from "react-router-dom"
import { SearchOutlined } from "@ant-design/icons"
import UserModal from "./UserModal"

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 10.56%;
    padding: 0 55px;
`

const SearchBar = styled.div`
    position: relative;
    padding-left: 12px;
    margin-right: 138px;
    display: flex;
    align-items: center;
    width: 37.94%;
    height: 61px;
    border-color: #ffffff;
    border-width: 2px;
    border-style: solid;
    border-radius: 38px;
    & .search-icon {
        position: absolute;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        font-size: 1.5em;
        line-height: 1.5em;
        display: flex;
        align-items: center;
        margin-left: 0.2rem;
    }
`

const Logo = styled.div`
    width: 212px;
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo-img {
        width: 50px;
        height: 50px;
        background: #ffffff;
        border-radius: 50%;
    }
    .label-fullname {
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #ffffff;
        margin-left: 16px
    }
`

const NavLists = styled.ul`
  display: flex;

  a {
    text-decoration: none;

  }

  li {
    font-size: 20px;
    line-height: 20px;
    color: #e3dede;
    list-style: none;
    text-align: left;
    letter-spacing: 3px;
    margin-left: 46px;

    
    &.active {
    color: #e9003f;
  }
  }

  li:hover {
    color: #e9003f;
  }

  
`

const links = [
    {name: "Home", path: "/"},
    {name: "Browse", path: "/browse"},
    {name: "Radio", path: "/radio"},
]



export default function Navbar() {
    const location = useLocation()

    return <Container>
        <SearchBar>
            <span className="search-icon">
                <SearchOutlined />
            </span>
        </SearchBar>
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
            <p className="label-fullname">Admin</p>
        </Logo>

        <UserModal/>

        
    </Container>
}
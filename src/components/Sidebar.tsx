import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Container = styled.div`
    width: 16.46%;
    background: #161616;
    height: 100vh;
`

const Logo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 76px;
    .logo-img {
        width: 134px;
        height: 134px;
        background: #ffffff;
        border-radius: 50%;
    }
    .label-fullname {
        font-size: 25px;
        line-height: 25px;
        text-align: left;
        color: #ffffff;
        margin-top: 16px
    }
    .label-account {
        font-size: 20px;
        line-height: 20px;
        text-align: left;
        color: #ffffff;
        margin-top: 8px
    }
`

const NavLists = styled.ul`
  display: flex;
  flex-direction: column;
  width: 233px;
  margin-left: 58px;

  a {
    text-decoration: none;
  }

  li {
    color: #ffffff;
    list-style: none;
    text-align: left;
  }

  li:hover {
    color: #e9003f;
  }

  .primary {
    opacity: 0.75;
    font-size: 25px;
    line-height: 25px;
    margin-top: 89px;
  }

  .secondary {
    opacity: 1;
    font-size: 18px;
    line-height: 18px;
    margin-top: 20px;
  }
`

const links = [
  {name: "Your Library", path: "/library", type: "primary"},
  {name: "Made For You", path: "/made-for-you", type: "secondary"},
  {name: "Liked Songs", path: "/liked-songs", type: "secondary"},
  {name: "Album", path: "/album", type: "secondary"},
  {name: "Artist", path: "/artist", type: "secondary"},
  {name: "Podcast", path: "/podcast", type: "secondary"},
  {name: "Your Playlist", path: "/playlist", type: "primary"},
  {name: "Location Unknown", path: "/location-unknown", type: "secondary"},
  {name: "High five - Sigrid", path: "/high-five", type: "secondary"},
  {name: "Galaxy - Bolbbalgan", path: "/galaxy", type: "secondary"},
]

export default function Sidebar() {
    return <Container>
            <Logo>
                <div className="logo-img"></div>
                <p className="label-fullname">iSound</p>
                <p className="label-account">@admin</p>
            </Logo>
            <NavLists>
                {links.map((link,index) => (
                    <NavLink key={index} to={link.path} className={link.type}>
                        <li>{link.name}</li>
                    </NavLink>
                ))}
            </NavLists> 
    </Container>
}
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import IconNewPlaylist from "./../assets/new-playlist.svg"

const Container = styled.div`
    width: 16.4%;
    background: #161616;
    height: 100vh;
`

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 16%;
    .logo-img {
        width: 6.5rem;
        height: 6.5rem;
        background: #ffffff;
        border-radius: 50%;
    }
    .label-fullname {
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-align: left;
        color: #ffffff;
        margin-top: 0.8rem;
    }
    .label-account {
        font-size: 1.2rem;
        line-height: 1,2rem;
        text-align: left;
        color: #ffffff;
        margin-top: 0.4rem;
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
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-top: 5rem;
  }

  .secondary {
    opacity: 1;
    font-size: 1.1rem;
    line-height: 1.1rem;
    margin-top: 1.2rem;
  }
`

const IconNav = styled.div`
  width: 233px;
  margin-left: 58px;
  position: absolute;
  bottom: 12%;
  display: flex;
  align-items: center;

  a {
    color: #ffffff;
    opacity: 0.75;
    text-decoration: none;
    font-size: 1.1rem;
    line-height: 1.1rem;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .icon-img {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
    border: 2px solid #e9003f;
    border-radius: 50%;
    margin-right: 20px;
  }

  img {
    width: 60%;
  }

  & :hover {
    color: #e9003f;
    opacity: 1;
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
            <IconNav>
                <NavLink to="/new-playlist">
                  <div className="icon-img"><img src={IconNewPlaylist} alt="icon-new-playlist" /></div>
                  New Playlist
                </NavLink>
            </IconNav>
    </Container>
}
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import IconNewPlaylist from "../../assets/new-playlist.svg"
import { createUserPlaylist } from "../../services"

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
  width: 100%;
  padding: 0 20%;

  a {
    width: 100%;
    text-decoration: none;
  }

  li {
    color: #ffffff;
    list-style: none;
    text-align: left;
  }

  li:hover {
    color: #e9003f;
    transition: all 0.3s ease-in-out;
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

export default function SideBar() {

    const testCreatePlaylist = async () => {
      let { data }:any = createUserPlaylist({ playlist_name: 'test_001' })
      console.log(data)
    }

    return <div className="container hidden lg:block w-[16%] bg-[#161616] relative">
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

            <div onClick={(e:any)=>testCreatePlaylist()} className="absolute bottom-20 pl-[20%] pt-4 w-full flex items-center border-t-[2px] border-[#111111] opacity-80 hover:text-[#E9003F] hover:ease-in-out duration-300 hover:cursor-pointer">
                <div className="w-[2.5rem] h-[2.5rem] flex items-center mr-3 p-2 rounded-full border-2 border-[#E9003F]"><img className="w-full" src={IconNewPlaylist} alt="icon-new-playlist" /></div>
                <p className="text-[1.2rem] leading-5">
                  New Playlist
                </p>
            </div>
    </div>
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import test from "../assets/troll.svg";

const Bar = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: rgba(22, 22, 22, 1);
  flex: 1;
  flex-direction: column;
  width: 15%;
  height: 100%;
`;

const Container = styled.div`
    width: 100%;
`;

const Img = styled.img`
    width: 100%;
`;

const NavContainer = styled.ul`
    
`;

const Nav = styled.li`
    list-style-type: none;
    width: 100%;
    margin-bottom: 16px;
`;


const MainNav = styled(Nav)`
    color: rgba(128, 128, 128, 1);
    margin-bottom: 8px;
    margin-top: 48px
`;

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <Bar>
        <Container>
            <Img src={test}></Img>
        </Container>
        <Container>
            <NavContainer>
                <MainNav>Your Library</MainNav>
                <Nav>Made For You</Nav>
                <Nav>Recently Played</Nav>
                <Nav>Liked Songs</Nav>
                <Nav>Album</Nav>
                <Nav>Arstist</Nav>
                <Nav>Podcast</Nav>
                <MainNav>Your Playlist</MainNav>
                <Nav>Location Unknown</Nav>
                <Nav>High five - Sigrid</Nav>
                <Nav>Galaxy - Bolbbalgan</Nav>
            </NavContainer>
        </Container>
    </Bar>
  );
};

export default Sidebar;
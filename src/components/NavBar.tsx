import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import test from "../assets/troll.svg";

const Bar = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 1);
  flex: 1;
  width: 85%;
  height: 15%;
`;

const Container = styled.div`
    width: 100%;
`;

const Input = styled.input`
    width: 60%;
`;

const NavContainer = styled.ul`
    display: flex;
`;

const Nav = styled.li`
    list-style-type: none;
    width: 100%;
`;

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <Bar>
        <Container>
            <Input></Input>
        </Container>
        <Container>
            <NavContainer>
                <Nav>Your Library</Nav>
                <Nav>Your Playlist</Nav>
                <Nav>Location Unknown</Nav>
            </NavContainer>
        </Container>
        <Container>

        </Container>
    </Bar>
  );
};

export default Sidebar;
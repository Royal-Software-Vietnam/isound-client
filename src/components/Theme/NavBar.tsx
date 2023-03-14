import styled from "styled-components";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../../context";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import UserModal from "../UserModal";
import { Button, Dropdown, Input, MenuProps, Space } from "antd";
import { useEffect, useState } from "react";

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
`;

const NavItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.2rem;
  color: #e3dede;
  list-style: none;
  text-align: left;
  letter-spacing: 3px;
  position: relative;

  :hover {
    color: #e9003f;
    transition: all 0.3s ease-in-out;
  }

  &.active {
    color: #e9003f;
  }

  &::after {
    content: "";
    width: 24px;
    height: 2px;
    position: absolute;
    background: #141414;
    bottom: 28px;
    left: 0;
    opacity: 0;
  }

  &:hover::after {
    background:  #e9003f;
    opacity: 0.3;
    transition: all 0.4s ease-in-out;
  }

  &.active::after {
    background: #e9003f;
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
`;

const LogOut = styled(Button)`
  height: 2.2rem;

  &.ant-btn-primary {
    border: 2px solid #141414;
    color: #141414;
    background-color: rgba(0, 0, 0, 0);
    font-weight: 500;
  }

  &.ant-btn-primary:hover {
    color: #ffffff;
    border-color: #e9003f;
    background-color: #e9003f;
  }
`;

const DropItem = styled(Dropdown)`
  :hover {
    cursor: pointer;
  }

  &.ant-dropdown-menu {
    background-color: #222222;
  }
`;

const links = [
  { name: "Home", path: "/" },
  { name: "Browse", path: "/user" },
  { name: "Radio", path: "/radio" },
];

export default function NavBar() {
  //Get location pathname
  const location = useLocation();

  //Call user's data from app
  const { user, setUser } = useApp();

  //Handle Log Out
  const handleLogout = () => {
    setUser(null);
  };

  //Handle Search
  const navigate = useNavigate();
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    const key = target.search.value;

    console.log(key);
    navigate(`/search?keyword=${key}`);
  };

  //Dropdown Menu
  const items: MenuProps["items"] = [
    {
      label: <NavLink to="/user">Profile</NavLink>,
      key: "0",
    },
    {
      label: <NavLink to="/playlist">Playlists</NavLink>,
      key: "1",
    },
    {
      label: (
        <LogOut
          className="hidden lg:block"
          type="primary"
          onClick={handleLogout}
        >
          Log out
        </LogOut>
      ),
      key: "2",
    },
  ];

  return (
    <div className="container flex items-center px-12 lg:h-[11%] h-[8%]">
      <form
        className="lg:w-1/2 w-[20rem] lg:mr-20 mr-8"
        onSubmit={handleSearch}
      >
        <SearchInput
          name="search"
          placeholder="Type song, arstist and playlist"
          prefix={<SearchOutlined />}
        />
      </form>
      <div className="w-1/2 sm:flex hidden items-center justify-center h-[90%]">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="list-none mr-10 lg:text-[1.2rem] text-[1rem] h-full"
          >
            <NavItem className={location.pathname === link.path ? "active" : ""}>
              {link.name}
            </NavItem>
          </NavLink>
        ))}
      </div>

      {user ? (
        <div className="absolute right-2 lg:right-10 flex items-center">
          <DropItem menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className="lg:w-[4rem] w-[2rem] flex items-center justify-center">
                  <div className="lg:w-[3rem] lg:h-[3rem] w-[2rem] h-[2rem] bg-[#FFFFFF] rounded-full"></div>
                </div>
                <DownOutlined className="sm:block hidden" />
              </Space>
            </a>
          </DropItem>
        </div>
      ) : (
        <div className="absolute right-20">
          <UserModal />
        </div>
      )}
    </div>
  );
}

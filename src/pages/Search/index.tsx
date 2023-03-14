import { get_search } from "../../services";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useApp } from "../../context";
import { Tabs, TabsProps } from "antd";
import styled from "styled-components";
import SearchAllData from "./SearchAllData";
import SearchSongs from "./SearchSongs";
import SearchAlbum from "./SearchAlbum";
import SearchArtist from "./SearchArtist";

const StyledTab = styled(Tabs)`
  .ant-tabs-tab-btn {
    color: #ffffff;
    min-width: 3rem;
    font-size: 1rem;
    text-align: center;
    opacity: 0.8;
  }

  .ant-tabs-tab-btn:hover,
  .ant-tabs-tab-btn:focus:not(:focus-visible),
  .ant-tabs-tab-btn:active {
    color: #e9003f;
  }

  #rc-tabs-0-tab-0 {
    opacity: 1;
    color: #ffffff;
    font-size: 1.5rem;
    text-align: center;
    padding-right: 3rem;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }

  .ant-tabs-tab.ant-tabs-tab-disabled {
    cursor: default;
  }

  .ant-tabs-ink-bar {
    background: #e9003f;
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #e9003f !important;
  }

  .ant-tabs-nav::before {
    background: rgba(255, 255, 255, 0.2);
  }

  .ant-tabs-tabpane {
    color: #ffffff;
  }
`;



export default function Search() {
  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get("keyword");
  const location = useLocation();
  const { setLoading } = useApp();
  const [data, setData] = useState([]);
  const items = [
  {
    key: '0',
    label: `Searching Result`,
    children: (<div>Title</div>),
    disabled: true,
  },
  {
    key: '1',
    label: `All`,
    children: (<SearchAllData data={data} />),
  },
  {
    key: '2',
    label: `Songs`,
    children: (<SearchSongs data={data} />),
  },
  {
    key: '3',
    label: `Playlist/Album`,
    children: (<SearchAlbum data={data} />),
  },
  {
    key: '4',
    label: `Artist`,
    children: (<SearchArtist data={data} />),
  },
];

  const getDataByKeyword = async () => {
    setLoading(true);
    try {
      let { data: searchData } = await get_search(keyword as string);
      // console.log(searchData)
      setData(searchData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataByKeyword();
  }, [location.search]);

  return (
    <div className="container px-12">
      <StyledTab defaultActiveKey="1" items={items}/>
    </div>
  );
}

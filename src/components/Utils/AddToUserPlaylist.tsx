import React, { useState } from "react"
import { Popover } from "antd"
import { HeartFilled, PlusOutlined } from "@ant-design/icons";
import { getAllUserPlaylist } from "../../services";

export default function AddToUserPlaylist() {

    const [open, setOpen] = useState(false);
    const [playlists, setPlaylists] = useState<any>([])

    const getPlaylists = async () => {
        let { data }:any = await getAllUserPlaylist()
        setPlaylists(data)
    }

    const PopoverContent = () => <div>
        <ul>
            { playlists && playlists.map((item:any, index:number) => <li key={item.playlist_id}>
                { item.playlist_name }
            </li>)}
        </ul>
    </div>

    const hide = () => {
      setOpen(false);
    };
  
    const handleOpenChange = (newOpen: boolean) => {
        !open && getPlaylists()
        setOpen(newOpen);
    };

    return <Popover content={<PopoverContent />}
        title="Thêm vào danh sách:"
        trigger="click"
        placement="topRight"
        open={open}
        arrow={false}
        onOpenChange={handleOpenChange}>
        <PlusOutlined />
    </Popover>
}
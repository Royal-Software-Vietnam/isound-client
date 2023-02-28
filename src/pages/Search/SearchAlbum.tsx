import { Tabs } from 'antd'
import React from 'react'

function SearchAlbum({data, tab, key}:{data:any, tab:any, key:any}) {
  return (
    <Tabs.TabPane tab={tab} key={key}>
        <div>3</div>
    </Tabs.TabPane>
  )
}

export default SearchAlbum
import { Tabs } from 'antd'
import React from 'react'

function SearchArtist({data, tab, key}:{data:any, tab:any, key:any}) {
  return (
    <Tabs.TabPane tab={tab} key={key}>
        <div>4</div>
    </Tabs.TabPane>
  )
}

export default SearchArtist
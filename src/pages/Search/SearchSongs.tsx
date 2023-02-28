import { Tabs } from 'antd'
import React from 'react'

function SearchSongs({data, tab, key}:{data:any, tab:any, key:any}) {
  return (
    <Tabs.TabPane tab={tab} key={key}>
        <div>2</div>
    </Tabs.TabPane>
  )
}

export default SearchSongs
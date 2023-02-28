import { Tabs } from 'antd'
import React from 'react'

function SearchAllData({data, tab, key}:{data:any, tab:any, key:any}) {
  return (
    <Tabs.TabPane tab={tab} key={key}>
        <div>1</div>
    </Tabs.TabPane>
  )
}

export default SearchAllData
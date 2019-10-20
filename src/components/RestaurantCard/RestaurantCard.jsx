import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'

const RestaurantCard = props => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      hoverable={true}
    >
      <Meta title="Card title" description="This is the description" />
    </Card>
  )
}

export default RestaurantCard

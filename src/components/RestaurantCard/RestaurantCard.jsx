import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'

const RestaurantCard = ({restaurant}) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt={restaurant.title}
          src={restaurant.image}
        />
      }
      hoverable={true}
    >
      <Meta title={restaurant.title} description={restaurant.openingHours} />
    </Card>
  )
}

export default RestaurantCard

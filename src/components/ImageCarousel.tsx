import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import '../styles/styles.css'

// import required modules
import { Pagination, FreeMode } from 'swiper'
import ItemCard from './ItemCard'
import { IItem } from '../model/item.model'

type Props = {
  items: IItem[]
}

const ImageCarousel: React.FC<Props> = ({ items }) => {
  return (
    <Swiper
      freeMode={true}
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        {items.map((item: IItem) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </SwiperSlide>
    </Swiper>
  )
}

export default ImageCarousel

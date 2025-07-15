import { Swiper, SwiperSlide } from 'swiper/react';
import { cardListData } from '../../testLoading.ts';

// Swiper styles - only import what we need
import 'swiper/css';
import 'swiper/css/pagination';

// swiper custom
import './swiper.scss';

// import only required modules for better performance
import { Pagination } from 'swiper/modules';
import HandlerCard from '../handler-card.tsx';

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        cssMode={true}
        navigation={false}
        pagination={{ type: 'progressbar' }}
        mousewheel={false}
        keyboard={false}
        simulateTouch={true}
        modules={[Pagination]}
        className="mySwiper"
        lazy={true}
        preloadImages={false}
        watchSlidesProgress={true}
      >
        {cardListData.map(item => (
          <SwiperSlide key={item.id}>
            <HandlerCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

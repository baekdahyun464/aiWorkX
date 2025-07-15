import { Swiper, SwiperSlide } from 'swiper/react';
import { cardListData } from '../../testLoading.ts';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// swiper custom
import './swiper.scss';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import HandlerCard from '../handler-card.tsx';

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        cssMode={false}
        navigation={false}
        pagination={{ type: 'progressbar' }}
        mousewheel={true}
        keyboard={true}
        simulateTouch={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
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

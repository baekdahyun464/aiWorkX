import { lazy, Suspense } from 'react';
import { cardListData } from '../../testLoading.ts';

// Lazy load Swiper components
const Swiper = lazy(() => import('swiper/react').then(module => ({ default: module.Swiper })));
const SwiperSlide = lazy(() => import('swiper/react').then(module => ({ default: module.SwiperSlide })));

// Swiper styles - only import what we need
import 'swiper/css';
import 'swiper/css/pagination';

// swiper custom
import './swiper.scss';

// import only required modules
import { Pagination } from 'swiper/modules';
import HandlerCard from '../handler-card.tsx';

// Loading fallback
const SwiperFallback = () => (
  <div className="swiper-fallback">
    <div className="swiper-wrapper">
      {cardListData.map(item => (
        <div key={item.id} className="swiper-slide">
          <HandlerCard data={item} />
        </div>
      ))}
    </div>
  </div>
);

export default function Banner() {
  return (
    <Suspense fallback={<SwiperFallback />}>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        cssMode={false}
        navigation={false}
        pagination={{ type: 'progressbar' }}
        mousewheel={false}
        keyboard={false}
        simulateTouch={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cardListData.map(item => (
          <SwiperSlide key={item.id}>
            <HandlerCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Suspense>
  );
}

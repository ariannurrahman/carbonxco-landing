'use client';

import './style.scss';
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export const HomeCarousel = () => {
  return (
    <div className='bg-[#F6F6F6] px-[30px] py-[18px]'>
      <Swiper
        autoplay={{ delay: 0, pauseOnMouseEnter: false, stopOnLastSlide: false }}
        loop
        speed={3600}
        slidesPerView={3}
        modules={[Autoplay, Pagination]}
        className='home-swiper-carousel bg-white rounded-2xl'
      >
        <SwiperSlide>
          <Image src='/assets/carousel/carousel-aircarbon.svg' width={190} height={100} alt='Air Carbon Exchange' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/carousel/carousel-iif.svg' width={206} height={100} alt='Indonesia Indah Foundation' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/carousel/carousel-bi.svg' width={315} height={100} alt='Bank Indonesia' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/carousel/carousel-aircarbon.svg' width={190} height={100} alt='Air Carbon Exchange' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/carousel/carousel-iif.svg' width={206} height={100} alt='Indonesia Indah Foundation' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/carousel/carousel-bi.svg' width={315} height={100} alt='Bank Indonesia' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

'use client';

import './style.scss';
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export const HomeCarousel = () => {
  return (
    <Swiper
      autoplay={{ delay: 0, pauseOnMouseEnter: false, stopOnLastSlide: false }}
      loop
      speed={3600}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      modules={[Autoplay, Pagination]}
      className='home-swiper-carousel bg-white rounded-2xl w-full'
    >
      <SwiperSlide>
        <Image src='/assets/carousel/carousel-aircarbon.png' width={128} height={67} alt='Air Carbon Exchange' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/assets/carousel/carousel-iif.png' width={138} height={75} alt='Indonesia Indah Foundation' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/assets/carousel/carousel-fairatmos.png' width={200} height={50} alt='Fairatmos' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/assets/carousel/carousel-eco-securities.png' width={170} height={75} alt='Eco Securities' />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/assets/carousel/carousel-icta.png'
          width={184}
          height={117}
          alt='Indonesian Carbo Trade Association'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src='/assets/carousel/carousel-arkadiah.png'
          width={184}
          height={117}
          alt='Indonesian Carbo Trade Association'
        />
      </SwiperSlide>
    </Swiper>
  );
};

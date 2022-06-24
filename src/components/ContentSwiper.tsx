import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  slides: React.ReactNode[];
  hasNavigation?: boolean;
  className?: string;
}

const ContentSwiper: React.FC<Props> = ({
  slides: propSlides = [],
  hasNavigation = false,
  className = '',
}) => {
  const [slides, setSlides] = useState<
    { content: React.ReactNode; uuid: string }[]
  >([]);

  useEffect(() => {
    if (!propSlides) {
      return;
    }

    setSlides(
      propSlides?.map?.((propSlide) => ({ content: propSlide, uuid: uuidv4() }))
    );
  }, [propSlides]);

  return (
    <Swiper
      className={className}
      navigation={hasNavigation}
      keyboard
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation, Keyboard]}
    >
      {slides?.map?.((slide) => (
        <SwiperSlide key={slide.uuid}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContentSwiper;

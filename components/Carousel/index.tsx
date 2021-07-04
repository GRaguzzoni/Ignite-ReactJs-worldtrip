import {Swiper, SwiperSlide} from "swiper/react"
import {Text, Flex} from "@chakra-ui/react";
import SwiperCore, {Navigation, Pagination} from "swiper/core";
import React from 'react';

import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


SwiperCore.use([Navigation,Pagination])

interface SlideProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

interface CarouselProps {
  sliders: SlideProps[];
}

export function Carousel({sliders}: CarouselProps) {
  return (
    <Swiper 
      style={{'--swiper-navigation-color': '#FFBA08', '--swiper-pagination-color': '#FFBA08'}}
      
      slidesPerView={1}
      navigation={true}
      className="mySwipper"
      pagination={true}
      cssMode={true}
    >
      {sliders.map((slider, i) => (
        <SwiperSlide key={i}>
        <Flex
          
          maxWidth="1440px"
          maxHeight="450px"
          align="center"
          justify="center"
          h="450px"
          bgImage={`url('${slider.imageUrl}')`}
          bgSize="cover"
          direction="column"
        >
          <Text fontSize="50" fontWeight="600">{slider.title}</Text> 
          <Text fontSize="20" fontWeight="600">{slider.subtitle}</Text>                   
        </Flex>
      </SwiperSlide>      
      ))}  
      

    </Swiper>
  )
}
import {Header} from "../components/Header"
import Head from 'next/head';
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Box, Flex, SliderProps} from '@chakra-ui/react';
import { Divider } from "../components/Divider";
import { Carousel } from "../components/Carousel";
import { useState } from "react";

interface SlideProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export default function Home() {
  const [continents, setContinents] = useState<SlideProps[]>([
    {
      imageUrl: "https://images.unsplash.com/photo-1606863503970-61ed1a787e34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80",
      title: "Europa",
      subtitle: "O continente mais antigo"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1568888539200-ea13741b9e4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80",
      title: "Oceania",
      subtitle: "O continente mais distante"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1588196406407-b84744ef431a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
      title: "América",
      subtitle: "O novo continente"
    }
  ])

  return (
    <Flex 
      direction="column"
      pb="40px"
    >
      <Head>
        <title>Worldtrip</title>
      </Head>      
      <Header />      
      <Banner /> 
      <Box 
        w="100%"
        mx="auto"
        mt={{
          base: "90px",
          lg: "114px"
        }}
        maxW={1440}
      >
        <TravelTypes />
        <Divider mt="100px" mb="50px" />
        <Carousel sliders={continents}/>
      </Box>
      
          

    </ Flex >
  )
}

import { border, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { CategoryData } from "./CatData";
import { Carousel2 } from "./CarouselCat";
import {
    Box,
    HStack,
    Stack,
    Image,
    Text,
 
  } from '@chakra-ui/react';

const   Category = () =>{
  
    return <>
          CategoryData
        <Box>
        <Carousel2></Carousel2>
        </Box>
        <Box 
                width={"70%"}
                margin={"auto"}
                display={"grid"} 
                gridTemplateColumns={'repeat(3, 1fr)'}
                gridGap={6}
                border={"1px solid" }
               >
        {CategoryData.map((e) => (
                <HStack className='homeCircleinner' key={e.Id}
                border={"1px solid rgb(220,220,220)"} 
                borderRadius="10px">
                <>
                    <Image src={e.image} alt=""
                     className='homeCircleimg'
                     width={"30%"}></Image>
                    <Text fontSize="md">{e.title}</Text>
                    <Text>Upto {e.b1}% off</Text>
                </>
                </HStack>
                ))}
       
       </Box>

      
    </>
}


export default  Category;
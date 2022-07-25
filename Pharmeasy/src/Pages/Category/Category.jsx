import React from "react";
import { CategoryData } from "./CatData";
import { Carousel2 } from "./CarouselCat";
import {
    Box,
    HStack,
    Stack,
    Image,
    Text,
    border,
    Grid, 
    VStack 
 
  } from '@chakra-ui/react';
  import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import { getData } from "../../Redux/CategoryData/action";
 
  

  

const   Category = () =>{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect (() => {
    dispatch(getData())

  },[]);
  const data = useSelector((state)=>state.categoryState.showCategory)
  console.log(data)

  const Show_All_product_details = (prodId) => {
    navigate(`/products/${prodId}`)
  }


    return <>
         
        <Box 
        width={"50%"}
        margin={"auto"}
        marginTop={"50px"}
        marginBottom={"50px"}>
        <Carousel2></Carousel2>
        </Box>
        <Box 
                width={"70%"}
                margin={"auto"}
                display={"grid"} 
                gridTemplateColumns={'repeat(3, 1fr)'}
                gridGap={6}
                marginBottom={"50px"}
               >
        {CategoryData.map((e, i) => (
                <HStack 
                
                key={i} onClick={() =>Show_All_product_details(item.id)} 
                className='homeCircleinner'
                border={"1px solid rgb(220,220,220)"} 
                borderRadius="10px"
                >
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
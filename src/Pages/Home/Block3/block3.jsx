import React from "react";
import{Text, Box, Image, Flex, Heading} from '@chakra-ui/react';

const Block3 = () =>{


    const Block = [
        {
            img: "https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg",
            title: "25 Million",
            para: "Registered Users as of Jun 30, 2021",
            id : "h11"

        },
        {
            img: "https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg",
            title: "8.8 Million",
            para: "PharmEasy Orders as of FY21",
            id : "h12"
        },
        {
            img: "https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg",
            title: "50K+",
            para: "SKUs sold in Q1FY22",
            id : "h13"
        },
        {
            img: "https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg",
            title: "18K+",
            para: "Pin-Codes Serviced for the month of June 2021",
            id : "h14"
        }
    
    ]


    
    return <div>
         <Box>
                <Flex 
                width={"95%"} 
                flexWrap='wrap'
                margin={"auto"}
                marginBottom={"70px"} 
                marginTop={"70px"}
                alignItems='center' justifyContent='space-between'
               >
                    {
                        Block.map((item) => (
                            <>
                                <Box key={item.id} w='300px' h='251px' color='#4f585e'>
                                    <Image src={item.img} />
                                    <Heading fontSize='42px' fontWeight='700' marginTop='30px' marginBottom='10px'>{item.title}</Heading>
                                    <Text fontSize='18px' fontWeight='600' >{item.para}</Text>
                                </Box>
                            </>
                        ))
                    }
                </Flex>
        
            </Box>
        
        
    </div>
}

export default  Block3 ;
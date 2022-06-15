import React from "react";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Input,
  ButtonGroup


} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon} from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];





const Navbar = () =>{
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('rgb(16,132,126)', 'rgb(16,132,126)')} px={8} alignItems={'center'}>
       <Box margin={"auto"} textAlign={"center"}  >
       <Flex width={"70%"} 
        margin={"auto"} 
        spacing={4}
        height={"80px"}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack >
            <Image 
              width={"150px"}
              height={"50px"}
              objectFit='fit'
              marginRight={"50px"}
              src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt='Logo' >
            </Image>
          
            <HStack bg={useColorModeValue('rgb(255,255,255)', 'rgb(255,255,255)') }
                  spacing={0}
                  borderRadius={"10px"}
                  border={"1px solid white"}
                  fontSize={"larger"}>
            <Input 
            height={"40px"}
            width={"150px"}
            border={"1px solid white"}
            placeholder={"Deliver to"}>
            </Input>
            <Input 
            height={"40px"} 
            width={"400px"}
            border={"1px solid white"}
            placeholder={"Search Medicines / Healthcare Products"}
            ></Input>
            <IconButton aria-label='Search database' icon={<SearchIcon />}
             height={"40px"} 
             width={"60px"}
             border={"1px solid white"} />
            
            </HStack>
            </HStack>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>  
            </HStack>
          </HStack>
        </Flex>

        <Flex width={"80%"} 
        margin={"auto"}  justifyContent={"space-between"}>
      
             <HStack>
              <ButtonGroup spacing={10} align='center'>
              < Button  colorScheme={"rgb(16,132,126)"} color={"white"} >Order Medicines</Button>
              < Button colorScheme={"rgb(16,132,126)"} color={"white"} >Healthcare Products</Button>
              < Button colorScheme={"rgb(16,132,126)"} color={"white"} >Lab Tests</Button>
              < Button colorScheme={"rgb(16,132,126)"} color={"white"} >RTPCR</Button>
              </ButtonGroup>
             </HStack>

             <HStack>
              <ButtonGroup spacing={10} align='center'>
             < ButtonGroup >
             <Button colorScheme={"rgb(16,132,126)"} color={"white"}>Offers</Button>
             </ButtonGroup>
              < Button colorScheme={"rgb(16,132,126)"} color={"white"} >Login/Signup</Button>
              < Button colorScheme={"rgb(16,132,126)"} color={"white"} >Cart</Button>
              </ButtonGroup>
             </HStack>
        </Flex>

       </Box>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}> 
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

export default Navbar;
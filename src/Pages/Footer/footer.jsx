import React from "react";
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Heading,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Image,
    HStack,
    Icon,
  } from '@chakra-ui/react';
  import pay from "../../Image/pay.png";
  import {AiFillTwitterCircle}  from "react-icons/ai";
  import {BsInstagram ,BsFacebook , BsYoutube } from "react-icons/bs";



  const SocialButton = () => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  



const Footer = () =>{

    return (
        <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}>
          <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
              <Stack align={'flex-start'}>
                <Heading as='h5' size='sm'>Company</Heading>
                <Link href={'#'}>About Us</Link>
                <Link href={'#'}>Careers</Link>
                <Link href={'#'}>Blog</Link>
                <Link href={'#'}>Partner with PharmEasy</Link>
                <Link href={'#'}>Sell at PharmEasy</Link>

                <Heading as='h5' size='sm'>Our Services</Heading>
                <Link href={'#'}>Order Medicine</Link>
                <Link href={'#'}>Health Products</Link>
                <Link href={'#'}>Lab Tests</Link>
                <Link href={'#'}>Contact Us</Link>
                <Link href={'#'}>Find Nearest Colletion Center</Link>
              </Stack>
    
              <Stack align={'flex-start'}>
                <Heading as='h5' size='sm'>Featured Categories</Heading>
                <Link href={'#'}>Personal Care</Link>
                <Link href={'#'}>Health Food and Drinks</Link>
                <Link href={'#'}>Skin Care</Link>
                <Link href={'#'}>Home Care</Link>
                <Link href={'#'}>Ayurvedic Care</Link>
                <Link href={'#'}>Sexual Wellness</Link>
                <Link href={'#'}>Fitness & Supplements</Link>
                <Link href={'#'}>Mother and Baby Care</Link>
                <Link href={'#'}>Healthcare Devices</Link>
                <Link href={'#'}>Surgicals and Dressings</Link>
                <Link href={'#'}>Health Condition</Link>
                <Link href={'#'}>Diabetic Care</Link>
                <Link href={'#'}>Elderly Care</Link>
                <Link href={'#'}>Accessories And Wearables</Link>
                <Link href={'#'}>Beauty</Link>
              </Stack>
    
              <Stack align={'flex-start'}>
                <Heading as='h5' size='sm'>Need Help</Heading>
                <Link href={'#'}>Browse All Medicines</Link>
                <Link href={'#'}>Browse All Molecules</Link>
                <Link href={'#'}>Browse All Cities & Areas</Link>
                <Link href={'#'}>FAQs</Link>


                <Heading as='h5' size='sm'>Policy Info</Heading>
                <Link href={'#'}>Editorial Policy</Link>
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Vulnerability Disclosure Policy</Link>
                <Link href={'#'}>Terms and Conditions</Link>
                <Link href={'#'}>Customer Support Policy</Link>
                <Link href={'#'}>Return Policy</Link>
              </Stack>
    
              <Stack align={'flex-start'}>
                <Heading as='h5' size='sm' marginBottom={"12px"}>Follow US</Heading>
                  <HStack>
                   
                  <Icon as={BsInstagram} color={"teal"}  w={10} h={10}  marginRight={"10px"}></Icon>
                    <Icon as={BsFacebook} color={"teal"}  w={10} h={10} marginRight={"10px"}></Icon>
                    <Icon as={BsYoutube} color={"teal"}  w={12} h={12} marginRight={"10px"}></Icon>
                    <Icon as={AiFillTwitterCircle} color={"teal"}  w={12} h={12} marginRight={"10px"}></Icon>
                    
                  </HStack>
              </Stack>
            </SimpleGrid>

         
          </Container>

          <Image src={pay} alt="payment"></Image>
       
        </Box>
      );
   
}

export default Footer;
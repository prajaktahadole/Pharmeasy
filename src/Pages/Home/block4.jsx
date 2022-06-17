import React from "react";
import{Text, Box, Image} from '@chakra-ui/react';
import B41 from "../../Image/B41.png";
import B42 from "../../Image/B42.png";

const Block4 = () =>{
    return <div>
        <Box 
        width={"80%"}
        margin={"auto"}>
        <Image width={"100%"} src={B41}></Image>
        <Image width={"100%"} src={B42}></Image>
            
        </Box>
    </div>
}

export default  Block4 ;
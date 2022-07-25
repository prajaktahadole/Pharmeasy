import React from "react";
import {Carousel1} from './Carousels/Carousel1';
import Carousel2 from './Carousels/Carousel2';
import Block1 from "./Block1/Block1";
import Block2 from "./Block2/Block2";
import Block3 from "./Block3/block3";
import Block4 from "./Block4/Block4";
import Block5 from "./Block5/Block5";

const Home = () =>{
    return <div>
       
   
       <Carousel1></Carousel1>
       <Block1></Block1>
       <Block2></Block2>
       <Block3></Block3>
       <Block4></Block4>
       <Block5></Block5>
       <Carousel2></Carousel2>
    </div>
}

export default Home;
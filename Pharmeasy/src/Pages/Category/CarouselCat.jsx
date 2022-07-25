import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  "https://cms-contents.pharmeasy.in/banner/c1642e659f5-BeautyLauch-SB-June22.jpg",
  "https://cms-contents.pharmeasy.in/banner/3bdb0db12e1-ABZORB-JUL.jpg",
  "https://cms-contents.pharmeasy.in/banner/33ce2b5ba8b-Friends-CB-May22.jpg",
  "https://cms-contents.pharmeasy.in/banner/c4d259a9077-OneTouchSPS-CB-July22.png",
  "https://cms-contents.pharmeasy.in/banner/b1cd3f940f5-Evion-CB.jpg",
  "https://cms-contents.pharmeasy.in/banner/a86af72f350-Huggies-CB-May22.jpg",
  "https://cms-contents.pharmeasy.in/banner/438cbe12594-BachatDay-CB-26July.jpg?dim=700x0&dpr=1&q=100"
 
];


export const Carousel2 = () => {
  
  const [autoplay, setAutoplay] = useState(true);

  return (
    <>
    <div style={{ width: "100%", MaxHeight: "98%" , margin: "auto"}}  >
        <Slide autoplay={autoplay}>
            {slideImages.map((item) => (
                <div className="each-slide" >
                    <div style={{ width: "100%", height: "auto" }}>
                        <img src={item} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                    </div>
                </div>
            ))}

        </Slide>
    </div >
</>
  );
};
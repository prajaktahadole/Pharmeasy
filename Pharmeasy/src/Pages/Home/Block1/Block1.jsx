import React from 'react';
import Styles from './Block1.module.css'

const Block1 = () => {
  return (
    <div>
      <div className={Styles.block1_container}>
          <div className={Styles.block1_main}>
              <div className={Styles.block1_middle}>
                  <h4 className={Styles.block1_line}>Order Medicine</h4>
                  <img className={Styles.block1_image} src='https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1.25&q=100' alt='logo'/>
              </div>
              <div>
                  <button className={Styles.block1_button}>Order Now</button>
              </div>
          </div>
          <div className={Styles.block1_main}>
              <div className={Styles.block1_middle} style={{backgroundColor:"rgb(253,242,210)"}}>
                  <h4 className={Styles.block1_line}>Healthcare Products</h4>
                  <img className={Styles.block1_image} src='https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=1.25&q=100' alt='logo'/>
              </div>
              <div>
                  <button className={Styles.block1_button} style={{backgroundColor:"rgb(252,128,25)"}}>Order Now</button>
              </div>
          </div>
          <div className={Styles.block1_main}>
              <div className={Styles.block1_middle} style={{backgroundColor:"rgb(214,240,255)"}}>
                  <h4 className={Styles.block1_line}>Lab Tests</h4>
                  <img className={Styles.block1_image} src='https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=1.25&q=100' alt='logo'/>
              </div>
              <div>
                  <button className={Styles.block1_button} style={{backgroundColor:"rgb(0,185,225)"}}>Order Now</button>
              </div>
          </div>

          
      </div>
      <div className={Styles.block1_lower}>
           <img className={Styles.block1_image2} src='https://assets.pharmeasy.in/web-assets/dist/e3db129c.png' alt='logo'/>
           <h5 className={Styles.block1_line2}>Save flat 5% extra on medicines & enjoy free delivery with plus membership</h5>
           <img className={Styles.block1_image3} src='https://assets.pharmeasy.in/web-assets/dist/b20b0932.png' alt='logo'/>
      </div>
    </div>
  )
}

export default Block1
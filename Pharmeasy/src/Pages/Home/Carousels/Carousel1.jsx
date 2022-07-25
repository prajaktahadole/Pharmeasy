import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Carousel1 = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="caro-block"
            src="https://cms-contents.pharmeasy.in/banner/11968e3c347-MEGA20_Dweb.jpg?dim=1440x0&dpr=1&q=100"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caro-block"
            src="https://cms-contents.pharmeasy.in/banner/374ed4b3c4e-Liveasy_diabetic_Dweb.jpg?dim=1440x0&dpr=1&q=100"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caro-block"
            src="https://cms-contents.pharmeasy.in/banner/c5bfba7b457-Dweb.jpg?dim=1440x0&dpr=1&q=100"
            alt="Third slide"
          />
        </Carousel.Item>

      
      </Carousel>
    </div>
  );
};
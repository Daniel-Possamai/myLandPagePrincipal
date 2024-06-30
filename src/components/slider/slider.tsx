
import { SliderProps } from '../../pages/home/home';
import './slider.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


interface PropsSlider {
  slides: SliderProps[]
}

export default function Slider(props: PropsSlider) {

  const { slides } = props



  return (
    <div className="container-g-slider">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 1.5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >

        {slides.map((slide, index) => (
          <div key={index} className="container-m-slider">
            <img src= { slide.img } alt= { slide.title } />

          </div>
        ))}
      </Carousel>
    </div>
  );
}
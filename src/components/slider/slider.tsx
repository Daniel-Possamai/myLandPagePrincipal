
import { useState } from 'react';
import { SliderProps } from '../../pages/home/home';
import './slider.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 0
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 0
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 0
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0
  }
};


interface PropsSlider {
  slides: SliderProps[]
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string;
}

export default function Slider(props: PropsSlider, modalProps: ModalProps) {

  const { slides } = props
  const { isOpen, onClose, imgSrc } = modalProps
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Funções para abrir e fechar o modal
  const openModal = (imgSrc: string) => {
    setCurrentImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
 


  return (
    <div className="container-g-slider">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={false}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
      >

        {slides.map((slide, index) => (
          <div key={index} className={ 'container-items' }>
            <img src={slide.img} alt={slide.title} onClick={() => openModal(slide.img)} />
            <h3> { slide.title } </h3>
            <p> { slide.description } </p>
            <a href={ slide.url } target='_blank'>Acesse</a>

          </div>
        ))}
      </Carousel>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={currentImage} alt="Modal" />
            <button onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}
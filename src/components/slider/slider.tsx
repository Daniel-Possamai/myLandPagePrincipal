import React, { useState } from 'react';
import './slider.scss';

interface SliderItemProps {
  imageUrl: string;
  date: string;
  title: string;
  text: string;
  isActive: boolean;
}

const SliderItem: React.FC<SliderItemProps> = ({ imageUrl, date, title, text, isActive }) => (
  <div className={`blog-slider__item ${isActive ? 'swiper-slide-active' : ''}`} 
  style={{
    visibility: isActive ? 'visible' : 'hidden',
    opacity: isActive ? 1 : 0,
    transition: 'opacity 0.5s ease, visibility 0s 0.5s, max-height 0.5s ease',
    maxHeight: isActive ? '1000px' : '0', // Ajuste conforme necessário para acomodar o conteúdo
    // overflow: 'hidden'
  }}
>
  <div className="blog-slider__img">
    <img src={imageUrl} alt="" />
  </div>
  <div className="blog-slider__content">
    <span className="blog-slider__code">{date}</span>
    <div className="blog-slider__title">{title}</div>
    <div className="blog-slider__text">{text}</div>
    <a href="#" className="blog-slider__button">READ MORE</a>
  </div>
</div>
);

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      imageUrl: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp",
      date: "26 December 2019",
      title: "Lorem Ipsum Dolor",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?"
    },
    {
      imageUrl: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp",
      date: "26 December 2019",
      title: "Lorem Ipsum ",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?"
    }
    // Adicione mais slides conforme necessário
  ];

  const nextSlide = () => setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const prevSlide = () => setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  const setSlide = (index: number) => setActiveIndex(index);
  
  return (
    <div className={'container-slider'}>
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          {slides.map((slide, index) => (
            <SliderItem
              key={index}
              imageUrl={slide.imageUrl}
              date={slide.date}
              title={slide.title}
              text={slide.text}
              isActive={activeIndex === index}
            />
          ))}
        </div>
        <div className="slider-controls">
          <button onClick={prevSlide}>Prev</button>
          {slides.map((_, index) => (
            <button key={index} onClick={() => setSlide(index)}>{index + 1}</button>
          ))}
          <button onClick={nextSlide}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import './slider.scss';

interface SliderItemProps {
  imageUrl: string;
  date: string;
  title: string;
  text: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ imageUrl, date, title, text }) => (
  <div className="blog-slider__item swiper-slide">
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

const SliderPagination: React.FC<{ slides: number; activeIndex: number }> = ({ slides, activeIndex }) => (
  <div className="blog-slider__pagination">
    {Array.from({ length: slides }).map((_, index) => (
      <span key={index} className={`blog-slider__pagination-bullet ${index === activeIndex ? 'active' : ''}`} />
    ))}
  </div>
);

const Slider: React.FC = () => {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiperInstance = new Swiper('.blog-slider', {
      direction: 'vertical',
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
    });

    setSwiper(swiperInstance);

    return () => swiperInstance.destroy();
  }, []);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.realIndex);
      });
    }
  }, [swiper]);

  return (
    <div className={'container-slider'}>
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          {/* Exemplo de uso do SliderItem, repetir conforme necessário */}
          <SliderItem
            imageUrl="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
            date="26 December 2019"
            title="Lorem Ipsum Dolor"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?"
          />
          <SliderItem
            imageUrl="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
            date="26 December 2019"
            title="Lorem Ipsum Dolor"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?"
          />
          {/* Adicionar mais SliderItems conforme necessário */}
        </div>
        <SliderPagination slides={2} activeIndex={activeIndex} /> {/* Atualize o número de slides conforme necessário */}
      </div>
    </div>
  );
};

export default Slider;
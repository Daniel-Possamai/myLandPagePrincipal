
import { SliderProps } from '../../pages/home/home';
import './slider.scss'


interface PropsSlider{
  slides: SliderProps[]
}

export default function Slider(props: PropsSlider) {
  
  const { slides } = props



  return (
    <div className="container-g-slider">
      {slides.map((slide, index) => (
        <div key={index} className="container-m-slider">
          <div className="image-slider">
            <img src={slide.img} alt="" />  
          </div>
          <div className="infos-slider">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button>Botão</button>
          </div>
          <div className="nav-slider">
            {slides.map((_, idx) => (
              <button key={idx}>{idx + 1}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
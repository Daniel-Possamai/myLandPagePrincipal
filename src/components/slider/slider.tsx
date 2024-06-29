import { SliderProps } from '@mui/material'
import './slider.scss'


interface PropsSlider{
  slides: SliderProps[]
}

export default function Slider(props: PropsSlider) {
  
  const { slides } = props

  slides.map((slide, index) => {
    console.log(slide.title)
  })


  return (
    <div className="container-g-slider">
      <div className="container-m-slider">
        <div className="image-slider">
          <img src="./images/exclusive.png" alt="" />  
        </div>
        <div className="infos-slider">
          <h2></h2>
          <p>Descrição do slide</p>
          <button>Botão</button>
        </div>
        <div className="nav-slider">
          <button>1</button>
          {/* botoes conforme a quantidade de slides */}
        </div>
      </div>
    </div>
  )
}
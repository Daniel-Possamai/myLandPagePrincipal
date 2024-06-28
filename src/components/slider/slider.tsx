import './slider.scss'

export default function Slider() {



  return (
    <div className="container-g-slider">
      <div className="container-m-slider">
        <div className="image-slider">
          <img src="./images/exclusive.png" alt="" />  
        </div>
        <div className="infos-slider">
          <h2>Titulo do slide</h2>
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
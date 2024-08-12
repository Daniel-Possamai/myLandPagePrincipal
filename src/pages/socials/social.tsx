import './socials.scss'
import InstagramIcon from '@mui/icons-material/Instagram';




export default function Socials(){
    return (
        <div className="container-socials">
             <div id="container-social">
        <div id="profile">
            <img src="./images/logowebswift.png" alt="imagem de perfil da logo da webswift" />
            <p>@webswift</p>
        </div>

        {/* <div id="switch">
            <button>
            </button>
            <span></span>
        </div> */}

        <ul className='lista-links'>
            <li>
                <a href="https://wa.me/554998061369" target="_blank" rel="noreferrer">Entre em contato</a>
            </li>
            <li>
                <a href="www.webswift.com.br" target="_blank" rel="noreferrer">Veja nosso site oficial</a>
            </li>
        </ul>
        <div id="socialLinks-socials">
            <a href="https://www.instagram.com/webswift/" target="_blank" rel="noreferrer">
                <InstagramIcon />
            </a>
        </div>
        <footer className='footer-socials'>
            <a href="https://wa.me/49998241133" target="_blank" rel="noreferrer">Desenvolvido por <span>WebSwift</span></a>
        </footer>
    </div>
        </div>
    )
}
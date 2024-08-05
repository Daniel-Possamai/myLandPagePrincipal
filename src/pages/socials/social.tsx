import './socials.scss'




export default function Socials(){
    return (
        <div className="container-socials">
             <div id="container-social">
        <div id="profile">
            <img src="./images/logowebswift.png" alt="imagem de perfil da logo da webswift" />
            <p>@webswift</p>
        </div>

        <div id="switch">
            <button>
            </button>
            <span></span>
        </div>

        <ul>
            <li>
                <a href="https://wa.me/5549920029" target="_blank">Entre em contato</a>
            </li>
            <li>
                <a href="https://spotify.link/GKor3U167Jb" target="_blank">Playlist para treinar </a>
            </li>
        </ul>
        <div id="socialLinks-socials">
            <a href="https://www.instagram.com/webswift/" target="_blank">
            </a>
        </div>
        <footer className='footer-socials'>
            <a href="https://wa.me/49998241133" target="_blank">Desenvolvido por <span>WebSwift</span></a>
        </footer>
    </div>
        </div>
    )
}
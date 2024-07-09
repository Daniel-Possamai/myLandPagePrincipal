import "./footer.scss"


export default function Footer(){
    return (
        <footer className={ 'footer' }>
            <div className="socialLinks">
                <ul>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
                    <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
                </ul>
            </div>
            <div className="line-down">
                <p>Copyright © 2024 Bruordi e Legend. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
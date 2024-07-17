import "./footer.scss"
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';


export default function Footer(){
    return (
        <footer className={ 'footer' }>
            {/* <div className="socialLinks">
                <ul>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon/></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><InstagramIcon/></a></li>
                    <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><XIcon/></a></li>
                </ul>
            </div> */}
            <div className="line-down">
                <p>Copyright © 2024 Bruordi e Legend. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
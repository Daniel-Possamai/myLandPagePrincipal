import "./notfound.scss";
import WarningIcon from '@mui/icons-material/Warning';
import HomeIcon from '@mui/icons-material/Home';


export default function NotFound(){
    return (
        <div className="container-notfound">
            <WarningIcon className="warning-icon" />
            <h2>Página não encontrada!</h2>
            <a href="/" ><HomeIcon/>Voltar ao início</a>
        </div>
    )
}
import './hero.scss'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export default function Hero() {
    return (
        <div className={ 'container-hero' }>
            <p>Landing Page</p>
            <ExpandMoreRoundedIcon className={ 'arrow-page' }/>
        </div>
    )
}
import './hero.scss'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export default function Hero() {
    return (
        <div className={'container-hero'}>
            <div className={ "animated-title" }>
                <div className= {"text-top"} >
                    <div>
                        <span>Adquira</span>
                        <span>sua Landing Page</span>
                    </div>
                </div>
                <div className= { "text-bottom" }>
                    <div>e expanda a sua presença na internet!</div>
                </div>
            </div>
            <ExpandMoreRoundedIcon className={'arrow-page'} />
        </div>
    )
}
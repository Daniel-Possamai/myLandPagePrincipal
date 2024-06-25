import Header from "../../components/header/header"
import Hero from "../../components/hero/hero"
import PreLoader from "../../components/preloader/preloader"
import "./home.scss"

export default function Home(){
    return (
        <div className={ 'container-home' }>
            {/* <PreLoader/> */}

            <a href="#" className={ "header" }> <Header/> </a>
            <div className={ 'container-Englobador' }>
                <Hero/>
            
            </div>

            
        </div>
    )
}
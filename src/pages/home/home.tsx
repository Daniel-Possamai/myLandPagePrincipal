import Logo from "../../components/logo/logo"
import Hero from "../../components/hero/hero"
import PreLoader from "../../components/preloader/preloader"
import "./home.scss"

export default function Home(){
    return (
        <div className={ 'container-home' }>
            {/* <PreLoader/> */}

            <div className={ 'container-Englobador' }>
                <Hero/>
                <div className="teste">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius laboriosam officia vitae illum! Omnis dolore voluptatem eveniet similique debitis nisi quod iure, aliquid culpa vitae eos cum? Sit, voluptatibus?</div>
            </div>

            
        </div>
    )
}
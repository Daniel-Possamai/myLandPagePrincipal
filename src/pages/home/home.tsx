import Logo from "../../components/logo/logo"
import Hero from "../../components/hero/hero"
import PreLoader from "../../components/preloader/preloader"
import "./home.scss"
import { useEffect, useState } from "react"
import Objectpage from "../../components/objectpage/objectpage"
import Slider from "../../components/slider/slider"
import { SliderData } from "../../utils/data"




export interface SliderProps {
    title: string,
    description: string,
    url: string,
    img: string
}



export default function Home(){
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])


    return (
        <div className={ 'container-home' }>

            {/* { loading ?
             ( <PreLoader/> ) 
             : 
             <div className={ 'container-Englobador' }>
                <Hero/> */}
                {/* <div className="teste">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius laboriosam officia vitae illum! Omnis dolore voluptatem eveniet similique debitis nisi quod iure, aliquid culpa vitae eos cum? Sit, voluptatibus?</div> */}
                <Objectpage/>
                {/* <div className="teste">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius laboriosam officia vitae illum! Omnis dolore voluptatem eveniet similique debitis nisi quod iure, aliquid culpa vitae eos cum? Sit, voluptatibus?</div> */}
                <Slider slides={ SliderData }/>
            {/* </div>
        } */}
            

            
            
        </div>
    )
}

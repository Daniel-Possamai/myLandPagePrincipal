import Hero from "../../components/hero/hero"
import PreLoader from "../../components/preloader/preloader"
import "./home.scss"
import { useEffect, useState } from "react"
import Objectpage from "../../components/objectpage/objectpage"
import Slider from "../../components/slider/slider"
import { SliderData } from "../../utils/data"
import Faaq from "../../components/faq/faq"
import Footer from "../../components/footer/footer"
import Forms from "../../components/formulario/formulario"
import Seo from "../../components/seo/seo"







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
             : */}
             <div className={ 'container-Englobador' }>
                <Hero/>

                <Objectpage />

                <Seo/>

                <Slider slides={ SliderData }/>

                <Forms/>

                <Faaq/>
            
            </div>
        {/* } 
             */}
        {loading ? ""
            :
            <Footer/>}

            
            
        </div>
    )
}

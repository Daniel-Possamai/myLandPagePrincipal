import Hero from "../../components/hero/hero"
import PreLoader from "../../components/preloader/preloader"
import "./home.scss"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
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

    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
    const { ref: objectpageRef, inView: objectpageInView } = useInView({ triggerOnce: true });
    const { ref: sliderRef, inView: sliderInView } = useInView({ triggerOnce: true });
    const { ref: formsRef, inView: formsInView } = useInView({ triggerOnce: true });
    const { ref: faaqRef, inView: faaqInView } = useInView({ triggerOnce: true });
    const { ref: seoRef, inView: seoInView } = useInView({ triggerOnce: true });



    return (
        <div className="container-home">
        {loading ? (
            <PreLoader />
        ) : (
            <div className="container-Englobador">
                <div ref={heroRef} className={`hero ${heroInView ? 'animate' : ''}`}>
                    <Hero />
                </div>
                <div ref={objectpageRef} className={`objectpage ${objectpageInView ? 'animate' : ''}`}>
                    <Objectpage />
                </div>
                <div ref={seoRef} className={`seo ${seoInView ? 'animate' : ''}`}>
                    <Seo />
                </div>
                <div ref={sliderRef} className={`slider ${sliderInView ? 'animate' : ''}`}>
                    <Slider slides={SliderData} />
                </div>
                <div ref={formsRef} className={`forms ${formsInView ? 'animate' : ''}`}>
                    <Forms />
                </div>
                <div ref={faaqRef} className={`faaq ${faaqInView ? 'animate' : ''}`}>
                    <Faaq />
                </div>
            </div>
        )}

        <Footer />
        
    </div>
    )
}

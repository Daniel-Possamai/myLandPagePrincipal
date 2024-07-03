import Hero from "../../components/hero/hero"
import PreLoader from "../../components/preloader/preloader"
import "./home.scss"
import { useEffect, useState } from "react"
import Objectpage from "../../components/objectpage/objectpage"
import Slider from "../../components/slider/slider"
import { SliderData } from "../../utils/data"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';




export interface SliderProps {
    title: string,
    description: string,
    url: string,
    img: string
}



export default function Home(){
    const [loading, setLoading] = useState(true)

    // Hook para Objectpage
    const { ref: refObjectpage, inView: inViewObjectpage } = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
    });

    // Hook para Slider
    const { ref: refSlider, inView: inViewSlider } = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
    });


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])


    return (
        <div className={ 'container-home' }>

            { loading ?
             ( <PreLoader/> ) 
             : 
             <div className={ 'container-Englobador' }>
                <Hero/>
                
                <motion.div
                    ref={refObjectpage}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inViewObjectpage ? 1 : 0, y: inViewObjectpage ? 0 : 50 }}
                    transition={{ duration: 2.5, ease: "easeInOut"}}
                >
                    <Objectpage />
                </motion.div>
                <motion.div
                    ref={refSlider}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inViewSlider ? 1 : 0, y: inViewSlider ? 0 : 50 }}
                    transition={{ duration: 2.5, ease: "easeInOut"}}
                >
                    <Slider slides={ SliderData }/>
                </motion.div>
                
            </div>
        }
            

            
            
        </div>
    )
}

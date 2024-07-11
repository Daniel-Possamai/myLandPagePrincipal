import './faq.scss'
// import React, { useEffect, useState } from "react";
import Faq from "react-faq-component"


const data = {
    title: "FAQ (perguntas frequentes)",
    rows: [
        {
            title: "O que é uma Landing Page?",
            content: `Uma Landing Page é uma página da web criada com o objetivo específico de converter visitantes em leads ou clientes. Ela geralmente contém informações concisas, um formulário de captura de dados (como e-mail) e uma chamada para ação (CTA). As Landing Pages são usadas para promover produtos, serviços ou infoprodutos com alta conversão`,
        },
        {
            title: "Por que criar uma Landing Page?",
            content:
                "Uma landing page bem projetada pode aumentar a taxa de conversão de visitantes em clientes ou leads. Dessa forma, a empresa maximiza o retorno sobre o investimento em marketing. É possível usar e segmentar esses leads e planejar campanhas futuras de acordo com cada perfil de cliente.",
        },
        {
            title: "O que é um design responsivo?",
            content: `Um site responsivo se adapta automaticamente ao tamanho da tela do dispositivo que você está usando, seja um computador, tablet ou smartphone. Isso garante que a experiência de navegação seja sempre confortável e legível, independentemente do dispositivo.`,
        },
        {
            title: "Entenda o que é SEO e sua importância para o site",
            content: `SEO (Search Engine Optimization) é o conjunto de estratégias e técnicas utilizadas para melhorar a visibilidade e o posicionamento de um site nos resultados orgânicos dos mecanismos de busca, como o Google, Bing e Yahoo. O objetivo do SEO é aumentar o tráfego de visitantes qualificados ao site, proporcionando maior exposição e, consequentemente, potencializando as oportunidades de conversão e vendas. Basicamente, o SEO busca otimizar o design e o conteúdo do site para que ele apareça nos primeiros resultados dos motores de busca, tornando-o mais visível e atraindo visitantes de forma orgânica`,
        },
    ],
};

const styles = {
    bgColor: 'none',
    titleTextColor: "#fff",
    rowTitleColor: "#fff",
    rowContentColor: '#e7e7e7',
    arrowColor: "red",
    // titleTextSize: '26px',
};


const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

export default function Faaq(){

    
    
    return (
        <div className="container-g-faq">
            <div className="custom-faq-container">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
             </div>
        </div>
    )
}
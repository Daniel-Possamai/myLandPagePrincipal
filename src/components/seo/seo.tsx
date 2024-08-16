import './seo.scss'

export default function Seo() {
    return (
        <div className="container-g-seo">
            <div className="container-m-seo">
                <div className="infos-seo">
                    <h1>SEO (Search Engine Optimization)</h1>
                    <p>Na <span>WebSwift</span>, estamos comprometidos em oferecer soluções digitais de alta qualidade para nossos clientes. Uma das maneiras mais eficazes de alcançar visibilidade online e superar a concorrência é através da otimização de mecanismos de busca (SEO).</p>
                </div>
                <div className="img-seo">
                    <img src="./images/seoanalytics.png" alt="imagem do ilustrativa do SEO" />
                </div>
            </div>

            <hr />

            <div className="container-m-seo">
                <div className="img-seo">
                    <img src="./images/seoanalyticstwo.png" alt="" />
                </div>
                <div className="infos-seo2">
                    <h1>Como utilizamos o SEO na construção dos sites</h1>
                    <ul>
                        <li><span>Estratégia de Palavras-Chave:</span> Realizamos pesquisas detalhadas para identificar as palavras-chave relevantes para o seu nicho de mercado. Essas palavras-chave são incorporadas ao conteúdo do seu site de forma estratégica.</li>
                        <li><span>Produção de Conteúdo Relevante:</span> Criamos conteúdo de alta qualidade, focado nas necessidades do seu público-alvo. Isso não apenas atrai visitantes, mas também melhora o ranqueamento do site.</li>
                        <li><span>Links Internos e Externos:</span> Incluímos links relevantes dentro do seu conteúdo para melhorar a experiência do usuário e fortalecer a autoridade do seu site.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
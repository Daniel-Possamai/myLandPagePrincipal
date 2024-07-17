import { useState } from 'react';
import './objectpage.scss'





function ObjectPage() {
    const [activeOption, setActiveOption] = useState('opcao1');
    const [contentVisible, setContentVisible] = useState(true);
    const [currentImage, setCurrentImage] = useState('./images/exclusive.png');
    const [imageOpacity, setImageOpacity] = useState<number>(1);



    const handleSetActiveOption = (option: string) => {
        setContentVisible(false);
        let newImage = ''; // Inicializa a variável para a nova imagem
        // Define a nova imagem com base na opção selecionada
        switch (option) {
            case 'opcao1':
                newImage = './images/exclusive.png';
                break;
            case 'opcao2':
                newImage = './images/clients.png';
                break;
            case 'opcao3':
                newImage = './images/responsive.png';
                break;
            default:
                newImage = 'caminho/para/imagemPadrao.png';
        }
        // Atualiza a imagem imediatamente
        changeImage(newImage);
    
        setTimeout(() => {
            setActiveOption(option); // Atualiza a opção ativa
            setContentVisible(true); // Torna o conteúdo visível
        }, 500); // Ajuste o tempo conforme necessário para o texto
    };
    
    const changeImage = (newImage: string) => {
        setImageOpacity(0); // Faz a imagem atual desaparecer
        // Você pode ajustar esse tempo para ser menor se quiser que a imagem comece a aparecer antes do texto
        setTimeout(() => {
            setCurrentImage(newImage); // Atualiza a imagem
            setImageOpacity(1); // Faz a nova imagem aparecer
        }, 500); // Este tempo pode ser ajustado para sincronizar com a transição de texto, se necessário
    };


    const renderContent = () => {
        switch (activeOption) {
            case 'opcao1':
                return <p>Destaque-se com uma landing page única para seu negócio</p>;
            case 'opcao2':
                return <p>Nossa expertise em design e conversão vai impulsionar seus resultados</p>;
            case 'opcao3':
                return <p>Site responsivo para diferentes tamanhos de tela</p>;
            default:
                return <p>Selecione uma opção</p>;
        }
    };

    return (
        <div className={'container-nav-menu'}>
            <div className="nav-and-content">
                <nav className="navMenu">
                    <button className={activeOption === 'opcao1' ? 'active' : ''} onClick={() => handleSetActiveOption('opcao1')}>Design Exclusivo</button>
                    <button className={activeOption === 'opcao2' ? 'active' : ''} onClick={() => handleSetActiveOption('opcao2')}>Conquiste Mais Clientes</button>
                    <button className={activeOption === 'opcao3' ? 'active' : ''} onClick={() => handleSetActiveOption('opcao3')}>Responsividade</button>
                </nav>
                <div className={`content-p ${contentVisible ? 'visible' : 'hidden'}`}>
                    {renderContent()}
                </div>
            </div>
            <div className={'image-container'}>
                <img
                    id="imageId"
                    src={currentImage}
                    style={{ opacity: imageOpacity, transition: 'opacity 0.4s ease-in-out' }}
                    alt="Imagem selecionada"
                />
            </div>
        </div>
    );
}

export default ObjectPage;
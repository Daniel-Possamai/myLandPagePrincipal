import './objectpage.scss'
import { SetStateAction, useState } from 'react';


export default function ObjectPage() {
    const [activeOption, setActiveOption] = useState('opcao1');
    const [contentVisible, setContentVisible] = useState(true);

    const handleSetActiveOption = (option: SetStateAction<string>) => {
        setContentVisible(false); // Esconde o conteúdo
        setTimeout(() => { // Espera a transição ocorrer
            setActiveOption(option);
            setContentVisible(true); // Mostra o novo conteúdo
        }, 400); // Ajuste este tempo para corresponder à duração da sua transição
    };

    // Conteúdo baseado na opção ativa
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
                <div className={`content ${contentVisible ? 'visible' : 'hidden'}`}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
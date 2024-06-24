import React, { useEffect, useState } from 'react';

export default function Header() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeFixed = window.scrollY > 150;
            setIsFixed(shouldBeFixed);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const style: React.CSSProperties = { // Especifica o tipo aqui
        opacity: 1,
        position: isFixed ? 'fixed' : 'relative',
        top: 0,
        width: '100%',
        transition: 'all 0.5s ease',
        zIndex: 10,
    };

    return (
            <header style={style}>
                <img className="logo" src="./images/myLogoBig.png" alt="Logo" />
            </header>
    );
}
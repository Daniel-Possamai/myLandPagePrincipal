import './formulario.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useState, FormEvent } from 'react';

function Forms() {

    const openInNewTab = (url: string) => {
        window.open(url, '_blank');
    }

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());


        try {
            const response = await fetch('https://formsubmit.co/contato@webswift.com.br', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('Houve um erro ao enviar o formulário. Por favor, tente novamente.');
            }
        } catch (error) {
            alert('Erro ao enviar o formulário: ' + error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="container-g-form">
            <button className="button" data-text="Awesome">
                <span className="actual-text">&nbsp;Contato&nbsp;</span>
                <span aria-hidden="true" className="hover-text">&nbsp;Contato&nbsp;</span>
            </button>
            <div className="container-m-form">
                <div className="form-container">{submitted ? (
                    <div className='thanks-msg'><p>Obrigado por entrar em contato!</p> <br></br> <p>Em breve retornaremos.</p></div>
                ) : isLoading ? (
                    <div className="loader-form">
                        <label>Enviando...</label>
                        <div className="loading-form"></div>
                    </div>

                ) : (
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">Envie sua mensagem</label>
                            <textarea name="textarea" id="textarea" rows={10} cols={50} required></textarea>
                        </div>
                        <button className="form-submit-btn" type="submit">Enviar</button>
                    </form>
                )}
                </div>
                <div className="contact-container">
                    <div className="parent">
                        <div className="card">
                            <div className="logo">
                                <span className="circle circle1"></span>
                                <span className="circle circle2"></span>
                                <span className="circle circle3"></span>
                                <span className="circle circle4"></span>
                                <span className="circle circle5">
                                    <img className={' svg '} src="./images/logowebswiftnome.png" alt="logo da webswift" />
                                </span>

                            </div>
                            <div className="glass"></div>
                            <div className="content">
                                <span className="title">Entre em contato</span>
                                <span className="text">Se preferir use os botões das redes sociais para entrar em contato</span>
                            </div>
                            <div className="bottom">

                                <div className="social-buttons-container">
                                    <button className="social-button .social-button1" onClick={() => openInNewTab("https://instagram.com")}>
                                        <InstagramIcon className='svg' />
                                    </button>
                                    <button className="social-button .social-button2" onClick={() => openInNewTab("https://www.discord.com")}>
                                        <MailOutlineIcon className='svg' />
                                    </button>
                                    <button className="social-button .social-button3" onClick={() => openInNewTab("https://www.discord.com")}>
                                        <WhatsAppIcon className='svg' />
                                    </button>
                                </div>
                                <div className="view-more">
                                    <button className="view-more-button">WebSwift</button>
                                    {/* <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forms;
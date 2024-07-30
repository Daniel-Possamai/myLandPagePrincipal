import './formulario.scss';
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
            const response = await fetch('https://formsubmit.co/sebekaf173@padvn.com', {
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
                                    <img className={' svg '} src="./images/logowebswift.png" alt="logo da webswift" />
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
                                        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                                        </svg></button>
                                    <button className="social-button .social-button2" onClick={() => openInNewTab("https://www.discord.com")}>
                                        <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                                            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                                        </svg>
                                    </button>
                                    <button className="social-button .social-button3" onClick={() => openInNewTab("https://www.discord.com")}>
                                    <svg className='svg' id="whatsapp-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3333 3333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm700 952c-175-175-407-271-655-271-510 0-925 415-925 925 0 163 43 322 124 462l-131 480 491-129c135 74 287 113 442 113 510 0 925-415 925-925 0-247-96-480-271-655zm-654 1424c-138 0-274-37-392-107l-28-17-291 76 78-284-18-29c-77-122-118-264-118-409 0-424 345-769 770-769 205 0 399 80 544 225 145 146 225 338 225 544 0 424-345 770-769 770zm422-576c-23-12-137-67-158-75s-37-12-52 12c-15 23-60 75-73 91-14 15-27 18-50 6s-98-36-186-115c-69-61-115-137-129-160s-2-36 10-47c11-10 23-27 35-41s15-23 23-39c8-15 4-29-2-41s-52-125-71-172c-19-45-38-39-52-40s-29-1-44-1-40 6-62 29c-21 23-81 79-81 193s83 224 94 239c12 15 163 249 395 349 55 24 98 38 132 49 55 17 106 15 146 9 44-7 137-56 156-110s19-100 14-110-21-16-44-28z"/></svg>
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
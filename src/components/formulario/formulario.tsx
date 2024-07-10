import './formulario.scss';

function Forms() {
    return (
        <div className="container-g-form">
            <div className="form-container">
                <form className="form">
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
            </div>
        </div>
    );
}

export default Forms;
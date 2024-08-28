import React, { useState } from "react";
import "./barber.scss";



export default function Barber() {

    const [valid, setValid] = useState(false)
    const [senha, setSenha] = useState('')


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (senha === '2023') {
            setValid(true)
        }
    }

    return (
        <div className={"container-barber"}>

            <div className="container-barber-englobador">
                {valid
                    ?
                    <div className="test"><h1>Barbeiro</h1></div>
                    :
                    <form className={"form-senha"} onSubmit={handleSubmit}>
                        <label htmlFor="senha">
                            Senha:
                            <input name="senha" type="password" value={senha} onChange={handleChange} />
                        </label>
                        <button type="submit">Acessar</button>
                    </form>}
            </div>

        </div>


    )
}
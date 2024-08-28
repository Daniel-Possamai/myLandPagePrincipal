import React, { useEffect, useState } from "react";
import "./barber.scss";



export default function Barber(){

    const [valid, setValid] = useState(false)
    const [senha, setSenha] = useState('')


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(senha === '2023'){
            setValid(true)
        }
    }

    return(
        <div>
            {valid 
            ? 
            <h1>Barbeiro</h1>
            :  
            <form onSubmit={handleSubmit}>
                <label htmlFor="senha">
                    Senha:
                    <input name="senha" type="number" value={senha} onChange={handleChange}/>
                </label>
                <button type="submit">Acessar</button>
            </form> }
            


        </div>
        

    )
}
import { useState } from "react"

export default function Formulario(){
    const [nome,setNome]=useState('')
    return(
        <>
            <label htmlFor="fnome">Digite seu nome: </label>
            <input type="text" name="fnome" id="fnome" value={nome} onChange={(e)=>setNome(e.target.value)}/>
            <p>Nome digitado: {nome}</p>
        </>
    )
}
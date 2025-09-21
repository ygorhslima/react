import { useState } from "react"

export default function FormularioComObjeto(){
    const [form,setForm]=useState({
        "nome":"",
        "curso":"",
        "ano":""
    })
    const handleFormChange=(e)=>{
        let element = e.target.getAttribute("name");
        let input = e.target.value
        setForm({
            "nome":element == 'fnome'?input:form.nome,
            "curso":element == 'fcurso'?input:form.curso,
            "ano":element == 'fano'?input:form.ano
        })
    }
    return(
        <>
            <label>Nome: </label>
            <input type="text" name="fnome" value={form.nome} onChange={(e)=>{handleFormChange(e)}} />
            <label>Curso: </label>
            <input type="text" name="fcurso" value={form.curso} onChange={(e)=>{handleFormChange(e)}} />
            <label>Ano: </label>
            <input type="text" name="fano" value={form.ano} onChange={(e)=>{handleFormChange(e)}} />

            <p>Nome digitado: {form.nome}</p>
            <p>Curso digitado: {form.curso}</p>
            <p>Ano digitado: {form.ano}</p>
            
        </>
    )
}
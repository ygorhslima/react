import { useState } from "react"


const carros=[
    {categoria:"Esportes",preco:"110000",modelo:"Golf GTI"},
    {categoria:"Esporte",preco:"120000",modelo:"Camaro"},
    {categoria:"SUV",preco:"850000",modelo:"HRV"},
    {categoria:"SUV",preco:"830000",modelo:"T-CROSS"},
    {categoria:"Utilitario",preco:"125000",modelo:"Hillux"},
    {categoria:"Utilitario",preco:"90000",modelo:"Ranger"},
]

const Linhas = (cat)=>{
    const linha=[]
    carros.forEach((carro)=>{
        if(carro.categoria.toUpperCase()==cat.toUpperCase() || cat == ''){
            linha.push(
                <tr>
                    <td>{carro.categoria}</td>
                    <td>{carro.preco}</td>
                    <td>{carro.modelo}</td>
                </tr>
            )
        }
    })

    return linha
}

const Tabela = (cat)=>{
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Modelo</th>
                </tr>
            </thead>
            <tbody>
                {Linhas(cat)}
            </tbody>
        </table>
    )
}

export default function TabelaCarros(){
    const [categoria] = useState('');
    return(
        <>
            {Tabela(categoria)}
        </>
    )
}
import { useState } from "react"



function TabelaIMC(){
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo de 18,5</td>
                </tr>
                <tr>
                    <td>Peso normal</td>
                    <td>Entre 18,5 e 24,5</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau I</td>
                    <td>Entre 30 e 34,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau II</td>
                    <td>Entre 35 e 39,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau III</td>
                    <td>Maior que 40</td>
                </tr>
            </tbody>
        </table>
    )
}

const estiloFormulario={
    padding:'10px',
}

function Fpeso({peso, setPeso}){
    return(
        <div style={estiloFormulario}>
            <label>Peso: </label>
            <input type="text" value={peso} onChange={(e)=>{setPeso(e.target.value)}} style={{padding:'5px',fontSize:'0.7em'}}/>
        </div>
    )
}


function Faltura({altura, setAltura}){
    return(
        <div style={estiloFormulario}>
            <label>Altura: </label>
            <input type="text" value={altura} onChange={(e)=>{setAltura(e.target.value)}} style={{padding:'5px',fontSize:'0.7em'}}/>
        </div>
    )
}

function Fcalcular({peso,altura,setResultado}){
    const calc=()=>{
        setResultado(peso / (altura * altura))
    }
    return(
        <div>
            <button onClick={()=>{calc()}} style={{padding:'10px',fontSize:'0.6em', borderRadius:'10px', border:'none', backgroundColor:'black', color:'white', transition:'0.6s',margin:'10px'}}>Calcular</button>
        </div>
    )
}
function Fresultado({resultado}){
    return(
        <div>
            <p>Resultado: {resultado.toFixed(2)}</p>
        </div>
    )
}

export default function FormIMC(){
    const [peso, setPeso]=useState(0)
    const [altura, setAltura]=useState(0)
    const [resultado, setResultado]=useState(0)
    return(
        <>
            <Fpeso peso={peso} setPeso={setPeso}/>
            <Faltura altura={altura} setAltura={setAltura}/>
            <Fcalcular peso={peso} altura={altura} setResultado={setResultado} />
            <Fresultado resultado={resultado}/>
            <TabelaIMC/>
        </>
    )
}
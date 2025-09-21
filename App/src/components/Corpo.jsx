import FormularioComObjeto from "./FormularioComObjeto"

const mainEstilo = {
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
    width:"90%",
    margin:'10px auto 10px auto',
    padding:'10px',
    borderRadius:'10px',
    color:'black'
}

export default function Corpo(){
    return(
        <main style={mainEstilo}>
            <FormularioComObjeto/>
        </main> 
    )
}
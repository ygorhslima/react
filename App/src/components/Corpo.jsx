import VerificarHora from "./VerificarHora"


const mainEstilo = {
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
    width:"90%",
    margin:'10px auto 10px auto',
    padding:'10px',
    borderRadius:'10px',
}

export default function Corpo(){
    return(
        <main style={mainEstilo}>
            <VerificarHora/>       
        </main>
    )
}
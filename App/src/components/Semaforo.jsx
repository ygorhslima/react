const verde = {
    width:'200px',
    height:'200px',
    backgroundColor:'green',
    borderRadius:'50%'
}
const vermelho = {
    width:'200px',
    height:'200px',
    backgroundColor:'red',
    borderRadius:'50%'
}


export default function Semaforo(props){
    return(
        <p>
            <div style={props.ligado?verde:vermelho}></div>
            <button onClick={()=>{props.setLigado(!props.ligado)}}>
                {props.ligado?'desligar':'ligar'}
            </button>
        </p>
    )
}
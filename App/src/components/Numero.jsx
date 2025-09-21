export default function Numero(props){
    return(
        <p>
            <p>valor do State de Numero: {props.num}</p>
            <button onClick={()=>{props.setNum(props.num + 10)}}>Somar</button>
        </p>
    )
}
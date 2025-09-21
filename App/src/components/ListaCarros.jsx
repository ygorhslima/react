export default function ListaCarros(){
    const carros = ['HRV','Golf','Focus','Cruze','Argo','Jeep Renegade'];
    const listaCarros = carros.map((el)=>{return (<li>{el}</li>)})
    
    return(
        <>
            <ul>{listaCarros}</ul>
        </>
    )
}
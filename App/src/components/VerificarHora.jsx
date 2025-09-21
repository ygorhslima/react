export default function VerificarHora(){
    function cumprimento(){
        const hora = new Date().getHours()
        if(hora >= 6 && hora <= 12){
            return <p>Bom dia</p>
        }else if(hora >= 13 && hora < 18){
            return <p>Boa tarde</p>
        }else if(hora >= 18 && hora <= 23){
            return <p>Boa noite</p>
        }else{
            return <p>boa madrugada</p>
        }
    }
    return(
        <>
            {cumprimento()}
        </>
    )
}
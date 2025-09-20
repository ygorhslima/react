export default function Dados({canal, youtube, curso, somar}){
    var n1 = 100
    var n2 = 50
    return(
        <section>
            <p>Canal: {canal()}</p>
            <p>Youtube: {youtube}</p>
            <p>Curso: {curso}</p>
            <p>a soma entre {n1} e {n2} é igual a {somar(n1,n2)} </p>
        </section>
    )
}
import Dados from "./Dados"
export default function Corpo(){
    const cnl=()=>{
        return 'CFB cursos'
    }
    const somar = (n1, n2)=>{
        return n1 + n2
    }
    return(
        <main 
        style={{
            backgroundColor:'white',
            display:'flex',
            flexDirection:'column',
            width:"90%",
            margin:'10px auto 10px auto',
            padding:'10px',
            borderRadius:'10px',
        }}>
            <h1>Título da página</h1>
            <Dados canal={cnl} youtube='youtube.com' curso='React' somar={somar}/>
        </main>
    )
}
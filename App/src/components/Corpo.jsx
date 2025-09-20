export default function Corpo(props){
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
            {props.children}
        </main>
    )
}
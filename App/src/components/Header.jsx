import Logo from '../assets/logo-generico.png'


export default function Header(){
    return(
        <header 
        style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center', justifyContent:'space-between',
            backgroundColor:'rgba(98, 130, 115, 1)',
            padding:'10px',
            color:'white',
            fontFamily:'sans-serif',
        }}>
            <img src={Logo} width={50} alt="logo-generico"/>
            <h1>Meu Site React</h1>
        </header>
    )
}
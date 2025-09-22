import React from "react"

class CarroComponenteClasse extends React.Component{
    constructor(props){
        super(props)
        this.modelo = "HRV"
        this.state = {
            ligado:false,
            velAtual:0,
        }
    }

    ligarDesligar(){
        this.setState({ligado:!this.state.ligado})
    }

    render(){
        return(
            <>
                <h1>Meu carro: </h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "sim":"não"}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={()=>this.ligarDesligar()}>Ligar</button>
            </>
        )
    }
}

export default CarroComponenteClasse
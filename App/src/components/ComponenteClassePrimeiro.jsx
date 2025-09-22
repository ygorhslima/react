import React from "react";

class ComponenteClassePrimeiro extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <h1>Componente de classe</h1>
                <p>Canal: {this.props.canal}</p>
            </>
        )
    }
}

export default ComponenteClassePrimeiro
import React, {Component} from 'react'

class Answer extends Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    

    render(){
        return(
            <div data-test ="answer-app" className = "resposta">
            <div>
                <p><a>CEP:</a> {this.props.lista.cep}</p>
                <p><a>Estado:</a> {this.props.lista.uf}</p>
                <p><a>Cidade:</a> {this.props.lista.localidade}</p>
                <p><a>Logradouro:</a> {this.props.lista.logradouro}</p>
            </div>
   
            </div>
        )
        
    }


}

export default Answer
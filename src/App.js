import React, {Component} from 'react'
import './style.css'
//import Formulario from './modules/form/Formulario'
import Answer from './modules/answer/Answer'
import MaskedInput from 'react-text-mask'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            cep: '',
            dados: {
                cep: '',
                logradouro: '',
                complemento: '',
                bairro: '',
                localidade: '',
                uf: '',
                unidade: '',
                ibge: '',
                gia: ''
            }
        }
        this.buscarCep = this.buscarCep.bind(this)
    }
    
    buscarCep= (e) =>{
        
        const inputcep = this.state.cep
        let url = `https://viacep.com.br/ws/${inputcep}/json/`
        fetch(url).then(r => r.json())
        .then(json =>{
            if(json.erro){
                alert('Digite um CEP válido!')
            }
            else{
                let state = this.state
                state.dados = json
                this.setState(state)
                console.log(json.logradouro)
            }

        }).catch( err =>{
            console.log(err)
            alert('Digite um CEP válido!')
        }
            
        )
        
        e.preventDefault()
        
    }

    render(){
        return(
            <div data-test = "container-app"  className = "container">
                <div className = "formulario">
                <form data-test ="form-app" onSubmit = {this.buscarCep}>
                <MaskedInput data-test ="input-app" className='inputCep' type= "text" name ="cpf"
                    value ={this.state.cpf} onChange={(e) => this.setState({cep: e.target.value})}
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                    showMask={false} placeholder ="00000-000"/>
                    <button data-test ="button-app" className='botao' type = "submit" >Buscar CEP</button>
                </form>
            </div>
            {
                this.state.dados.localidade? <Answer lista={this.state.dados} />
                : null

            }

            </div>
        )
    }
}


export default App
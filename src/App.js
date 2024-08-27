import React, { Component } from "react";
import FormularioCadastroNota from "./Components/FormularioCadastroNota";
import ListaDeNotas from "./Components/ListaDeNotas";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    //criação do objeto de nota
    const novaNota = {titulo, texto};
    //criação de um novo array de notas incluindo a novaNota criada
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    //criando uma variavel para receber o novo estado do array
    const novoEstadoDoArray = {
      notas: novoArrayDeNotas
    }
    //atualizando o estado do array de notas do construtor
    this.setState(novoEstadoDoArray)
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastroNota criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;

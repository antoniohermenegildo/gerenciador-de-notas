import React, { Component } from "react";
import FormularioCadastroNota from "./Components/FormularioCadastroNota";
import ListaDeNotas from "./Components/ListaDeNotas";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastroNota/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;

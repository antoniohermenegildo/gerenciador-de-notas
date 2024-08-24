import React, { Component } from "react";
import FormularioCadastroNota from "./Components/FormularioCadastroNota/FormularioCadastroNota";
import ListaDeNotas from "./Components/ListaDeNotas/ListaDeNotas";
class App extends Component {
  render(){
    return (
      <section>
        <FormularioCadastroNota/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;

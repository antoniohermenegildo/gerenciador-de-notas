import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastroNota extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título"></input>
        <textarea placeholder="Escreva sua nota..."></textarea>
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastroNota
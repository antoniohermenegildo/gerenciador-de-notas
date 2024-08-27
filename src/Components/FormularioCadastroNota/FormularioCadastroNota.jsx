import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastroNota extends Component {
  
  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  
  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input 
          type="text" 
          placeholder="Título" 
          className="form-cadastro_input"
          /* o this dentro do JavaScript é dinâmico, ele depende do contexto onde é chamado. 
          na hora que passo a referência para o método "handleMudancaTitulo" da instância de titulo 
          preciso falar para ele que na hora que ele for executar essa função, esse método, associa ele 
          a esse objeto, o this que tem lá dentro com esse objeto. Para essa associação tenho que fazer 
          um ".bind". Dentro da associação vou passar o objeto que estou querendo associar. 
          No nosso caso ficou o método "handleMudancaTitulo" que tem um "this" para associar com o "this" 
          que já existe dentro do método "onChange" e precisamos associar os dois "this". 
          Ficou como consta no nosso código "this.handleMudancaTitulo.bind(this)" */
          onChange={this._handleMudancaTitulo.bind(this)}
        ></input>
        <textarea 
          rows={15} 
          placeholder="Escreva sua nota..." 
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastroNota
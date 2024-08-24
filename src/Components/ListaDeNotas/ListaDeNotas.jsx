//importação de componentes nativos do React
import React, { Component } from "react";
//importação de componentes criados
import CardNota from "../CardNota/CardNota";
//importação de CSS
import "./estilo.css"

class ListaDeNotas extends Component {
  render() {
    return ( 
      <ul>
        {Array.of("Trabalho", "Estudo", "Lazer").map((categoria, index) => {
          return(
            <li key={index}>
              <h2>{categoria}</h2>
              <CardNota/>
            </li>
          );
        })};
      </ul>
    );
  }
}
export default ListaDeNotas

//importação de componentes nativos do React
import React, { Component } from "react";
//importação de componentes criados
import CardNota from "../CardNota";
//importação de CSS
import "./estilo.css"

class ListaDeNotas extends Component {
  render() {
    return ( 
      <ul className="lista-notas">
        {Array.of("Trabalho", "Estudo", "Lazer").map((categoria, index) => {
          return(
            <li className="lista-notas_item" key={index}>
              <CardNota/>
            </li>
          )
        })}
      </ul>
    );
  }
}
export default ListaDeNotas

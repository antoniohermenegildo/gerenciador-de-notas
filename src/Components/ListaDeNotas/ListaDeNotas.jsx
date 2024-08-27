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
        {this.props.notas.map((nota, index) => {
          return(
            <li className="lista-notas_item" key={index}>
              {/* para passar as informações do titulo e do texto enviamos para o cardNotas atraves
              de propriedades */}
              <CardNota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas

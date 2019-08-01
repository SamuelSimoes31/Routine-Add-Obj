import React from 'react';
import { Input, Tooltip, Icon, Button} from 'antd';
import 'antd/es/date-picker/style/css';
import FormatoItem from './FormatoItem.js';



class Lista extends React.Component{
    

    render(){

    let {itens,tam} = this.props;
    const retorno = [];

    for(let i =0; i< tam; i++){
      retorno.push(
        <FormatoItem nome = {itens[i].nome}
        localizacao = {itens[i].local}  />
      )
    }

      return(
        <div>

        {retorno}

        </div>
      );

    }
}

export default Lista;
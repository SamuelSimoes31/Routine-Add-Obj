import React from 'react';
import { Input, Tooltip, Icon, Button} from 'antd';
import 'antd/es/date-picker/style/css';
import './FormatoItem.css'


class FormatoItem extends React.Component{

  render(){
     const { nome, localizacao} = this.props
    return(
      <div className = "Item" > 
          
            <div className = "DivObj">
              {nome}
            </div> 

            <div className = "DivObj2">
              {localizacao}
            </div>
          <Icon className="Delete" type="delete" onClick = {() => {
              let a = confirm('Deseja Realmente excluir este item?')
              if(a==true) alert("Você excluiu um item!")
            
              }
            }/>
      </div>
    );
  }

}

export default FormatoItem;
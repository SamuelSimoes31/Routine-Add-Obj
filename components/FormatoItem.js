import React from 'react';
import { Input, Tooltip, Icon, Button} from 'antd';
import 'antd/es/date-picker/style/css';

class FormatoItem extends React.Component{

  render(){
     const { nome, localizacao} = this.props
    return(
      <div>
          <p>
          {nome} - {localizacao}
          </p>
      </div>
    );
  }

}

export default FormatoItem;
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'antd/es/date-picker/style/css';
import InputLabel from './components/InputLabel.js'
import Lista from './components/Lista.js'
import Entrar from './components/Entrar.js'
import Button from '@material-ui/core/Button';

//<InputLabel/>
//
class App extends Component {

  render() {

    // let obj = [{
    //   nome: 'item1',
    //   local: 'local1'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // },
    // {
    //   nome: 'item2',
    //   local: 'local2'
    // }];
    // <Lista 
          //   itens = {obj} 
          //   tam = {obj.length}
          // />
    return (
      <div className="Background">
          <Entrar/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

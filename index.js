import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'antd/es/date-picker/style/css';
import InputLabel from './components/InputLabel.js'

class App extends Component {

  render() {
    return (
      <div className = "Background">
        
        <InputLabel/>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

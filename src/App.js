import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { mudandoCampoTexto } from './actions';
import { clicandoBotao } from './actions';
import CampoDetalhe from './containers/campo-detalhe';
import './App.css';

class App extends Component {
  state = { campotexto: '' }

  onChange = (e) => {
    this.setState({campotexto: e.target.value});
    this.props.mudandoCampoTexto(e.target.value);
  }

  render() {
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input type="text" id="txtCampo" onChange={(e) => this.onChange(e)} />
        <input type="button" id="btnTrocaTexto" value="Clica ae!" onClick={() => this.props.clicandoBotao(this.state.campotexto)} />
        <CampoDetalhe />
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ mudandoCampoTexto: mudandoCampoTexto,clicandoBotao: clicandoBotao}, dispatch);
}

export default connect(null, matchDispatchToProps)(App);
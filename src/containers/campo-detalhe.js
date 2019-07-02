import React, {Component} from 'react';
import {connect} from 'react-redux';

class CampoDetalhe extends Component {
    render() {

        if(!this.props.novoValorCampo) 
            return(<h1>Digita ae</h1>);

        return (
            <h1>{this.props.novoValorCampo}</h1>
        );
    }
}

function mapStateToProps(state) {
    return {
        novoValorCampo: state.novoValorCampo
    };
}

export default connect(mapStateToProps)(CampoDetalhe);
import {combineReducers} from 'redux'
import MudandoTextoCampoReducer from './reducer-actions'

const allReducers  = combineReducers({
    novoValorCampo: MudandoTextoCampoReducer
});

export default allReducers
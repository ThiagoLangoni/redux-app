import {ATUALIZANDO_CAMPO_TEXT, BOTAO_ATUALIZAR_CAMPO_CLICK} from '../actions/actions-types'



export default function (state = null, action) {
  switch (action.type) {
    case BOTAO_ATUALIZAR_CAMPO_CLICK:
      return action.data;
    case ATUALIZANDO_CAMPO_TEXT:
      return action.data;
    default:
      return state;
  }

}
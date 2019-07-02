import {ATUALIZANDO_CAMPO_TEXT, BOTAO_ATUALIZAR_CAMPO_CLICK} from './actions-types'

export const mudandoCampoTexto = (value) => {
    return {
        type: ATUALIZANDO_CAMPO_TEXT,
        data: value
    }
}

export const clicandoBotao = (value) => {
    return {
        type: BOTAO_ATUALIZAR_CAMPO_CLICK,
        data: value + ' Clicado ;)'
    }
}
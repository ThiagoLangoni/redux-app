import {CLICK_UPDATE_VALUE} from './actionTypes'
import {ONCHANGE_UPDATE_VALUE} from './actionTypes'

export const clickButton = (value) => (
    {
        type: CLICK_UPDATE_VALUE,
        newValue: value
    }
)

export const onChangeText = (value) => (
    {
        type: ONCHANGE_UPDATE_VALUE,
        newValue: value
    }
)


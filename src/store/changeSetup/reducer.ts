import { ISetup } from '../../types'
import {
  changeSetup,
  changeSetupAction,
} from '../../types/actions'
export type { Reducer } from 'redux'

interface state {
  storeSetup: ISetup | null,
}

// инициализируем и описываем тип дефолтного состояния редьюсера
const defaultState: state = {
  storeSetup: null,
}

export const ChangeSetupReducer = (
  state:any = defaultState.storeSetup,
  action: changeSetupAction
  ) => {
  switch (action.type) {
    case changeSetup.CHANGE_SETUP:
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}
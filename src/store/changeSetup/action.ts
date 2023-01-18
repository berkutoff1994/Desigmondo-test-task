import { changeSetupAction, changeSetup } from '../../types/actions'

export const RowsAction = (data: any): changeSetupAction => ({
  type: changeSetup.CHANGE_SETUP,
  payload: data,
})
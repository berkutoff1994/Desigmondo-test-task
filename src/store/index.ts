import { createStore, combineReducers } from 'redux';
import { ChangeSetupReducer } from './changeSetup/reducer';

const rootReducer = combineReducers({
  changeSetup: ChangeSetupReducer,
})

export type RootState = ReturnType<typeof store.getState>
export const store = createStore(rootReducer);
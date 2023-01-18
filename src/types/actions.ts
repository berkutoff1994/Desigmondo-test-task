export enum changeSetup {
  CHANGE_SETUP = 'CHANGE_SETUP',
}

export interface IChangeActiveTab {
  type: changeSetup.CHANGE_SETUP,
}

//экшен для получения активной цитаты
export interface changeSetupAction {
  type: string;
  payload?: any;
}
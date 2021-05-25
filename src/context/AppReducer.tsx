import { IState } from "./GlobalState";

export interface IAction {
  type: string;
  payload: any;
}

export const AppReducer = (state: IState, action: IAction) => {
  console.log(state, action);
    switch(action.type) {
      case "CHANGE_CHOSEN_CLASS":
        return {
          ...state,
          chosenClass: action.payload
        }
      case "CHANGE_HIT_POINTS":
        return {
          ...state,
          hitPoints: action.payload
        }
      case "CHANGE_LEVEL":
        return {
          ...state,
          level: action.payload
        }
      case "CHANGE_SUB_CLASS":
        return {
          ...state,
          subClass: action.payload
        }
      default:
        return state;
    }
  }
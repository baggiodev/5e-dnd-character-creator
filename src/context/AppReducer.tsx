import { IState } from "./GlobalState";

export interface IAction {
  type: string;
  payload: any;
}

export const AppReducer = (state: IState, action: IAction) => {
  console.log(state, action);
    switch(action.type) {
      case "SET_CHOSEN_CLASS":
        return {
          ...state,
          chosenClass: action.payload
        }
      case "SET_HIT_POINTS":
        return {
          ...state,
          hitPoints: action.payload
        }
      case "SET_LEVEL":
        return {
          ...state,
          level: action.payload
        }
      case "SET_SUB_CLASS":
        return {
          ...state,
          subClass: action.payload
        }
      case "SET_CLASS_INFO":
        return {
          ...state,
          classInfo: action.payload
        }
      default:
        return state;
    }
  }
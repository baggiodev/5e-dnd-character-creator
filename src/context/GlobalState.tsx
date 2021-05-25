import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

// interfaces 
export interface IGlobalContext extends IState {
    changeClass(chosenClass: string): void;
    changeHitPoints(hitPoints: number): void;
    changeLevel(level: number): void; 
    changeSubClass(subClass: string): void;
}
export interface IState {
    chosenClass: string;
    level: number;
    hitPoints: number | null;
    subClass: string;
}
export interface IReactChild {
    children: React.ReactNode
}

//  Initial State
const initialState: IState = {
    chosenClass: "",
    hitPoints: null,
    level: 0,
    subClass: "",
};

// Create Context
export const GlobalContext = createContext<Partial<IGlobalContext>>(initialState);

// Provider component
export const GlobalProvider = ({ children }: IReactChild) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    // Actions
    function changeClass(chosenClass: string) {
      dispatch({
        type: "CHANGE_CHOSEN_CLASS",
        payload: chosenClass
      });
    }
    function changeHitPoints(hitPoints: number) {
        dispatch({
          type: "CHANGE_HIT_POINTS",
          payload: hitPoints
        });
    }
    function changeLevel(level: number) {
        dispatch({
            type: "CHANGE_LEVEL",
            payload: level
        });
    }
    function changeSubClass(subClass: string) {
        dispatch({
            type: "CHANGE_SUB_CLASS",
            payload: subClass
        });
    }

  
    return (<GlobalContext.Provider value={{
        chosenClass: state.chosenClass,
        hitPoints: state.hitPoints,
        level: state.level,
        subClass: state.subClass,
        changeClass,
        changeHitPoints,
        changeLevel,
        changeSubClass,
    }}>
      {children}
    </GlobalContext.Provider>);
  }